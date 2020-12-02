import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})

export class QueryFormComponent implements OnInit {
  isLinear = false;
  toSelectGroup: FormGroup;
  toGroupByGroup: FormGroup;
  toSumGroup: FormGroup;
  allComplete: boolean = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.toSelectGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.toGroupByGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.toSumGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

}
