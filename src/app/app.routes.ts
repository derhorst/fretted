import { Routes } from '@angular/router';
import { FretboardComponent } from './components/fretboard/fretboard/fretboard.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: FretboardComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
];
