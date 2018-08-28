import {Component, OnInit, ViewChild} from '@angular/core';
import {BestellingService} from '../bestelling.service';
import {Bestelling} from '../bestelling/bestelling';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

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

  constructor(private service: BestellingService, private snackbar: MatSnackBar) { }

  ngOnInit() {

  }

  newBestelling(): void {
    this.submitted = false;
    this.bestelling = new Bestelling();
  }

  saveBestelling() {
    if (this.totaalPersonenValidatie(this.bestelling)) {
      this.service.createBestelling(this.bestelling);
      this.snackbar.open('U reservatie is verzonden, controleer het ingegeven email adres of deze gelukt is!', 'close');
      this.bestelling = new Bestelling();
    } else {
      this.snackbar.open('U aantal personen komt niet overeen met het aantal bestelde gerechten.');
    }
  }

  onSubmit(bestelling: Bestelling) {
    console.log(bestelling);
    this.bestelling = bestelling;
    // this.submitted = true;
    this.saveBestelling();
  }

  private totaalPersonenValidatie(bestelling: Bestelling): boolean {
    const totaalPersonenReservatie = bestelling.aantalKinderen + bestelling.aantalSpaghetti + bestelling.aantalVeg;
    const totaalPersonen = bestelling.totaalPersonen;
    return totaalPersonenReservatie === totaalPersonen;
  }
}
