import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public testVal: string;

  constructor() { }

  ngOnInit(): void {
    this.testVal = 'Hello, Cloud Gurus!';
  }

}
