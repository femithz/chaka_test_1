import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/services/core/stock.service';

@Component({
  selector: 'app-market-brief',
  templateUrl: './market-brief.component.html',
  styleUrls: ['./market-brief.component.scss']
})
export class MarketBriefComponent implements OnInit {
  latest_ibm_stock_price: any;
  latest_bngo_stock_price: any;
  latest_ibm_stock_price_meta: any;
  latest_bngo_stock_price_meta: any;
  latest_msft_stock_price: any;
  latest_msft_stock_price_meta: any;
  dailyIbmPrice: { date: string; data: any; } | undefined;
  dailyMsftPrice: { date: string; data: any; } | undefined;
  dailyBingoPrice: { date: string; data: any; } | undefined;
  dailyBingoPriceLow: any;
  dailyBingoPriceOpen: any;
  dailyMsftPriceOpen: any;
  dailyMsftPriceLow: any;
  dailyIbmPriceOpen: any;
  dailyIbmPriceLow: any;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
     // Initial earnings function invoke
     this.stockService.getCurrentUpdatePriceIbm().subscribe((data: any) => {
      this.latest_ibm_stock_price_meta = data['Meta Data']['3. Last Refreshed'];
      this.latest_ibm_stock_price = data['Time Series (Daily)'];
      // initiate new array
      let IbmArray: { date: string; data: any; }[] = [];
      Object.keys(this.latest_ibm_stock_price).forEach(key  => IbmArray.push({
        date: key,
        data: this.latest_ibm_stock_price[key]
      }))
      this.dailyIbmPrice = IbmArray.find(item => item.date === this.latest_ibm_stock_price_meta);
      this.dailyIbmPriceOpen =   this.dailyIbmPrice?.['data']?.['1. open']
      this.dailyIbmPriceLow =   this.dailyIbmPrice?.['data']?.['3. low']
    })
    this.stockService.getCurrentUpdatePriceMsft().subscribe((data: any) => {
      this.latest_msft_stock_price = data['Time Series (Daily)'];
      this.latest_msft_stock_price_meta = data['Meta Data']['3. Last Refreshed'];
      // initiate new array
      let MsftArray: { date: string; data: any; }[] = [];
      Object.keys(this.latest_msft_stock_price).forEach(key  => MsftArray.push({
        date: key,
        data: this.latest_msft_stock_price[key]
      }))
      this.dailyMsftPrice = MsftArray.find(item => item.date === this.latest_msft_stock_price_meta);
      this.dailyMsftPriceOpen =   this.dailyMsftPrice?.['data']?.['1. open']
      this.dailyMsftPriceLow =   this.dailyMsftPrice?.['data']?.['3. low']
    })
    this.stockService.getCurrentUpdatePriceBngo().subscribe((data: any) => {
      this.latest_bngo_stock_price = data['Time Series (Daily)'];
      this.latest_bngo_stock_price_meta = data['Meta Data']['3. Last Refreshed'];
            // initiate new array
            let BingoArray: { date: string; data: any; }[] = [];
            Object.keys(this.latest_bngo_stock_price).forEach(key  => BingoArray.push({
              date: key,
              data: this.latest_bngo_stock_price[key]
            }))
            this.dailyBingoPrice = BingoArray.find(item => item.date ===  this.latest_bngo_stock_price_meta);
            this.dailyBingoPriceOpen =   this.dailyBingoPrice?.['data']?.['1. open']
            this.dailyBingoPriceLow =   this.dailyBingoPrice?.['data']?.['3. low']
    })
  }

}
