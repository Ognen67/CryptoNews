import {Component, OnInit} from '@angular/core';
import {CryptoService} from '../../service/crypto.service';
import {CryptoMapperService} from '../../mapper/crypto-mapper.service';
import {Crypto} from '../../interface/market/Crypto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: string[];
  cryptos: Crypto[];

  constructor(public mapper: CryptoMapperService,
              public cryptoService: CryptoService) {
  }

  ngOnInit(): void {
    if (this.cryptoService.favorites.length !== 0) {
      this.cryptoService.getMarketCryptos(this.cryptoService.favorites).subscribe(res => {
        this.cryptos = res
        console.log(res)
      })
    }
  }

}



