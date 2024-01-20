import { StoreService } from './../../service/store/store.service';
import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: any[] = [];

  constructor(private store: StoreService) {
    console.log('HomeComponent constructor');
  }

  // when page is loaded, this function is called
  ngOnInit() {
    // run js file for this page
    $.getScript('../../../../assets/js/main.js');
    // get all products from the server
  }





}
