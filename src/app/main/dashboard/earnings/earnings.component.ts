import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/services/core/stock.service';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.scss']
})
export class EarningsComponent implements OnInit {
  earnings: any;
  earningssymbol: any;
  p: number = 1;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    // Initial earnings function invoke
    this.stockService.earnings_data().subscribe((data: any) => {
      this.earnings = data;
      this.earningssymbol = data['symbol'];
    })
  }

  // Function to filter earning accross company
  filterEarnings() {

  }
}
