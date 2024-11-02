import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PitchDetectorService } from './services/pitch-detector.service';
import { NoteInterface, notes, strings, stringArray } from './configs/notes';
import { SlicePipe } from "./pipes/slice.pipe";
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SlicePipe, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
getDots(row: number,column: number) {
  return (row+1) === 3 && column === 3 || (row+1) === 3 && column === 5 || (row+1) === 3 && column === 7 || (row+1) === 3 && column === 9  || (row+1) === 1 && column === 12|| (row+1) === 5 && column === 12
}
  pritchDetectorService = inject(PitchDetectorService);
  showNotes = false;
  threshold = 5;

  searchOnString: number = 1;
  searchNote?: NoteInterface
  stringNames = stringArray

  played?: number;

  time: number = 0
  guessed: number = 0;

  notes = notes;

  searched: WritableSignal<{
    stringNumber: number;
    fretNumber: number
  } | null> = signal(null);
  maxFrets = 12;

  found: WritableSignal<{
    stringNumber: number,
    fretNumber: number,
            
  } | null> = signal(null);

 
  search: NoteInterface | undefined;


  start() {
    this.showNotes = false;
    this.search = this.getRandom();
    this.pritchDetectorService.start()

    this.pritchDetectorService.pitch.subscribe((pitch) => {
      this.time += 100;
      this.played = pitch;
      if (this.search && Math.abs(pitch - this.search.frequency) < this.threshold) {
        console.log('HIT!', this.search, pitch)
        this.guessed++;
        this.setFound();
        this.search = this.getRandom();
      } else if (pitch > 10) {
        console.log('try again ', pitch, this.search)
      } 
    })
  }
    title = 'fretted';


  
  
  private setFound() {
    this.found.set(this.searched());
    setTimeout(() => {
      this.found.set(null);
    }, 2000)
  }

  getRandom() {
    const stringNumber = this.randomIntFromInterval(0,5);
    const string = stringArray[stringNumber];
    const fretNumber = this.randomIntFromInterval(0, (this.maxFrets - 1))
    let note = notes[string][fretNumber];


    console.log(string, fretNumber)


    this.searched.set({
      stringNumber,
      fretNumber
    })

    this.searchNote = note;
    this.searchOnString = stringNumber +1;

    return note;
  }

 
  randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
}
 