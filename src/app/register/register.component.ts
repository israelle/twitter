import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import { User } from '/Users/Tshili/Documents/Epsi/NoSql/projet_tweeter/src/app/_models';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    
    modele: User ;
    confirmation: string = "";

    model = {
        Username : "",
        password:"",
        confirmPassword:""
    }


    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register(model) {

        console.log("le modele ");
                    console.log(model);
        
        this.loading = true;
        this.userService.create(model.Username, model.password,  model.confirmPassword)
            .subscribe(
                
                data => {

                    console.log("je suis connecté");
                    console.log(data);
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                   
                },
                error => {

                    console.log("une erreur ");
                    
                  

                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
