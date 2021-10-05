import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardComponent} from "./card/card.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'card', component: CardComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
