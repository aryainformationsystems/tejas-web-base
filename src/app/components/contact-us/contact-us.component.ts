import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  @Input('type') type!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
