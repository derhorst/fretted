import { Injectable } from '@angular/core';

export interface SettingsInterface {
  maxFrets: number;
  onlyFullNotes: boolean;
  accuracy: number;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  getSettings(): Partial<SettingsInterface> {
    return JSON.parse(localStorage.getItem('settings') ?? '{}')
  }

  saveSettings(settings: Partial<SettingsInterface>) {
    localStorage.setItem('settings', JSON.stringify({...this.getSettings(), ...settings}))
  }


}
