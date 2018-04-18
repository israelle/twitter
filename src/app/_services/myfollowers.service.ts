import {Injectable} from '@angular/core';
import {User} from '../_models';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class MyfollowersService {
    private followers: User[];

    constructor(private http: HttpClient) {
        this.followers = JSON.parse(localStorage.getItem('followersUser'));
    }

    getAll() {
        return this.http.get<User[]>('/api/followers');
    }

}