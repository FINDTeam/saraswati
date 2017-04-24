import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  private data: any[]=[{id:1,name:"1"},{id:2,name:"2"}];
  constructor() { }

  ngOnInit() {
  }

}
