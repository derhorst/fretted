import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SettingsInterface } from './settings.service';


export interface HighscoreInterface {
  correct: number;
  settings: SettingsInterface;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {
  

  saveHighscore(correct: number, settings: SettingsInterface, date: Date) {
    localStorage.setItem('highscores', JSON.stringify([...this.getHighscores(), {correct, date, settings}].sort((a,b) =>  (b.correct / b.settings.timer) - (a.correct / a.settings.timer) ).slice(0, 10)))
    this.highscores$.next(this.getHighscores())
  }

  getHighscores(): HighscoreInterface[] {
    return JSON.parse(localStorage.getItem('highscores') ?? '[]')
  }

  resetHighscores() {
    localStorage.removeItem('highscores')
    this.highscores$.next(this.getHighscores())
  }

  highscores$ = new BehaviorSubject<HighscoreInterface[]>(this.getHighscores())

}
