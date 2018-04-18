import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services';
import {Tweet} from '../_models/tweet';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})


export class MyProfileComponent implements OnInit {

    DISLIKE = '../../assets/dislike.png';
    LIKE = '../../assets/like.png';
    currentUser: any;
    tweets: any = [];
    formData: any = [];
    contentTweet: any;
    tweet: Tweet = {content: '', day: ''};
    isCollapsed = true;
    isClicked: boolean;
    imgSrc: any;
    constructor(private userService: UserService) {}

  ngOnInit() {
      this.currentUser = this.userService.currentUser;
      this.imgSrc = '../../assets/dislike.png';
      console.log(this.currentUser);
      this.isClicked = false;
      this.formData.tweets = [{content: 'voila mon premier tweet', day: new Date().toLocaleString(), isClicked: false},
          {content: 'encore un autre tweet oklm', day: new Date().toLocaleString(), isClicked : false}];
  }


  onChangePicture() {
        this.isClicked = true;
        if (this.isClicked) {
            this.imgSrc = this.LIKE;
            this.isClicked = false;
        }
      return this.imgSrc;
  }

  addNewTweet() {
        this.tweet.content = this.contentTweet;
        this.tweet.day = new Date().toLocaleString();
      this.userService.addNewTweet(this.tweet);
      this.formData.tweets.push(this.tweet);
      this.tweet = {day: '', content: ''};
      this.contentTweet = '';
  }

}
