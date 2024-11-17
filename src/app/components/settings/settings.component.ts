import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { defaultSettings, SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  private settingsService = inject(SettingsService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  errorMessage = '';

  settings = this.settingsService.getSettings()
  
  settingsForm = this.formBuilder.group({ 
    onlyNaturalNotes: [this.settings.onlyNaturalNotes ?? defaultSettings.onlyNaturalNotes, Validators.required],
    maxFrets: [this.settings.maxFrets ?? defaultSettings.maxFrets, Validators.required],
    timer: [this.settings.timer ?? defaultSettings.timer, Validators.required],
    fromString: [this.settings.fromStringNo ?? defaultSettings.fromStringNo, Validators.required],
    toString: [this.settings.toStringNo ?? defaultSettings.toStringNo, Validators.required],
    accuracy: [this.settings.accuracy ?? defaultSettings.accuracy, Validators.required],
    playSounds: [this.settings.playSounds ?? defaultSettings.playSounds, Validators.required],
    debug: [this.settings.debug ?? defaultSettings.debug, Validators.required],
  },  {updateOn: 'blur'});

  saveSettigns() {
    if (this.settingsForm.valid) {
      this.settingsService.saveSettings({
        maxFrets: Number(this.settingsForm.controls['maxFrets'].getRawValue()) ?? defaultSettings.maxFrets,
        onlyNaturalNotes: (this.settingsForm.controls['onlyNaturalNotes'].getRawValue()) ?? defaultSettings.onlyNaturalNotes,
        timer: Number(this.settingsForm.controls['timer'].getRawValue()) ?? defaultSettings.timer,
        accuracy: Number(this.settingsForm.controls['accuracy'].getRawValue()) ?? defaultSettings.accuracy,
        fromStringNo: Number(this.settingsForm.controls['fromString'].getRawValue()) ?? defaultSettings.fromStringNo,
        toStringNo: Number(this.settingsForm.controls['toString'].getRawValue()) ?? defaultSettings.toStringNo,
        playSounds: (this.settingsForm.controls['playSounds'].getRawValue()) ?? defaultSettings.playSounds,
        debug: (this.settingsForm.controls['debug'].getRawValue()) ?? defaultSettings.debug,
      });
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'Correct the marked fields';
    }
  }

  resetSettings() {
    this.settingsService.resetSettings();
    this.router.navigate(['/'])
  }
}
