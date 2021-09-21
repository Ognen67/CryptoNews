import {Component, Input, OnInit} from '@angular/core';
import {Coin} from '../../../interface/Coin/Coin';

@Component({
  selector: 'app-crypto-info',
  templateUrl: './crypto-info.component.html',
  styleUrls: ['./crypto-info.component.css']
})
export class CryptoInfoComponent implements OnInit {

  @Input() crypto: Coin

  constructor() { }

  ngOnInit(): void {
  }

}
