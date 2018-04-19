import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../_models/index';
import {AlertService, UserService} from '../_services/index';
import {TweetService} from '../_services/tweet.service';
import {Router, ActivatedRoute} from '@angular/router';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    formData: any;
    description: string;
    loading = false;
    @Output() myProfileName =new EventEmitter();


    constructor(private userService: UserService,
                private twitterService: TweetService,
                private alertService: AlertService,
                private router: Router,
                private route: ActivatedRoute) {
    }


    register(st : string) {
   
        this.loading = true;
        this.userService.showTweets(st)
            .subscribe(
                
                data => {
                    this.formData = data
                   
                            
                },
                error => {

                    console.log("une erreur ");
                    
                  

                    this.alertService.error(error);
                    this.loading = false;
                });
    }



    ;



theRoad:any;


    ngOnInit() {

        this.route.params.subscribe((params) => {
            console.log("je suis le route param de la home");
            this.theRoad = params;

            this.currentUser = this.theRoad.login;


            console.log("Le crrent user est  ");
            console.log( this.currentUser );


            this.userService.data = this.currentUser;


        
            
          });

          this.myProfileName.emit(this.userService.data);

        
    
        
        this.initFormData();
        this.currentUser = this.theRoad.login;
        this.showTweetOfFollowing(this.theRoad.login );
        this.register(this.theRoad.login );
    
    }



  

    initFormData() {
        this.formData = [];
        this.formData.tweets = [{ description: '', day: ''}];
        this.formData.user = [];
    }

    // postTweet() {
    //     this.formData.tweets.push({description: this.description});
    //     this.twitterService.createTweet(this.formData.tweets)
    //         .subscribe(
    //             data => {
    //                 this.alertService.success('Your tweet has send', true);
    //                 this.router.navigate(['/home']);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
    // }


    model: any = {
        user: null,  
        login: "",
        content: "",
        time:""
    }

    myData: any = {  
        
    };


    postTweet(model) {

        

                    model.login = this.theRoad.login;
        
        this.loading = true;
        this.userService.addNewTweet(model.login, model.content, model.time)
            .subscribe(
                
                data => {
                    this.myData = data
                    this.formData.push(this.myData.content )
                    
                            
                },
                error => {

                    console.log("une erreur ");
                    
                  

                    this.alertService.error(error);
                    this.loading = false;
                });

                model.content = "";
    }


    tabFollowing: any;

    
    showTweetOfFollowing(st : string) {

        
                    
        
        this.loading = true;
        this.userService.showAllTweetofFollowing(st)
            .subscribe(
                
                data => {
                    this.tabFollowing = data
                   
                            
                },
                error => {

                    console.log("une erreur ");
                    
                  

                    this.alertService.error(error);
                    this.loading = false;
                });
    }



    






    
}
