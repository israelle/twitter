﻿import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { User } from '../_models/index';
import {Tweet} from '../_models/tweet';
import { environment } from '../../environments/environment';



@Injectable()
export class UserService {

    readonly API_URL  = "http://localhost:8080/twitter/"

    public data: any;


    currentUser: User;

    
    constructor(private http: HttpClient  ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }


    showTweets(username : string) {
        return this.http.get(this.API_URL+'showTweets?login='+username);
     
    }

    showAllTweetofFollowing(username : string) {
        return this.http.get(this.API_URL+'showAllTweetofFollowing?user='+username);  
    }

    numberOfTweet(username : string) {
        return this.http.get(this.API_URL+'numberOfTweet?login=' + username);  
    }

    numberOfPeopleIfollw(username : string) {
        return this.http.get(this.API_URL+'numberOfPeopleIFollow?login='+username);  
    }
    numberOfFollowers(username : string) {
        return this.http.get(this.API_URL+'numberOfFollowers?login='+username);  
    }


    showLastTweets(username : string) {
        return this.http.get(this.API_URL+'showLastTweets?login='+username);
     
    }

    showAllPeopleFollowBy(username : string) {
        return this.http.get(this.API_URL+'showAllPeopleFollowBy?login='+username);
     
    }

    showAllMyFollwer(username : string) {
        return this.http.get(this.API_URL+'showAllMyFollwer?login='+username);
     
    }


    allSuggestions() {
        return this.http.get(this.API_URL+'suggestions');
     
    }


    search(content:string) {
           
        var reqHeader = new HttpHeaders({'Content-type':'application/json'});

        return this.http.post( this.API_URL + 'search/', {
            
            "content" : content
             
           } , {headers:reqHeader });
     
    }


    create(username : string , password:string , confirmation : string) {

        var reqHeader = new HttpHeaders({'Content-type':'application/json'});

        return this.http.post( this.API_URL + 'signUp/', {
            "login" : username,
            "pass" : password,
            "pConfirmationPass" : confirmation
    
           } , {headers:reqHeader });
    }

    addNewTweet(username : string , password:string , confirmation : string) {
        var reqHeader = new HttpHeaders({'Content-type':'application/json'});

        return this.http.post( this.API_URL + 'newTweet/', {
            "user": null,
            "login" : username,
            "content" : password,
            "time" : confirmation
    
           } , {headers:reqHeader });

    }
 
    addFollowing(login: string, peopleFollowByUser: string, followers: string   ) {
        
        var reqHeader = new HttpHeaders({'Content-type':'application/json'});

        return this.http.post( this.API_URL + 'addFollowing/', {
            "login" : login,
            "peopleFollowByUser" : peopleFollowByUser,
            "followers":followers
            
    
           } , {headers:reqHeader });
    }


}
