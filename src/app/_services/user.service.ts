import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { User } from '../_models/index';
import {Tweet} from '../_models/tweet';
import { environment } from '../../environments/environment';


const API_URL = environment.api_url;

const httpOptions = {
    headers: new HttpHeaders({
   'Access-Control-Allow-Origin': '*',
})
};
@Injectable()
export class UserService {
    currentUser: User;
    constructor(private http: HttpClient) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    getAll() {
        return this.http.get<User[]>('/api/users');
    }
    showTweets() {
        return this.http.get('/showTweets');
    }

    create(password: string, username: string, confirmPassword: string) {
        return this.http.post( API_URL + '/signUp/', {password, username, confirmPassword}, httpOptions );
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }

    addNewTweet(tweet: Tweet) {
        return this.http.post('/newTweet', tweet);
    }

    numberOfTweet() {
        return this.http.get('/numberOfTweet');
    }

    showAllTweetofFollowing(user: User) {
        return this.http.get('/showAllTweetofFollowing/ ' + user.id);
    }

    addFollower(login: string,  ) {
        return this.http.post('/addFollower', login);
    }

    search(hashTag: string) {
        return this.http.post('/search/', hashTag);
    }


}
