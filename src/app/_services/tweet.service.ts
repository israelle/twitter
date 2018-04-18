import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';
import {Tweet} from '../_models/tweet';

@Injectable()
export class TweetService {
    constructor(private http: HttpClient) {
    }

    getAllTweet() {
        return this.http.get<Tweet[]>('/api/tweets');
    }

    getTweetById(id: number) {
        return this.http.get('/api/tweets/' + id);
    }

    createTweet(tweet: Tweet) {
        return this.http.post('/api/tweets', tweet);
    }

    updateTweet(tweet: Tweet) {
        return this.http.put('/api/tweets/' + tweet.id, tweet);
    }

    deleteTweet(id: number) {
        return this.http.delete('/api/tweets/' + id);
    }
}
