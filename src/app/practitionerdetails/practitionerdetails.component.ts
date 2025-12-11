import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Practitioner,
  HumanName,
  Identifier,
  Narrative,
  Address,
  ContactPoint,
  Qualification
} from '../models/Practitioner';
import { DataService } from '../data.service';

@Component({
  selector: 'app-practitionerdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './practitionerdetails.component.html',
  styleUrls: ['./practitionerdetails.component.scss']
})
export class PractitionerdetailsComponent implements OnInit {
  @Input() id: string = '';
  @Output() practitionerModified = new EventEmitter<boolean>();

  practitioner: Practitioner = new Practitioner();
  genderOptions = Practitioner.genderCode;

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getPractitioner(this.id).subscribe(p => {
      this.practitioner = p;

      // Sicherheits-Initialisierungen:
      this.practitioner.identifier ??= [];
      this.practitioner.name ??= [];
      this.practitioner.telecom ??= [];
      this.practitioner.address ??= [];
      this.practitioner.qualification ??= [];
      this.practitioner.photo ??= [];
      this.practitioner.text ??= new Narrative('generated', '<div>Auto generated</div>');

      // Zeilen (line[]) initialisieren, falls null
      this.practitioner.address.forEach(a => {
        if (!Array.isArray(a.line)) {
          a.line = [''];
        }
      });
    });
  }

  updatePractitioner() {
    // Sicherheit auch beim Speichern
    this.practitioner.identifier ??= [];
    this.practitioner.name ??= [];
    this.practitioner.telecom ??= [];
    this.practitioner.address ??= [];
    this.practitioner.qualification ??= [];
    this.practitioner.photo ??= [];
    this.practitioner.text ??= new Narrative('generated', '<div>Auto generated</div>');

    this.practitioner.address.forEach(a => {
      if (!Array.isArray(a.line)) {
        a.line = [''];
      }
    });

    console.log('➡️ Sende Practitioner:', this.practitioner);

    this.service.updatePractitioner(this.practitioner).subscribe(p => {
      this.practitioner = p;
      this.practitionerModified.emit(false);
    });
  }

  deletePractitioner() {
    this.service.deletePractitioner(this.practitioner.id!).subscribe(() => {
      this.practitionerModified.emit(true);
    });
  }

  addName() {
    this.practitioner.name.push(new HumanName('', 'official', '', ''));
  }

  deleteName(name: HumanName) {
    const index = this.practitioner.name.indexOf(name);
    if (index >= 0) this.practitioner.name.splice(index, 1);
  }
}
