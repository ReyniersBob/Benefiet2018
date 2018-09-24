import {Component, OnInit} from '@angular/core';
import {BestellingService} from '../bestelling.service';
import {Bestelling} from '../bestelling/bestelling';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatRadioChange, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-bestelling-form',
  templateUrl: './bestelling-form.component.html',
  styleUrls: ['./bestelling-form.component.css']
})
export class BestellingFormComponent implements OnInit {


  bestelling: Bestelling = new Bestelling();
  submitted: boolean;
  totaalPrijs = 0;
  totaalBedragKinderen = 0;
  totaalBedragSpaghetti = 0;
  totaalBedragVeggie = 0;

  private prijsVolwassenen = 12;
  private prijsKinderen = 8;

  bestellingForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    naam: new FormControl('', Validators.required),
    totaalPersonen: new FormControl('', Validators.required),
    dag: new FormControl('', Validators.required),
    uur: new FormControl('', Validators.required),
    aantalVeg: new FormControl(''),
    aantalKinderen: new FormControl(''),
    aantalSpaghetti: new FormControl('')
  });
  tijdsblokken: String[] = ['12u tot 14u', '14u tot 16u', '16u tot 18u', '20u tot 22u'];
  tijdsblokkenZondag: String[] = ['12u tot 14u', '14u tot 16u', '16u tot 18u', '18u tot 20u'];

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
      this.bestellingForm.reset();
    } else {
      this.snackbar.open('U aantal personen komt niet overeen met het aantal bestelde gerechten.', 'close');
    }
  }

  onSubmit(bestelling: Bestelling) {
    console.log(bestelling);
    this.bestelling = bestelling;
    this.bestelling.totaalBedrag = this.totaalPrijs;
    // this.submitted = true;
    this.saveBestelling();
  }

  private totaalPersonenValidatie(bestelling: Bestelling): boolean {
    const aantalKinderen = bestelling.aantalKinderen ? bestelling.aantalKinderen : 0;
    const aantalSpaghetti = bestelling.aantalSpaghetti ? bestelling.aantalSpaghetti : 0;
    const aantalVeg = bestelling.aantalVeg ? bestelling.aantalVeg : 0;
    const totaalPersonenReservatie = aantalKinderen + aantalSpaghetti + aantalVeg;
    const totaalPersonen = bestelling.totaalPersonen;
    return totaalPersonenReservatie === totaalPersonen;
  }


  addToTotaalBedrag(e: any) {
    if (e.target.id === 'kinderen') {
      this.totaalBedragKinderen = 0;
      this.totaalBedragKinderen = e.target.value * this.prijsKinderen;
    } else if (e.target.id === 'spaghetti' ) {
      this.totaalBedragSpaghetti = 0;
      this.totaalBedragSpaghetti = e.target.value * this.prijsVolwassenen;
    } else if (e.target.id === 'veggie') {
      this.totaalBedragVeggie = 0;
      this.totaalBedragVeggie = e.target.value * this.prijsVolwassenen;
    }
    this.totaalPrijs = this.totaalBedragKinderen + this.totaalBedragVeggie + this.totaalBedragSpaghetti;
  }

  editTijdsblokken(e: any) {
    if (e.value === 'Zaterdag 13 oktober') {
      this.tijdsblokken = ['12u tot 14u', '14u tot 16u', '16u tot 18u', '20u tot 22u'];
    }
    if (e.value === 'Zondag 14 oktober') {
      this.tijdsblokken = this.tijdsblokkenZondag;
    }
  }
}
