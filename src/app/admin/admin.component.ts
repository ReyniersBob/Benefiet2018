import {Component, OnInit} from '@angular/core';
import {BestellingService} from '../bestelling.service';
import {Tijdstip} from '../tijdstip/tijdstip';
import {map} from 'rxjs/operators';
import {Bestelling} from '../bestelling/bestelling';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  bestellingen: any;
  displayedColumns: string[] = ['eetGroep', 'email', 'naam', 'spaghetti', 'vegetarisch', 'stoofvlees'];

  constructor(private service: BestellingService) {
  }

  ngOnInit() {
    this.getAlleBestellingenPerTijdstip();
  }

  getAlleBestellingenPerTijdstip() {
    this.service.getBestellingsList().snapshotChanges().pipe(map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()}))))
      .subscribe(bestellingen => {
        console.log(bestellingen);
        this.bestellingen = bestellingen;
      });
  }

  printBestellingen() {
    // const bestelling = new Bestelling();
    // bestelling.email = 'test@test.be';
    // bestelling.naam = 'test1';
    // bestelling.eetGroep = Tijdstip.ZATERDAG_12;
    // bestelling.spaghetti = 2;
    // bestelling.stoofvlees = 4;
    // bestelling.vegetarisch = 1;
    // this.service.createBestelling(bestelling);
    // console.log(this.service.getBestellingsList());
  }
}
