import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/utils/utils.service';

@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrls: ['./more-information.component.css']
})
export class MoreInformationComponent implements OnInit {

  @Input() isHome = true;
  constructor(public _utils: UtilsService) { }

  ngOnInit(): void {
  }

}
