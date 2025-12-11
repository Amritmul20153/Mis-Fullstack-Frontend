import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Patient, HumanName, GenderEnum } from '../models/Patient';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patientdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.scss']
})
export class PatientdetailsComponent implements OnInit {
  @Input() id: string = '';
  @Output() patientModified = new EventEmitter<boolean>();

  patient: Patient = new Patient('', 'Patient');
  genderOptions = Object.keys(GenderEnum).filter(k => isNaN(Number(k)));

  constructor(private service: DataService) {}

  ngOnInit(): void {
    if (this.id) {
      this.service.getPatient(this.id).subscribe(p => {
        this.patient = p;

        // Sicherheit für array-Felder
        this.patient.identifier ??= [];
        this.patient.name ??= [];
        this.patient.telecom ??= [];
      });
    }
  }

  savePatient() {
    const operation = this.id
      ? this.service.updatePatient(this.patient)
      : this.service.createPatient(this.patient);

    operation.subscribe(p => {
      this.patient = p;
      this.patientModified.emit(true);
    });
  }

  deletePatient() {
    if (!this.patient.id) return;
    this.service.deletePatient(this.patient.id).subscribe(() => {
      this.patientModified.emit(true);
    });
  }

  addName() {
    this.patient.name.push(new HumanName('', 'official', '', '', []));
  }

  deleteName(name: HumanName) {
    const index = this.patient.name.indexOf(name);
    if (index >= 0) this.patient.name.splice(index, 1);
  }
}
