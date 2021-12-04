import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/services/core/stock.service';

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.scss']
})
export class DividendsComponent implements OnInit {
  dividends: any;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    // Initial earnings function invoke
    // this.stockService.get_dividends().subscribe((data: any) => {
    //   this.dividends = data;
    //   console.log('This is the data returned', this.dividends);
    // })
  }

}
