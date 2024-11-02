import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { SettingsService } from '../../services/settings.service';
import { Router } from '@angular/router';

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
    onlyFullNotes: [this.settings.onlyFullNotes ?? false, Validators.required],
    maxFrets: [this.settings.maxFrets ?? 11, Validators.required],
    accuracy: [this.settings.accuracy ?? 5, Validators.required],
  });

  saveSettigns() {
    this.settingsService.saveSettings({
      maxFrets: Number(this.settingsForm.controls['maxFrets'].getRawValue()) ?? 11,
      onlyFullNotes: (this.settingsForm.controls['onlyFullNotes'].getRawValue()) ?? false,
      accuracy: (this.settingsForm.controls['accuracy'].getRawValue()) ?? 5,
    });
    this.router.navigate(['/'])
  }
}
