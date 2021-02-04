import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PublicTableComponent } from './public-table/public-table.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { QueryFormComponent } from './query-form/query-form.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { ToSelectComponent } from './query-form/to-select/to-select.component';
import { ToSumComponent } from './query-form/to-sum/to-sum.component';
import { ToGroupByComponent } from './query-form/to-group-by/to-group-by.component';
import { SharedModule } from './_modules/shared.module';
import { MaterialModule } from './_modules/material.module';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { MemberCardComponent } from './members/member-card/member-card.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PublicTableComponent,
    MemberListComponent,
    MemberDetailComponent,
    QueryFormComponent,
    MainComponent,
    RegisterComponent,
    UserGuideComponent,
    ToSelectComponent,
    ToSumComponent,
    ToGroupByComponent,
    UploadFileComponent,
    MemberCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
