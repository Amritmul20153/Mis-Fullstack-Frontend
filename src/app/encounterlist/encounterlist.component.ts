import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Encounter } from '../models/Encounter';
import { DataService } from '../data.service';
import { EncounterdetailsComponent } from '../encounterdetails/encounterdetails.component';

@Component({
  selector: 'app-encounterlist',
  standalone: true,
  imports: [CommonModule, EncounterdetailsComponent],
  templateUrl: './encounterlist.component.html',
  styleUrls: ['./encounterlist.component.scss']
})
export class EncounterlistComponent implements OnInit {
  encounterList: Encounter[] = [];
  selectedEncounter: Encounter = new Encounter();

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.loadEncounters();
  }

  loadEncounters() {
    this.service.getEncounters().subscribe(data => {
      // Null-Absicherung
      this.encounterList = data.map(e => ({
        ...e,
        priority: e.priority ?? { text: '' },
        serviceProvider: e.serviceProvider ?? { display: '' },
        identifier: e.identifier ?? []
      }));
    });
  }

  selectEncounter(e: Encounter) {
    this.selectedEncounter = e;
  }

  onEncounterModified(hide: boolean) {
    if (hide) this.selectedEncounter = new Encounter();
    this.loadEncounters();
  }

  createEncounter() {
    const newE = new Encounter();
    this.service.addEncounter(newE).subscribe(() => this.loadEncounters());
  }
}
