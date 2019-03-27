import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Ovning2',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  userName:string = '';
  status:boolean = true;
  ifButtonClick() {
    this.userName = '';
    this.status = true;
  }
  checkForInput() {

      this.status = false;

  }
  constructor() {

   }

  ngOnInit() {

  }

}
