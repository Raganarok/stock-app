import { Component } from '@angular/core';
import { StockInterface, StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Stock';
  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    service.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
