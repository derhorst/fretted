import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { SlicePipe } from '../../../pipes/slice.pipe';
import { PitchDetectorService } from '../../../services/pitch-detector.service';
import { notesOnStringsAndFrets, NotesOnStringsAndFretsInterface, stringArray } from '../../../configs/notes';
import { SettingsService } from '../../../services/settings.service';
@Component({
  selector: 'app-fretboard',
  standalone: true,
  imports: [RouterOutlet, SlicePipe, DecimalPipe, RouterLink],
  templateUrl: './fretboard.component.html',
  styleUrl: './fretboard.component.scss'
})
export class FretboardComponent {
  pritchDetectorService = inject(PitchDetectorService);
  settingsService = inject(SettingsService)

  settings = this.settingsService.getSettings()
  maxFrets = this.settings.maxFrets || 11;
  onlyFullNotes = this.settings.onlyFullNotes || false;


  showNotes = false;
  threshold = 5;

  stringNames = stringArray

  played?: number;

  time: number = 0
  guessed: number = 0;

  notes = notesOnStringsAndFrets;

  searched: WritableSignal<NotesOnStringsAndFretsInterface | null> = signal(null)
  found: WritableSignal<NotesOnStringsAndFretsInterface | null> = signal(null);
  

  start() {
    this.showNotes = false;
    this.searched.set(this.getRandom());
    this.pritchDetectorService.start()

    this.pritchDetectorService.pitch.subscribe((pitch) => {
      this.time += 100;
      this.played = pitch;
      const search = this.searched()
      if (search && Math.abs(pitch - search.frequency) < this.threshold) {
        console.log('HIT!', search, pitch)
        this.guessed++;
        this.setFound();
        this.searched.set(this.getRandom());
      } else if (pitch > 10) {
        console.log('try again ', pitch, this.searched())
      } 
    })
  }


  getDots(row: number,column: number) {
    return  (row+1) === 3 && (column % 2 === 1 && (column !== 1 && column !== 11 && column !== 13)) || ((row+1) === 1  || (row+1) === 5)&& column === 12
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
    this.found.set(this.searched());
    setTimeout(() => {
      this.found.set(null);
    }, 4000)
  }

  private getRandom() {
    const searchArray = Object.values(notesOnStringsAndFrets).flat()
      .filter(note => note.fret <= this.maxFrets)
      .filter(note => this.onlyFullNotes ? note.note.length < 2 : !!note)
    const note = searchArray[this.randomIntFromInterval(0, searchArray.length)];
    console.log('find', note)
    return note;
  }


 
  private randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
 