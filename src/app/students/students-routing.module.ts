import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './Components/add-students/add-students.component';
import { AllStudentsComponent } from './Components/all-students/all-students.component';
import { EditStudentsComponent } from './Components/edit-students/edit-students.component';

const routes: Routes = [
  {path: '', component:AllStudentsComponent},
  {path:'students',component:AllStudentsComponent},
  {path:'students/add',component:AddStudentsComponent},
  {path:'students/edit/:id',component:EditStudentsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
