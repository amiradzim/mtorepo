import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Material Take-Off';
  users: any;
  entries: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'projName', 'platNo', 'costElement', 'subCostElement',
'section', 'matType', 'matVariant', 'procMethod', 'dwgNo', 'dwgCode', 'matGroup', 'description',
'diameter', 'thickness', 'nal', 'unitWeight', 'baseWeight', 'surfaceArea'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private http: HttpClient) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.entries.filter = filterValue.trim().toLowerCase();

    if (this.entries.paginator) {
      this.entries.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.getUsers();
    this.getEntries();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
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

