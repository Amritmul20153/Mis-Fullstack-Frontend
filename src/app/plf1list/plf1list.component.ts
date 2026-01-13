import { Component } from '@angular/core';

@Component({
  selector: 'app-plf1list',
  imports: [],
  templateUrl: './plf1list.component.html',
  styleUrl: './plf1list.component.scss'
})
export class Plf1listComponent {
  @Component({
  selector: 'app-plf1list',
  imports: [CommonModule, PLF1detailsComponent, FormsModule],
  templateUrl: './plf1list.component.html',
  styleUrls: ['./plf1list.component.scss'],
})
export class PLF1listComponent implements OnInit {
  public plf1s: PLF1[] = [];
  public selectedPLF1: PLF1 | undefined;
  
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
    this.searchPLF1s();
  }

  // ← NEU: Suche mit FHIR Parametern
  public searchPLF1s() {
    const params = new URLSearchParams();
    if (this.searchParams.family) params.append('family', this.searchParams.family);
    if (this.searchParams.gender) params.append('gender', this.searchParams.gender);
    params.append('_count', this.searchParams._count);
    params.append('_page', this.searchParams._page);

    // ✅ FIX: getPLF1sWithSearch() statt getPLF1s()
    this.dataservice.getPLF1sWithSearch(params.toString()).subscribe({
      next: (bundle: any) => {
        this.plf1s = bundle.entry?.map((entry: any) => entry.resource) || [];
        this.total = bundle.total || 0;
      },
      error: (err) => console.error('Search error:', err)
    });
  }

  // ← NEU: Pagination
  public prevPage() {
    const page = Math.max(1, parseInt(this.searchParams._page) - 1);
    this.searchParams._page = page.toString();
    this.searchPLF1s();
  }

  public nextPage() {
    const maxPages = Math.ceil(this.total / parseInt(this.searchParams._count));
    const page = Math.min(maxPages, parseInt(this.searchParams._page) + 1);
    this.searchParams._page = page.toString();
    this.searchPLF1s();
  }

  public onSelect(plf1: PLF1) {
    this.selectedPLF1 = plf1;
  }

  public onPLF1Modified(reload: boolean) {
    if (reload) this.searchPLF1s();
    this.selectedPLF! = undefined;
  }

  public createPLF1() {
    this.selectedPLF1 = new PLF1('');
  }
}


}
