import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Ingredient,
  Medication,
  MedicationStatus,
  Ratio,
  Quantity
} from '../models/Medication';
import { DataService } from '../data.service';

@Component({
  selector: 'app-medicationdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medicationdetails.component.html',
  styleUrls: ['./medicationdetails.component.scss']
})
export class MedicationdetailsComponent implements OnInit {

  @Input() medication!: Medication;
  @Output() medicationModified = new EventEmitter<boolean>();

  statusOptions = ['active', 'inactive', 'entered-in-error'];

  constructor(private service: DataService) { }

  private buildQuantity(): Quantity {
    return {
      value: 0,
      system: 'http://unitsofmeasure.org',
      code: '',
      unit: ''
    };
  }

  private buildRatio(): Ratio {
    return {
      numerator: this.buildQuantity(),
      denominator: this.buildQuantity()
    };
  }

  // erzeugt ein neues Ingredient mit kompletter Struktur
  buildIngredient(): Ingredient {
    return {
      itemCodeableConcept: {
        coding: [{
          system: '',
          code: '',
          display: ''
        }]
      },
      isActive: true,
      strength: this.buildRatio()
    };
  }

  ngOnInit(): void {

    if (!this.medication.status) {
      this.medication.status = MedicationStatus.active;
    }

    if (!this.medication.batch) {
      this.medication.batch = { lotNumber: '', expirationDate: '' };
    }

    if (!this.medication.form) {
      this.medication.form = { text: '' };
    }

    if (!this.medication.ingredient) {
      this.medication.ingredient = [];
    }

    // vorhandene Ingredients struktur-sicher machen
    this.medication.ingredient = this.medication.ingredient.map(ing => {
      const base = this.buildIngredient();
      return {
        ...base,
        ...ing,
        itemCodeableConcept: {
          ...base.itemCodeableConcept,
          ...ing.itemCodeableConcept,
          coding: ing.itemCodeableConcept?.coding && ing.itemCodeableConcept.coding.length > 0
            ? ing.itemCodeableConcept.coding
            : base.itemCodeableConcept!.coding
        },
        strength: {
          ...base.strength,
          ...ing.strength,
          numerator: { ...base.strength!.numerator, ...ing.strength?.numerator },
          denominator: { ...base.strength!.denominator, ...ing.strength?.denominator }
        }
      };
    });
  }

  addIngredient(): void {
    this.medication.ingredient.push(this.buildIngredient());
  }

  removeIngredient(i: number): void {
    this.medication.ingredient.splice(i, 1);
  }

  saveMedication(): void {
    console.log('Saving medication:', this.medication);

    if (!this.medication.id || this.medication.id === 'neu') {
      this.medication.id = undefined;
      this.service.addMedication(this.medication).subscribe(() => {
        this.medicationModified.emit(true);
      });
    } else {
      this.service.updateMedication(this.medication).subscribe(() => {
        this.medicationModified.emit(true);
      });
    }
  }

  deleteMedication(): void {
    if (!this.medication.id) {
      return;
    }
    this.service.deleteMedication(this.medication.id).subscribe(() => {
      this.medicationModified.emit(true);
    });
  }
}