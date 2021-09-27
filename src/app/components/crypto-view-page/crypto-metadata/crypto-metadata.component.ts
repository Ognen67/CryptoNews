import {Component, Input, OnInit} from '@angular/core';
import {Coin} from '../../../interface/Coin/Coin';
import {CryptoService} from '../../../service/crypto.service';

@Component({
  selector: 'app-crypto-metadata',
  templateUrl: './crypto-metadata.component.html',
  styleUrls: ['./crypto-metadata.component.css']
})
export class CryptoMetadataComponent implements OnInit {

  @Input() crypto: Coin

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
  }

  addToFavorite(cryptoId: string): void {
    console.log(cryptoId)
    this.cryptoService.addToFavorite(cryptoId)
  }
}
