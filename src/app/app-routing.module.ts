import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


const routes: Routes = [];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
