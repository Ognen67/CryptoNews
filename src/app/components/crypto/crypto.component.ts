import {Component, Input, OnInit} from '@angular/core';
import {CryptoService} from '../../service/crypto.service';
import {Crypto} from '../../interface/market/Crypto';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  @Input() crypto: Crypto

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {

  }

}
