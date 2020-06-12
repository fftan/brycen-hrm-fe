
import { Component, OnInit } from '@angular/core';
import * as CryptoJs from 'crypto-js';

import { getUser } from './../../helpers/defineFunc';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = getUser();
  
  constructor() { }
  
  ngOnInit(): void {
    console.log("ProfileComponent -> user", this.user)
  }
}
