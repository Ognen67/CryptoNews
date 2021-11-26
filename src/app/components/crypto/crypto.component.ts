import {Component, Input, OnInit} from '@angular/core';
import {CryptoService} from '../../service/crypto.service';
import {Router} from '@angular/router';
import {Crypto} from '../../interface/market/Crypto';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  @Input() crypto: Crypto
  @Input() cryptoId: string

  constructor(private cryptoService: CryptoService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  viewCrypto(event): void {
    this.router.navigate(['/cryptocurrencies', event.id])
  }

  addToFavorite(cryptoId): void {

    if (confirm(`Are you sure you want to add ${cryptoId} to favorites?`)) {
      this.cryptoService.addToFavorite(cryptoId)
    }
  }

}
