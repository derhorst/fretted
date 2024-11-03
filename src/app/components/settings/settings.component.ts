import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';

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

  settings = this.settingsService.getSettings()
  
  settingsForm = this.formBuilder.group({ 
    onlyNaturalNotes: [this.settings.onlyNaturalNotes ?? false, Validators.required],
    maxFrets: [this.settings.maxFrets ?? 11, Validators.required],
    timer: [this.settings.timer ?? 5, Validators.required],
    accuracy: [this.settings.accuracy ?? 5, Validators.required],
    debug: [this.settings.debug ?? false, Validators.required],
  });

  saveSettigns() {
    this.settingsService.saveSettings({
      maxFrets: Number(this.settingsForm.controls['maxFrets'].getRawValue()) ?? 11,
      onlyNaturalNotes: (this.settingsForm.controls['onlyNaturalNotes'].getRawValue()) ?? false,
      timer: (this.settingsForm.controls['timer'].getRawValue()) ?? 4,
      accuracy: (this.settingsForm.controls['accuracy'].getRawValue()) ?? 5,
      debug: (this.settingsForm.controls['debug'].getRawValue()) ?? false,
    });
    this.router.navigate(['/'])
  }
}
