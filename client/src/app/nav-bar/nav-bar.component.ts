import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  title = 'MTOC';
  model: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model);
  }
}
