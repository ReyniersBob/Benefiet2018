import {Component, OnInit, ViewChild} from '@angular/core';
import {BestellingService} from '../bestelling.service';
import {Bestelling} from '../bestelling/bestelling';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bestelling-form',
  templateUrl: './bestelling-form.component.html',
  styleUrls: ['./bestelling-form.component.css']
})
export class BestellingFormComponent implements OnInit {


  bestelling: Bestelling = new Bestelling();
  submitted: boolean;

  bestellingForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    naam: new FormControl('', Validators.required),
    totaalPersonen: new FormControl('', Validators.required),
    dag: new FormControl('', Validators.required),
    uur: new FormControl('', Validators.required),
    aantalVeg: new FormControl(''),
    aantalKinderen: new FormControl(''),
    aantalSpaghetti: new FormControl('')
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
    this.bestelling = bestelling;
    // this.submitted = true;
    this.saveBestelling();
  }

}
