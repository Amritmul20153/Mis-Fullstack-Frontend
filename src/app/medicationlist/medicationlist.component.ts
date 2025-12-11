import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Medication, MedicationStatus } from '../models/Medication';
import { DataService } from '../data.service';
import { MedicationdetailsComponent } from '../medicationdetails/medicationdetails.component';

@Component({
  selector: 'app-medicationlist',
  standalone: true,
  imports: [CommonModule, MedicationdetailsComponent],
  templateUrl: './medicationlist.component.html',
  styleUrls: ['./medicationlist.component.scss']
})
export class MedicationlistComponent implements OnInit {

  medications: Medication[] = [];
  selectedMedication?: Medication;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.loadMedications();
  }

  loadMedications(): void {
    this.service.getMedications().subscribe(data => {
      this.medications = data;
    });
  }

  onSelect(m: Medication): void {
    this.selectedMedication = JSON.parse(JSON.stringify(m));
  }

  createMedication(): void {
    this.selectedMedication = {
      status: MedicationStatus.active,
      ingredient: [],
      batch: { lotNumber: '', expirationDate: '' },
      form: { text: '' }
    };
  }

  onMedicationModified(reload: boolean): void {
    if (reload) {
      this.loadMedications();
    }
    this.selectedMedication = undefined;
  }
}