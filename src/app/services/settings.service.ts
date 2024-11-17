import { Injectable } from '@angular/core';

export interface SettingsInterface {
  maxFrets: number;
  onlyNaturalNotes: boolean;
  timer: number;
  accuracy: number;
  fromStringNo: number;
  toStringNo: number;
  playSounds: boolean;
  debug: boolean;
}

export const defaultSettings: SettingsInterface = {
  maxFrets: 11,
  onlyNaturalNotes: false,
  timer: 5,
  accuracy: 2,
  fromStringNo: 1,
  toStringNo: 6,
  playSounds: true,
  debug: false
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  getSettings(): SettingsInterface {
    return {...defaultSettings, ...JSON.parse(localStorage.getItem('settings') ?? '{}')}
  }

  saveSettings(settings: Partial<SettingsInterface>) {
    localStorage.setItem('settings', JSON.stringify({...this.getSettings(), ...settings}))
  }

  resetSettings() {
    localStorage.removeItem('settings')
  }
}
