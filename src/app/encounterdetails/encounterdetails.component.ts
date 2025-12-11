import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Encounter, CodeableConcept, Reference } from '../models/Encounter';
import { DataService } from '../data.service';

@Component({
  selector: 'app-encounterdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './encounterdetails.component.html',
  styleUrls: ['./encounterdetails.component.scss']
})
export class EncounterdetailsComponent implements OnInit {
  @Input() id: string = '';
  @Output() encounterModified = new EventEmitter<boolean>();

  encounter: Encounter = new Encounter();
  statusOptions = Encounter.statusCode;

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getEncounter(this.id).subscribe(e => {
      this.encounter = e;
      this.encounter.encounterStatus ??= 'planned';
      this.encounter.priority ??= new CodeableConcept('');
      this.encounter.serviceProvider ??= new Reference('', '');
      this.encounter.identifier ??= [];
    });
  }

  updateEncounter() {
    this.encounter.encounterStatus ??= 'planned';
    this.encounter.priority ??= new CodeableConcept('');
    this.encounter.serviceProvider ??= new Reference('', '');
    this.encounter.identifier ??= [];

    console.log('Sende Encounter:', this.encounter);

    this.service.updateEncounter(this.encounter).subscribe({
      next: e => {
        this.encounter = e;
        this.encounterModified.emit(false);
      },
      error: err => console.error('Fehler beim Speichern', err)
    });
  }

  deleteEncounter() {
    this.service.deleteEncounter(this.encounter.id!).subscribe(() => {
      this.encounterModified.emit(true);
    });
  }
}
