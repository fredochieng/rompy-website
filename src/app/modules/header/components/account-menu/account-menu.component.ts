import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/interfaces/login';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-account-menu',
    templateUrl: './account-menu.component.html',
    styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent {
    @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();

    constructor(private _service: AuthService, private _router: Router, private fb: FormBuilder) { }

    isLoggedIn = this._service.isLoggedIn()

    currentUser = this._service.userValue;
    id = this.currentUser.model_no;

    email = this.currentUser.email
    name = this.currentUser.name

      ngOnInit() {
        
      }

      logout(){
        this._service.logout()
        this._router.navigateByUrl('/login')
      }
    
}
