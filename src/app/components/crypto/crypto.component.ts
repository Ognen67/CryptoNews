import {Component, Input, OnInit} from '@angular/core';
import {CryptoService} from '../../service/crypto.service';
import {Crypto} from '../../interface/market/Crypto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  @Input() crypto: Crypto

  constructor(private cryptoService: CryptoService,
              private router: Router) { }

  ngOnInit(): void {

  }

  viewCrypto(event) {
    this.router.navigate(["/cryptocurrencies", event.id] )
  }

  addToFavorite(crypto: Crypto) {
    this.cryptoService.addToFavorite(this.crypto.id)
  }
}
