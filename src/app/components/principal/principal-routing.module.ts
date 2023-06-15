import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { HomeComponent } from '../dashboard/home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [{ path: '', component: PrincipalComponent ,
children: [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutMeComponent }
]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
