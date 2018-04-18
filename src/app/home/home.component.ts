import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import {AlertService, UserService} from '../_services/index';
import {TweetService} from '../_services/tweet.service';
import {Router} from '@angular/router';

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


    constructor(private userService: UserService,
                private twitterService: TweetService,
                private alertService: AlertService,
                private router: Router) {
    }


    register(st : string) {

        console.log("le modele ");
                    console.log(st);
        
        this.loading = true;
        this.userService.showTweets(st)
            .subscribe(
                
                data => {
                    this.formData = data
                    console.log("je suis connecté recup all tweet");
                    console.log(data);
                            
                },
                error => {

                    console.log("une erreur ");
                    
                  

                    this.alertService.error(error);
                    this.loading = false;
                });
    }









    ngOnInit() {
        this.loadAllUsers();
        this.initFormData();
        this.currentUser = this.userService.currentUser;
        this.showTweetOfFollowing("Corentin");
        this.register("Corentin");
        
    }






    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
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

        console.log("le modele ");
                    console.log(model);

                    model.login = "Corentin";
        
        this.loading = true;
        this.userService.addNewTweet(model.login, model.content, model.time)
            .subscribe(
                
                data => {
                    this.myData = data
                    this.formData.push(this.myData.content )
                    console.log("je suis connecté recup all tweet");
                    console.log(data);
                    console.log(this.formData);
                            
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

        console.log("le modele ");
                    console.log(st);
        
        this.loading = true;
        this.userService.showAllTweetofFollowing(st)
            .subscribe(
                
                data => {
                    this.tabFollowing = data
                    console.log("je suis connecté recup all tweet");
                    console.log(data);
                            
                },
                error => {

                    console.log("une erreur ");
                    
                  

                    this.alertService.error(error);
                    this.loading = false;
                });
    }






    
}
