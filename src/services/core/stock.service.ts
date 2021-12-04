import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



const routes = {
  query: 'query',
  dividends: 'dividens',
  intraday: 'intraday'
};
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) {

   }
  //  Majorly All test endpoint uses IBM

  // Function  to briefing of market data or intraday for two stock market IBM AND MSFT
  getCurrentUpdatePriceMsft() {
    // eslint-disable-next-line no-underscore-dangle
    return this.http.get(`${environment.Alphavantage_Url}${routes.query}?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${environment.Alphavantage_Api_Key}`,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  getCurrentUpdatePriceIbm() {
    // eslint-disable-next-line no-underscore-dangle
    return this.http.get(`${environment.Alphavantage_Url}${routes.query}?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${environment.Alphavantage_Api_Key}`,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  getCurrentUpdatePriceBngo() {
    // eslint-disable-next-line no-underscore-dangle
    return this.http.get(`${environment.Alphavantage_Url}${routes.query}?function=TIME_SERIES_DAILY&symbol=BNGO&apikey=${environment.Alphavantage_Api_Key}`,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  //  Function to get earnings data
  earnings_data() {
      // eslint-disable-next-line no-underscore-dangle
      return this.http.get(`${environment.Alphavantage_Url}${routes.query}?function=EARNINGS&symbol=IBM&apikey=${environment.Alphavantage_Api_Key}`,   {
        observe: 'body',
        headers: new HttpHeaders().append('Content-Type', 'application/json')
      });
  }

  // Function to get dividends
  // get_dividends() {
  //   return this.http.get(`${environment.MarketStack_Url}/${routes.dividends}?access_key=${environment.Market_Stack_Api_Key}&symbols=AAPL`,{
  //     observe: 'body',
  //     headers: new HttpHeaders().append('Content-Type', 'application/json')
  //   });
  // }

}
