import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services';
import {Tweet} from '../_models/tweet';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent implements OnInit {

  currentUser: any;
  theRoadProfile:any;
  tweets: any = [];
  formData: any = [];

  user : any =  this.userService.data;


    constructor(private userService: UserService,private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.params.subscribe((params) => {
        console.log("je suis le route param de mon profile ");
        this.theRoadProfile = params;
        console.log(params);

        console.log("je suis le this.theRoadProfile ");
        console.log(this.theRoadProfile.id);
        this.theRoadProfile = params;

      });


      console.log("je suis le this.userService.data   ");
        console.log(this.userService.data );
      
   
      this.currentUser = this.userService.currentUser;
      console.log(" le this.currentUser");
      console.log(this.currentUser);
      this.numberOfTweet(this.userService.data);
      this.numberPeopleIfollow(this.userService.data);
      this.numberFollowers(this.userService.data);
      this.showLastTweet(this.userService.data);
      this.suggestions();
      
      
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
              console.log("ce sont allPeopleMyFollowers");
              console.log(data);
                      
          },
          error => {

              console.log("une erreur ");
            
          });
}



following:  {
    login : "Corentin",
    peopleFollowByUser : any
    
   }

   foll: any;

   listSuggestions : any = [];


addFollowing(f) {

    console.log("le modele ");
                console.log(f);
    
    this.userService.addFollowing(this.userService.data,  f)
        .subscribe(
            
            data => {
              this.allPeopleMyFollowers = data
                console.log(" ces personne sont abonne à moi !");
                console.log(data);
                        
            },
            error => {
  
                console.log("une erreur ");
              
            });

            this.showAllPeopleFollowBy(this.userService.data);
  }


listOfSugestion: any =  [];

  suggestions() {

    console.log("je suis la sugestion");

    this.userService.allSuggestions()
        .subscribe(
            
            data => {
              this.listOfSugestion = data
                console.log(" les sugestions!");
                console.log(data);
                        
            },
            error => {
  
                console.log("une erreur ");
              
            });
  }




  

}
