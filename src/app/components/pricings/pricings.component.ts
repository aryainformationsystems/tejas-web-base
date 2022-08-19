import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricings',
  templateUrl: './pricings.component.html',
  styleUrls: ['./pricings.component.css']
})
export class PricingsComponent implements OnInit {
  @Input('type') type!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
