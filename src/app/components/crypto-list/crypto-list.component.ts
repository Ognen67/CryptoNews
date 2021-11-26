import {Component, OnInit} from '@angular/core';
import {Crypto} from '../../interface/market/Crypto';
import {CryptoService} from '../../service/crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {

  cryptos: Crypto[]

  constructor(private cryptoService: CryptoService) {
  }

  ngOnInit(): void {
    this.getAllCryptos()
  }

  getAllCryptos(): void {
    this.cryptoService.getMarkets().subscribe(res => {
      this.cryptos = res
    })
  }

  addWorkout(): void {
    this.cryptoService.addWorkout().subscribe(res => {
      console.log(res)
    })
  }

  getWorkout(): void {
    this.cryptoService.getWorkout().subscribe(res => {
      console.log(res)
    })
  }
}
