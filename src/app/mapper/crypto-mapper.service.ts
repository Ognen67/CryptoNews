import {Injectable} from '@angular/core';
import {CryptoService} from '../service/crypto.service';
import {Crypto} from '../interface/market/Crypto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoMapperService {

  constructor(private cryptoService: CryptoService) {
  }

  // getFavorites() {
  //   this.cryptoService.getFavorites().forEach(fav => {
  //     return this.cryptoService.getMarketCrypto(fav)
  //   })
  // }
}
