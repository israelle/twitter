import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

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


    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.loadAllUsers();
        this.initFormData();
        this.currentUser = this.userService.currentUser;
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
    }
}
