import { Component, OnInit } from '@angular/core';
import {BestellingService} from '../bestelling.service';
import {Bestelling} from '../bestelling/bestelling';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bestelling-form',
  templateUrl: './bestelling-form.component.html',
  styleUrls: ['./bestelling-form.component.css']
})
export class BestellingFormComponent implements OnInit {

  bestelling: Bestelling = new Bestelling();
  submitted: boolean;

  bestellingForm = new FormGroup({
    email: new FormControl(''),
    naam: new FormControl('')
  });

  constructor(private service: BestellingService) { }

  ngOnInit() {
  }

  newBestelling(): void {
    this.submitted = false;
    this.bestelling = new Bestelling();
  }

  saveBestelling() {
    this.service.createBestelling(this.bestelling);
    this.bestelling = new Bestelling();
  }

  onSubmit(bestelling: Bestelling) {
    console.log(bestelling);
    // this.submitted = true;
    // this.saveBestelling();
  }

}
