import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './models/Patient';
import { Practitioner } from './models/Practitioner';
import { Encounter } from './models/Encounter';
import { Medication } from './models/Medication';
import { PLF1 } from './models/PLF1';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  // =========================
  // BASE URL
  // =========================
  private readonly baseUrl = '/api';

  // Cookies für Session/Auth über Proxy senden
  private readonly httpOptions = { withCredentials: true };

  // =========================
  // PATIENT
  // =========================
  private readonly patientUrl = `${this.baseUrl}/patient`;

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl, this.httpOptions);
  }

  // ✅ FIX: KEIN Slash vor ?
  getPatientsWithSearch(params: string = ''): Observable<any> {
    const url = params ? `${this.patientUrl}?${params}` : this.patientUrl;
    return this.http.get<any>(url, this.httpOptions);
  }

  getPatient(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.patientUrl}/${id}`, this.httpOptions);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientUrl, patient, this.httpOptions);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientUrl, patient, this.httpOptions);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.patientUrl}/${patient.id}`, patient, this.httpOptions);
  }

  deletePatient(id: string): Observable<any> {
    return this.http.delete(`${this.patientUrl}/${id}`, this.httpOptions);
  }

  // =========================
  // PRACTITIONER
  // =========================
  private readonly practitionerUrl = `${this.baseUrl}/practitioner`;

  getPractitioners(): Observable<Practitioner[]> {
    return this.http.get<Practitioner[]>(this.practitionerUrl, this.httpOptions);
  }

  getPractitionersWithSearch(params: string = ''): Observable<any> {
    const url = params ? `${this.practitionerUrl}?${params}` : this.practitionerUrl;
    return this.http.get<any>(url, this.httpOptions);
  }

  getPractitioner(id: string): Observable<Practitioner> {
    return this.http.get<Practitioner>(`${this.practitionerUrl}/${id}`, this.httpOptions);
  }

  addPractitioner(practitioner: Practitioner): Observable<Practitioner> {
    return this.http.post<Practitioner>(this.practitionerUrl, practitioner, this.httpOptions);
  }

  updatePractitioner(practitioner: Practitioner): Observable<Practitioner> {
    return this.http.put<Practitioner>(`${this.practitionerUrl}/${practitioner.id}`, practitioner, this.httpOptions);
  }

  deletePractitioner(id: string): Observable<any> {
    return this.http.delete(`${this.practitionerUrl}/${id}`, this.httpOptions);
  }

  // =========================
  // ENCOUNTER
  // =========================
  private readonly encounterUrl = `${this.baseUrl}/encounters`;

  getEncounters(): Observable<Encounter[]> {
    return this.http.get<Encounter[]>(this.encounterUrl, this.httpOptions);
  }

  getEncounter(id: string): Observable<Encounter> {
    return this.http.get<Encounter>(`${this.encounterUrl}/${id}`, this.httpOptions);
  }

  addEncounter(encounter: Encounter): Observable<Encounter> {
    return this.http.post<Encounter>(this.encounterUrl, encounter, this.httpOptions);
  }

  createEncounter(encounter: Omit<Encounter, 'id'>): Observable<Encounter> {
    return this.http.post<Encounter>(this.encounterUrl, encounter, this.httpOptions);
  }

  updateEncounter(encounter: Encounter): Observable<Encounter> {
    return this.http.put<Encounter>(`${this.encounterUrl}/${encounter.id}`, encounter, this.httpOptions);
  }

  deleteEncounter(id: string): Observable<any> {
    return this.http.delete(`${this.encounterUrl}/${id}`, this.httpOptions);
  }

  // =========================
  // MEDICATION
  // =========================
  private readonly medicationUrl = `${this.baseUrl}/medication`;

  getMedications(): Observable<Medication[]> {
    return this.http.get<Medication[]>(this.medicationUrl, this.httpOptions);
  }

  getMedication(id: string): Observable<Medication> {
    return this.http.get<Medication>(`${this.medicationUrl}/${id}`, this.httpOptions);
  }

  addMedication(m: Medication): Observable<Medication> {
    return this.http.post<Medication>(this.medicationUrl, m, this.httpOptions);
  }

  updateMedication(m: Medication): Observable<Medication> {
    return this.http.put<Medication>(`${this.medicationUrl}/${m.id}`, m, this.httpOptions);
  }

  deleteMedication(id: string): Observable<any> {
    return this.http.delete(`${this.medicationUrl}/${id}`, this.httpOptions);
  }

  // =========================
  // PLF
  // =========================
  private readonly plf1Url = `${this.baseUrl}/plf1s`;

  getPLF1s(): Observable<PLF1[]> {
    return this.http.get<PLF1[]>(this.plf1Url, this.httpOptions);
  }

  getPLF1(id: string): Observable<PLF1> {
    return this.http.get<PLF1>(`${this.plf1Url}/${id}`, this.httpOptions);
  }

  addPLF1(plf1: PLF1): Observable<PLF1> {
    return this.http.post<PLF1>(this.plf1Url, plf1, this.httpOptions);
  }

  createPLF1(plf1: Omit<PLF1, 'id'>): Observable<PLF1> {
    return this.http.post<PLF1>(this.plf1Url, plf1, this.httpOptions);
  }

  updatePLF1(plf1: PLF1): Observable<PLF1> {
    return this.http.put<PLF1>(`${this.plf1Url}/${plf1.id}`, plf1, this.httpOptions);
  }

  deletePLF1(id: string): Observable<any> {
    return this.http.delete(`${this.plf1Url}/${id}`, this.httpOptions);
  }
}
