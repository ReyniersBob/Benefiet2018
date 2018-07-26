import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Bestelling} from './bestelling/bestelling';

@Injectable({
  providedIn: 'root'
})
export class BestellingService {

  private dbPath = '/bestelling';

  bestellingsRef: AngularFireList<Bestelling> = null;

  constructor(private db: AngularFireDatabase) {
    this.bestellingsRef = db.list(this.dbPath);
  }

  createBestelling(bestelling: Bestelling): void {
    this.bestellingsRef.push(bestelling);
  }

  updateBestelling(key: string, value: any): void {
    this.bestellingsRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteBestelling(key: string): void {
    this.bestellingsRef.remove(key).catch(error => this.handleError(error));
  }

  getBestellingsList(): AngularFireList<Bestelling> {
    return this.db.list(this.dbPath);
  }

  private handleError(error) {
    console.log(error);
  }
}
