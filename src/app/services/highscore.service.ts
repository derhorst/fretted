import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface HighscoreInterface {
  correct: number;
  time: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {
  

  saveHighscore(correct: number, time: number, date: Date) {
    localStorage.setItem('highscores', JSON.stringify([...this.getHighscores(), {correct, time, date}].sort((a,b) =>  (b.correct / b.time) - (a.correct / a.time) ).slice(0, 10)))
    this.highscores$.next(this.getHighscores())
  }

  getHighscores(): any {
    return JSON.parse(localStorage.getItem('highscores') ?? '[]')
  }

  resetSettings() {
    localStorage.removeItem('highscores')
  }

  highscores$ = new BehaviorSubject<HighscoreInterface[]>(this.getHighscores())

}
