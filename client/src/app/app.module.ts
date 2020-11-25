import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PublicTableComponent } from './public-table/public-table.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    ToGroupByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    SharedModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
