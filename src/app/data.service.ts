import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './models/Patient';
import { Practitioner } from './models/Practitioner';
import { Encounter } from './models/Encounter';
import { Medication } from './models/Medication';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  
  //                         PATIENT
  
  private patientUrl = 'http://localhost:8080/api/patient/';

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  }

  getPatient(id: string): Observable<Patient> {
    return this.http.get<Patient>(this.patientUrl + id);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientUrl, patient);
  }


  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientUrl, patient);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.patientUrl + patient.id, patient);
  }

  deletePatient(id: string): Observable<any> {
    return this.http.delete(this.patientUrl + id);
  }


  //                         PRACTITIONER
  

  private practitionerUrl = 'http://localhost:8080/api/practitioner/';

  getPractitioners(): Observable<Practitioner[]> {
    return this.http.get<Practitioner[]>(this.practitionerUrl);
  }

  getPractitioner(id: string): Observable<Practitioner> {
    return this.http.get<Practitioner>(this.practitionerUrl + id);
  }

  addPractitioner(practitioner: Practitioner): Observable<Practitioner> {
    return this.http.post<Practitioner>(this.practitionerUrl, practitioner);
  }

  updatePractitioner(practitioner: Practitioner): Observable<Practitioner> {
    return this.http.put<Practitioner>(this.practitionerUrl + practitioner.id, practitioner);
  }

  deletePractitioner(id: string): Observable<any> {
    return this.http.delete(this.practitionerUrl + id);
  }


 
  //                         ENCOUNTER
  
  private encounterUrl = 'http://localhost:8080/api/encounters/';

  getEncounters(): Observable<Encounter[]> {
    return this.http.get<Encounter[]>(this.encounterUrl);
  }

  getEncounter(id: string): Observable<Encounter> {
    return this.http.get<Encounter>(this.encounterUrl + id);
  }

  addEncounter(encounter: Encounter): Observable<Encounter> {
    return this.http.post<Encounter>(this.encounterUrl, encounter);
  }

  deleteEncounter(id: string): Observable<any> {
    return this.http.delete(this.encounterUrl + id);
  }

  createEncounter(encounter: Omit<Encounter, 'id'>): Observable<Encounter> {
    return this.http.post<Encounter>(this.encounterUrl, encounter);
  }

  updateEncounter(encounter: Encounter): Observable<Encounter> {
    return this.http.put<Encounter>(this.encounterUrl + encounter.id, encounter);
  }

  //                         MEDICATION
  

  private medicationUrl = "http://localhost:8080/api/medication";

  getMedications(): Observable<Medication[]> {
    return this.http.get<Medication[]>(this.medicationUrl);
  }

  getMedication(id: string): Observable<Medication> {
    return this.http.get<Medication>(`${this.medicationUrl}/${id}`);
  }

  addMedication(m: Medication): Observable<Medication> {
    return this.http.post<Medication>(this.medicationUrl, m);
  }

  updateMedication(m: Medication): Observable<Medication> {
    return this.http.put<Medication>(`${this.medicationUrl}/${m.id}`, m);
  }

  deleteMedication(id: string): Observable<any> {
    return this.http.delete(`${this.medicationUrl}/${id}`);
  }

}
