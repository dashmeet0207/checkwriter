import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CwriterComponent } from './cwriter/cwriter.component';


const routes: Routes = [
  {path:"",component:CwriterComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
