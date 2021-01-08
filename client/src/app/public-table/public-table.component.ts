import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableFilter } from '../_models/table-filter';
import { EntryItems } from '../_models/entry-items';


@Component({
  selector: 'app-public-table',
  templateUrl: './public-table.component.html',
  styleUrls: ['./public-table.component.css']
})

export class PublicTableComponent implements OnInit {
  
  public displayedColumns: string[] = ['id', 'projName', 'platNo', 'platType', 'platArea',
  'subArea', 'matType', 'matVariant', 'procMethod', 'dwgNo', 'dwgCode', 'matGroup', 'description',
  'diameter', 'thickness', 'nal', 'unitWeight', 'baseWeight', 'surfaceArea'];

  public entries: MatTableDataSource<EntryItems>;
  public filteredValues: MatTableDataSource<TableFilter>;
  public fileName= 'MTOTable.xlsx';
  public searchForm: FormGroup;
  
  public projName = '';
  public platNo = '';
  public platType = '';
  public platArea = '';
  public subArea = '';
  public matType = '';
  public matVariant = '';
  public procMethod = '';
  public matGroup = '';
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getEntries();
    this.searchFormInit();
    // this.entries.filterPredicate = this.getFilterPredicate();
    this.getFilterPredicate();

  }

  searchFormInit() {
    this.searchForm = new FormGroup({
      projName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      platNo: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      platType: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      platArea: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      subArea: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      matType: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      matVariant: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      procMethod: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      matGroup: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
    });
  }

  applyFilter() {

    const prn = this.searchForm.get('projName').value;
    const pln = this.searchForm.get('platNo').value;
    const plt = this.searchForm.get('platType').value;
    const pla = this.searchForm.get('platArea').value;
    const psa = this.searchForm.get('subArea').value;
    const mty = this.searchForm.get('matType').value;
    const mva = this.searchForm.get('matVariant').value;
    const prm = this.searchForm.get('procMethod').value;
    const pgr = this.searchForm.get('matGroup').value;

    this.projName = prn === null ? '' : prn;
    this.platNo = pln === null ? '' : pln;
    this.platType = plt === null ? '' : plt;
    this.platArea = pla === null ? '' : pla;
    this.subArea = psa === null ? '' : psa;
    this.matType = mty === null ? '' : mty;
    this.matVariant = mva === null ? '' : mva;
    this.procMethod = prm === null ? '' : prm;
    this.matGroup = pgr === null ? '' : pgr;
  
    // create string of our searching values and split if by '$'
    const filterValue = this.projName + '$' + this.platNo + '$' + this.platType + 
    '$' + this.platArea + '$' + this.subArea + '$' + this.matType + '$' + 
    this.matVariant + '$' + this.procMethod + '$' + this.matGroup
    
    this.entries.filter = filterValue.trim().toLowerCase();

    if (this.entries.paginator) {
      this.entries.paginator.firstPage();
    }
  }

  getFilterPredicate() {
    return (row: EntryItems, filters: string) => {
      // split string per '$' to array
      const filterArray = filters.split('$');
      const projName = filterArray[0];
      const platNo = filterArray[1];
      const platType = filterArray[2];
      const platArea = filterArray[3];
      const subArea = filterArray[4];
      const matType = filterArray[5];
      const matVariant = filterArray[6];
      const procMethod = filterArray[7];
      const matGroup = filterArray[8];

      const matchFilter = [];

      // Fetch data from row
      const columnProjName = row.projName;
      const columnPlatNo = row.platNo;
      const columnPlatType = row.platType;
      const columnPlatArea = row.platArea;
      const columnSubArea = row.subArea;
      const columnMatType = row.matType;
      const columnMatVariant = row.matVariant;
      const columnProcMethod = row.procMethod;
      const columnMatGroup = row.matGroup;

      // verify fetching data by our searching values
      const customFilterPRN = columnProjName.toLowerCase().toLowerCase().includes(projName);
      const customFilterPLN = columnPlatNo.toLowerCase().includes(platNo);
      const customFilterPLT = columnPlatType.toLowerCase().includes(platType);
      const customFilterPLA = columnPlatArea.toLowerCase().includes(platArea);
      const customFilterPSA = columnSubArea.toLowerCase().includes(subArea);
      const customFilterMTY = columnMatType.toLowerCase().includes(matType);
      const customFilterMVA = columnMatVariant.toLowerCase().includes(matVariant);
      const customFilterPRM = columnProcMethod.toLowerCase().includes(procMethod);
      const customFilterPGR = columnMatGroup.toLowerCase().includes(matGroup);
      
      // push boolean values into array

      matchFilter.push(customFilterPRN);
      matchFilter.push(customFilterPLN);
      matchFilter.push(customFilterPLT);
      matchFilter.push(customFilterPLA);
      matchFilter.push(customFilterPSA);
      matchFilter.push(customFilterMTY);
      matchFilter.push(customFilterMVA);
      matchFilter.push(customFilterPRM);
      matchFilter.push(customFilterPGR);

      // return true if all values in array is true
      // else return false
      return matchFilter.every(Boolean);
    };
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

  exportexcel(): void 
    {

       /* table id is passed over here */   
       let element = document.getElementById('entries-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');                                                                    

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

}
