import { Component, OnInit } from '@angular/core';
import {Tweet} from '../_models/tweet';
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
    tweet: Tweet = {content: '', day: ''};
    loading = false;


    constructor(private userService: UserService,
                private twitterService: TweetService,
                private alertService: AlertService,
                private router: Router) {
    }

    ngOnInit() {
        this.loadAllUsers();
        this.initFormData();
        this.currentUser = this.userService.currentUser;
        this.formData.tweets = [{content: 'voila mon premier tweet', day: new Date().toLocaleString()},
          {content: 'encore un autre tweet oklm', day: new Date().toLocaleString()}];
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => {
            this.loadAllUsers(); });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    initFormData() {
        this.formData = [];
        this.formData.tweets = [{ description: '', day: ''}];
        this.formData.user = [];
    }

    postTweet() {
        this.formData.tweets.push({description: this.description});
        this.twitterService.createTweet(this.formData.tweets)
            .subscribe(
                data => {
                    this.alertService.success('Your tweet has send', true);
                    this.router.navigate(['/home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
