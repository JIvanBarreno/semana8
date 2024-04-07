import { Injectable } from '@angular/core';
import { BehaviorSubject, share } from 'rxjs';
import { Puppy } from '../../models/puppydata.model';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private sharePuppy = new BehaviorSubject<Puppy>(new Puppy('', ''));
  currentPuppy = this.sharePuppy.asObservable();
  
  constructor() { }

  changePuppy(puppy: Puppy) {
    this.sharePuppy.next(puppy);
  }
}
