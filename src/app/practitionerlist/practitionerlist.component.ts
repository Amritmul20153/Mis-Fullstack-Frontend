import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Practitioner } from '../models/Practitioner';
import { DataService } from '../data.service';
import { PractitionerdetailsComponent } from '../practitionerdetails/practitionerdetails.component';

@Component({
  selector: 'app-practitionerlist',
  standalone: true,
  imports: [CommonModule, PractitionerdetailsComponent],
  templateUrl: './practitionerlist.component.html',
  styleUrls: ['./practitionerlist.component.scss']
})
export class PractitionerlistComponent implements OnInit {
  practitionerList: Practitioner[] = [];
  selectedPractitioner: Practitioner = new Practitioner();

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.loadPractitioners();
  }

  loadPractitioners() {
    this.service.getPractitioners().subscribe(data => this.practitionerList = data);
  }

  selectPractitioner(p: Practitioner) {
    this.selectedPractitioner = p;
  }

  onPractitionerModified(hide: boolean) {
    if (hide) this.selectedPractitioner = new Practitioner();
    this.loadPractitioners();
  }

  createPractitioner() {
    const newP = new Practitioner();
    this.service.addPractitioner(newP).subscribe(() => this.loadPractitioners());
  }
}
