import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/utils/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _utils: UtilsService) { }

  ngOnInit(): void {
  }



}
