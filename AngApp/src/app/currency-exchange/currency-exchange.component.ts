import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import {ProfileService} from '../profile.service';
import {ExchangeService} from '../exchange.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css']
})
export class CurrencyExchangeComponent implements OnInit {

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
  }


}

