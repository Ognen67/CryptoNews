import { Component, OnInit } from '@angular/core';
import {CryptoService} from '../../service/crypto.service';
import {GlobalData} from '../../interface/GlobalData';

@Component({
  selector: 'app-info-banner',
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.css']
})
export class InfoBannerComponent implements OnInit {

  globalData: GlobalData

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getGlobalData().subscribe(res => this.globalData = res)
  }

}
