import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  firstname = "Jordan";
  person = {
    firstname : 'Jordan',
    lastname: 'yure',
    age: 21,
    address: 'Route 66'
  }
  age = 100
  constructor() { }

  ngOnInit() {
  }

}
