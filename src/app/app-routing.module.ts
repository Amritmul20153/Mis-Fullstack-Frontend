import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientlistComponent } from './patientlist/patientlist.component';

const routes: Routes = [
  { path: 'patients', component: PatientlistComponent },
  // Weitere Routen können hier hinzugefügt werden
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
