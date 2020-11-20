import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-public-table',
  templateUrl: './public-table.component.html',
  styleUrls: ['./public-table.component.css']
})

export class PublicTableComponent implements OnInit {
  entries: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'projName', 'platNo', 'costElement', 'subCostElement',
  'section', 'matType', 'matVariant', 'procMethod', 'dwgNo', 'dwgCode', 'matGroup', 'description',
  'diameter', 'thickness', 'nal', 'unitWeight', 'baseWeight', 'surfaceArea'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private http: HttpClient) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.entries.filter = filterValue.trim().toLowerCase();

    if (this.entries.paginator) {
      this.entries.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries() {
    this.http.get('https://localhost:5001/api/entries').subscribe((response: any[]) => {
      this.entries = new MatTableDataSource(response);
      this.entries.sort = this.sort;
      this.entries.paginator = this.paginator;
    }, error => {                               
      console.log(error);
    })
  }

}
