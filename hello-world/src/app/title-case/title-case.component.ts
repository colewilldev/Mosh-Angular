import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.sass']
})
export class TitleCaseComponent implements OnInit {
  title:string = "This is the Title";
  constructor() { }

  inputMethod(e){
    this.title = e;
  }

  ngOnInit(): void {
  }

}
