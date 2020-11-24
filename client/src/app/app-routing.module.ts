import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { QueryFormComponent } from './query-form/query-form.component';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { PublicTableComponent } from './public-table/public-table.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },

  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'public-table', component: PublicTableComponent
      },
    
      {
        path: 'query-form', component: QueryFormComponent
      },
    
      {
        path: 'members', component: MemberListComponent
      },
      
      {
        path: 'members/id', component: MemberDetailComponent
      },
    ]
  },

  {
    path: 'user-guide', component: UserGuideComponent
  },

  // catch all or wild card root to reroute back to main component 
  {
    path: '**', component: MainComponent , pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
