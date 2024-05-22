import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitatsComponent } from './features/components/habitats/habitats.component';
import { AnimauxComponent } from './features/components/animaux/animaux.component';
import { ContactComponent } from './features/components/contact/contact.component';
import { GestionComponent } from './features/components/gestion/gestion.component';
import { AccueilComponent } from './features/components/accueil/accueil.component';
import { LoginComponent } from './features/components/00-Squelette/squelette-header/login/login.component';
import { ServicesComponent } from './features/components/services/services.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'habitats', component: HabitatsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'animaux', component: AnimauxComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

