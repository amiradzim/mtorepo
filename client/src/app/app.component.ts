import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Material Take-Off';
  fileName= 'MTOTable.xlsx';  
  users: any;
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
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

