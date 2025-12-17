import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Patient } from '../models/Patient';
import { CommonModule } from '@angular/common';
import { PatientdetailsComponent } from '../patientdetails/patientdetails.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patientlist',
  imports: [CommonModule, PatientdetailsComponent, FormsModule],
  templateUrl: './patientlist.component.html',
  styleUrl: './patientlist.component.scss',
  standalone: true
})
export class PatientlistComponent implements OnInit {
  public patients: Patient[] = [];
  public selectedPatient: Patient | undefined;
  
  // ← NEU: Suche + Pagination
  public total = 0;
  public searchParams = {
    family: '',
    gender: '',
    _count: '10',
    _page: '1'
  };

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.searchPatients();
  }

  // ← NEU: Suche mit FHIR Parametern
  public searchPatients() {
    const params = new URLSearchParams();
    if (this.searchParams.family) params.append('family', this.searchParams.family);
    if (this.searchParams.gender) params.append('gender', this.searchParams.gender);
    params.append('_count', this.searchParams._count);
    params.append('_page', this.searchParams._page);

    // ✅ FIX: getPatientsWithSearch() statt getPatients()
    this.dataservice.getPatientsWithSearch(params.toString()).subscribe({
      next: (bundle: any) => {
        this.patients = bundle.entry?.map((entry: any) => entry.resource) || [];
        this.total = bundle.total || 0;
      },
      error: (err) => console.error('Search error:', err)
    });
  }

  // ← NEU: Pagination
  public prevPage() {
    const page = Math.max(1, parseInt(this.searchParams._page) - 1);
    this.searchParams._page = page.toString();
    this.searchPatients();
  }

  public nextPage() {
    const maxPages = Math.ceil(this.total / parseInt(this.searchParams._count));
    const page = Math.min(maxPages, parseInt(this.searchParams._page) + 1);
    this.searchParams._page = page.toString();
    this.searchPatients();
  }

  public onSelect(patient: Patient) {
    this.selectedPatient = patient;
  }

  public onPatientModified(reload: boolean) {
    if (reload) this.searchPatients();
    this.selectedPatient = undefined;
  }

  public createPatient() {
    this.selectedPatient = new Patient('');
  }
}
