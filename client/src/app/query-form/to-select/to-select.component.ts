import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-select',
  templateUrl: './to-select.component.html',
  styleUrls: ['./to-select.component.css']
})
export class ToSelectComponent implements OnInit {
  model: string [];

  constructor() { }

  ngOnInit(): void {
  }

}
