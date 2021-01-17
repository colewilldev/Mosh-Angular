import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.sass']
})
export class CreateCourseFormComponent{
  categories= [
    {id:1, name: 'Angular'},
    {id:2, name: 'React'},
    {id:3, name: 'Vue'}
  ]
  constructor() { }

  submitMethod(data){
    console.log(data.value)
  }

}
