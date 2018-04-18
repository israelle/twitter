import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services';
import {Tweet} from '../_models/tweet';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent implements OnInit {

  currentUser: any;
  tweets: any = [];
  formData: any = [];
    constructor(private userService: UserService) {}

  ngOnInit() {
      this.currentUser = this.userService.currentUser;
      console.log(this.currentUser);
      this.numberOfTweet("Corentin");
      this.numberPeopleIfollow("Corentin");
      this.numberFollowers("Corentin");
      this.showLastTweet("Corentin");
      
  }

  

  addNewTweet(tweet: Tweet) {
      //this.userService.addNewTweet(tweet);
  }

  number:any;
  numberIfollow:any;
  numberOffollowers:any;

  numberOfTweet(st : string) {

    console.log("le modele ");
                console.log(st);
    
    this.userService.numberOfTweet(st)
        .subscribe(
            
            data => {
              this.number = data
                console.log("le nombre de tweet est de");
                console.log(data);
                        
            },
            error => {

                console.log("une erreur ");
              
            });
}

numberPeopleIfollow(st : string) {

  console.log("le modele ");
              console.log(st);
  
  this.userService.numberOfPeopleIfollw(st)
      .subscribe(
          
          data => {
            this.numberIfollow = data
              console.log("le nombre de tweet est de");
              console.log(data);
                      
          },
          error => {

              console.log("une erreur ");
            
          });
}



numberFollowers(st : string) {

  console.log("le modele ");
              console.log(st);
  
  this.userService.numberOfFollowers(st)
      .subscribe(
          
          data => {
            this.numberOffollowers = data
              console.log("le nombre de tweet est de");
              console.log(data);
                      
          },
          error => {

              console.log("une erreur ");
            
          });
}

lastTweet : any =  [];
users : any =  [];
allPeopleFollowBy : any =  [];

showLastTweet(st : string) {

  console.log("le modele ");
              console.log(st);
  
  this.userService.showLastTweets(st)
      .subscribe(
          
          data => {
            this.lastTweet = data
              console.log("le nombre de tweet est de");
              console.log(data);
                      
          },
          error => {

              console.log("une erreur ");
            
          });
}

user : string = "Corentin";

showAllPeopleFollowBy(user) {


  console.log("le modele ");
              console.log(user);
  
  this.userService.showAllPeopleFollowBy(user)
      .subscribe(
          
          data => {
            this.allPeopleFollowBy = data
              console.log("le nombre de tweet est de");
              console.log(data);
                      
          },
          error => {

              console.log("une erreur ");
            
          });
}


allPeopleMyFollowers:any = [];

showAllMyfollwers(user) {


  console.log("le modele ");
              console.log(user);
  
  this.userService.showAllMyFollwer(user)
      .subscribe(
          
          data => {
            this.allPeopleMyFollowers = data
              console.log("le nombre de tweet est de");
              console.log(data);
                      
          },
          error => {

              console.log("une erreur ");
            
          });
}




  

}
