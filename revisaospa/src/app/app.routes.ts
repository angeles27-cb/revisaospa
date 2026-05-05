import { Routes } from '@angular/router';
import { Angular } from './page/angular/angular';
import { Tailwind } from './page/tailwind/tailwind';
import { Impactos } from './page/impactos/impactos';

export const routes: Routes = [
    {path:'angular', component:Angular},
   {path:'tailwind', component:Tailwind},
    {path:'impactos', component:Impactos},
];
 
        