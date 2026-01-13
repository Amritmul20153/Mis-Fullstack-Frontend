import { Routes } from '@angular/router';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { PractitionerlistComponent } from './practitionerlist/practitionerlist.component';
import { EncounterlistComponent } from './encounterlist/encounterlist.component';
import { MedicationlistComponent } from './medicationlist/medicationlist.component';
import { Plf1detailsComponent } from './plf1details/plf1details.component';
import { Plf1listComponent } from './plf1list/plf1list.component';

export const routes: Routes = [
    {
        path: '',
        component: PatientlistComponent
    },
    {
        path: 'patientlist',
        component: PatientlistComponent
    },
    { 
        path: 'practitioners', component: PractitionerlistComponent
    },
    {
    path: 'encounterlist',
    component: EncounterlistComponent
    },
    {
    path: 'medicationlist',
    component: MedicationlistComponent
    },
    {
        path: '',
        title: "PLF",
        component: Plf1detailsComponent

    }, 
    {
        path: '',
        title: "PLFs",
        component: Plf1listComponent

    }
];
