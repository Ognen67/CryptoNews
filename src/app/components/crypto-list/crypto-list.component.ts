import { Component, OnInit } from '@angular/core';
import {Crypto} from '../../interface/market/Crypto';
import {CryptoService} from '../../service/crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {

  cryptos: Crypto[]

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getCrypto()
  }

  getCrypto(): void {
    this.cryptoService.getMarkets().subscribe(res => {
      console.log(res)
      this.cryptos = res
    })
  }
}
