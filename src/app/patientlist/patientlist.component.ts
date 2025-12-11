import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Patient } from '../models/Patient';
import { CommonModule } from '@angular/common';
import { PatientdetailsComponent } from '../patientdetails/patientdetails.component';

@Component({
  selector: 'app-patientlist',
  imports: [CommonModule, PatientdetailsComponent],
  templateUrl: './patientlist.component.html',
  styleUrl: './patientlist.component.scss',
  standalone: true
})
export class PatientlistComponent implements OnInit {
  public patients: Patient[] = [];
  public selectedPatient: Patient | undefined;

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  public getPatients() {
    this.dataservice.getPatients().subscribe(data => this.patients = data);
  }

  public onSelect(patient: Patient) {
    this.selectedPatient = patient;
  }

  public onPatientModified(reload: boolean) {
    if (reload) this.getPatients();
    this.selectedPatient = undefined;
  }

  public createPatient() {
    this.selectedPatient = new Patient('');
  }
}
