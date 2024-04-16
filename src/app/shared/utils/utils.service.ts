import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor (private router: Router ){}
  goTo(page: string){
    this.router.navigate([page]);
  }
}
