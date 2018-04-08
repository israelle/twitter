import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  currentUser: any;
    constructor(private userService: UserService) {}

  ngOnInit() {
      this.currentUser = this.userService.currentUser;
      console.log(this.currentUser);
  }

}
