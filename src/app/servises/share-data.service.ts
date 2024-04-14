import { Injectable } from '@angular/core';
import { BehaviorSubject, share } from 'rxjs';
import { Puppy } from '../../models/puppydata.model';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private sharePuppy = new BehaviorSubject<Array<Puppy>>([]);
  currentPuppy = this.sharePuppy.asObservable();
  
  constructor() { }

  changePuppy(puppy: Puppy) {
    let arrayPuppy: Array<Puppy> = this.sharePuppy.getValue();
    arrayPuppy.push(puppy);

    this.sharePuppy.next(arrayPuppy);
  }
}
