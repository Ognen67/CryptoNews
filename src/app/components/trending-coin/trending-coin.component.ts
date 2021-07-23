import {Component, Input, OnInit} from '@angular/core';
import {Coin, TrendingCoins} from '../../interface/trending/TrendingCoins';

@Component({
  selector: 'app-trending-coin',
  templateUrl: './trending-coin.component.html',
  styleUrls: ['./trending-coin.component.css']
})
export class TrendingCoinComponent implements OnInit {

  @Input() trendingCoin: Coin

  constructor() { }

  ngOnInit(): void {
  }

}
