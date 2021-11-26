import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {CryptoService} from '../../service/crypto.service';
import {ChartInfo} from '../../interface/ChartInfo/ChartInfo';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() cryptoId: string
  @Input() days: string
  chart = []
  chartForCrypto: ChartInfo

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getChartForCrypto(this.cryptoId, this.days).subscribe(res => {
      this.chartForCrypto = res;
      console.log(res)
    })

  }

}
