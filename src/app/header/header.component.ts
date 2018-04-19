import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services';
import {current} from 'codelyzer/util/syntaxKind';
import {User} from '../_models';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;

  

  profileUser : any =  this.userService.data;


  

    isConnected: boolean;
  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

    theRoadHeader:any;

  ngOnInit() {

    this.route.params.subscribe((params) => {
      console.log("je suis le route param du header");
      this.theRoadHeader = params;
      console.log(params);
      console.log(this.route.snapshot.data);
    });

    this.currentUser = this.userService.currentUser;
    console.log('this.currentUser');
    console.log(this.profileUser);
    if (this.currentUser !== null) {
        this.isConnected = true;
    } else {
        this.isConnected = false;
    }
  }


  
  user:any;


   searchValue: any = {
    content : ""
   };


search(searchValue) {


  console.log("le modele ");
              console.log(this.searchValue.content);
  
  this.userService.search(this.searchValue.content)
      .subscribe(
          
          data => {
            this.searchValue = data
              console.log("le searchValue est");
              console.log(data);
                      
          },
          error => {

              console.log("une erreur ");
            
          });
}





}
