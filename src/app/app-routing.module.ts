import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './nav/person-list/person-list.component';
import { StarListComponent } from './nav/star-list/star-list.component';
import { DbWarperComponent } from './nav/db-warper/db-warper.component';


const routes: Routes = [ { path:'db', component:DbWarperComponent ,
children:[
  { path:'person',   component:PersonListComponent},
  { path:'stars',     component:StarListComponent},
  { path:'',          redirectTo:'person', pathMatch: 'full'},
  { path:'**',        redirectTo:'person', pathMatch: 'full'},
],
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
