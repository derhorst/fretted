import { Component, DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, DecimalPipe, JsonPipe } from '@angular/common';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { SlicePipe } from '../../../pipes/slice.pipe';
import { PitchDetectorService } from '../../../services/pitch-detector.service';
import { notesOnStringsAndFrets, NotesOnStringsAndFretsInterface, stringArray } from '../../../configs/notes';
import { SettingsService } from '../../../services/settings.service';
import { interval, map, Observable, takeUntil, timer } from 'rxjs';
import { SoundService } from '../../../services/sound.service';
import { HighscoreService } from '../../../services/highscore.service';
@Component({
  selector: 'app-fretboard',
  standalone: true,
  imports: [SlicePipe, DecimalPipe, RouterLink, JsonPipe, AsyncPipe, DatePipe],
  templateUrl: './fretboard.component.html',
  styleUrl: './fretboard.component.scss'
})
export class FretboardComponent {
  pritchDetectorService = inject(PitchDetectorService);
  settingsService = inject(SettingsService)
  soundService = inject(SoundService)
  highscoreService = inject(HighscoreService)
  destroyRef = inject(DestroyRef)
  
  settings = this.settingsService.getSettings()
  maxFrets = this.settings.maxFrets ;
  onlyNaturalNotes = this.settings.onlyNaturalNotes;
  accuracy = this.settings.accuracy;
  fromStringNo = this.settings.fromStringNo;
  toStringNo = this.settings.toStringNo;
  debug = this.settings.debug;
  timer = this.settings.timer;

  timeElapsed$?: Observable<number>;

  showNotes = false;

  stringNames = stringArray

  played?: number;

  correct: number = 0;

  notes = notesOnStringsAndFrets;

  searched: WritableSignal<NotesOnStringsAndFretsInterface | null> = signal(null)
  found: WritableSignal<NotesOnStringsAndFretsInterface | null> = signal(null);
  
  lastPlayed?: string;

  score = 0
  currentScore = 0;

  highscores = toSignal(this.highscoreService.highscores$.pipe(map((highscores) => highscores)))

  start() {
    this.showNotes = false;
    this.searched.set(this.getRandom());
    this.correct = 0;
    this.pritchDetectorService.start()

    this.timeElapsed$ = interval(1000).pipe(map(time => time + 1),takeUntil(timer(this.timer * 60 * 1000)), takeUntilDestroyed(this.destroyRef))

    this.pritchDetectorService.pitch.pipe(takeUntil(timer(this.timer * 60 * 1000)), takeUntilDestroyed(this.destroyRef)).subscribe(
      {next: (pitch) => {
      this.played = pitch;
      const search = this.searched()
      if (search && Math.abs(pitch - search.frequency) < this.accuracy) {
        console.log('HIT!', search, pitch)
        this.correct++;
        this.setFound();
        this.searched.set(this.getRandom());
      } else if (pitch > 10) {
        console.log('try again ', pitch, this.searched())
      } 
    },
    complete: () => {
      this.searched.set(null);
      const date = new Date();
      this.lastPlayed = date.toJSON();
      this.highscoreService.saveHighscore(this.correct, this.timer, date)
    }
  })
  }

  getDots(row: number,column: number) {
    return  (row+1) === 3 && (column % 2 === 1 && (column !== 1 && column !== 11 && column !== 13)) || ((row+1) === 1  || (row+1) === 5) && column === 12
  }

  getActiveString(row: number,fret: number) {
    const searched = this.searched();
    let secondOctave = false;
    if (searched && searched.fret > 12) {
      secondOctave = true;
    }
    return searched && this.searched()?.string === row && (secondOctave ? fret >= 12 : fret < 12)
  }
  
  private setFound() {
    this.soundService.playSuccess();
    this.found.set(this.searched());
    setTimeout(() => {
      this.found.set(null);
    }, 500)
  }

  private getRandom() {
    const searchArray = Object.values(notesOnStringsAndFrets).flat()
      .filter(note => note.fret <= this.maxFrets)
      .filter(note => this.onlyNaturalNotes ? note.note.length < 2 : !!note)
      .filter(note => note.string >= this.fromStringNo)
      .filter(note => note.string <= this.toStringNo)
    const note = searchArray[this.randomIntFromInterval(0, searchArray.length-1)];
    console.log('find', note)
    return note;
  }


 
  private randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
 