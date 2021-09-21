import {Component, Input, OnInit} from '@angular/core';
import {Coin} from '../../../interface/Coin/Coin';

@Component({
  selector: 'app-crypto-metadata',
  templateUrl: './crypto-metadata.component.html',
  styleUrls: ['./crypto-metadata.component.css']
})
export class CryptoMetadataComponent implements OnInit {

  @Input() crypto: Coin

  constructor() { }

  ngOnInit(): void {
  }

}
