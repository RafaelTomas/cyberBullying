import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/utils/utils.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public _utils: UtilsService) { }

  ngOnInit(): void {
  }

}
