import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private successSound = new Audio("/assets/sounds/success.mp3"); 

  constructor() { }


  playSuccess() { 
    this.successSound.play()
  };

}
