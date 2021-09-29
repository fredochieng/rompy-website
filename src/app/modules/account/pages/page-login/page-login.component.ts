import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/interfaces/login';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {
    public errMessage: string | undefined;
    public successMessage: string | undefined;
    public submitted = false;

    loginForm!: FormGroup;

    constructor(private _service: AuthService, private _router: Router, private fb: FormBuilder) { }

    get email() {
        return this.loginForm.get('email');
      }
    
      get mobileNumber() {
        return this.loginForm.get('password');
      }

      ngOnInit() {
        this.loginForm = this.fb.group({
          email: ['', [Validators.required, Validators.email ]],
          password: ['', [Validators.required]],
         
        });
      }

      onSubmit(form: Login) {

        console.log(form)
        this.submitted = true;
     
        if (this.loginForm.invalid) {
    
           return;
        }{
    
          this._service.loginUser(form).subscribe((res: any) => {
            if (res) {
                this._router.navigateByUrl('/account'); 
            }
    
          },
          (err: any) => {
            if (err.error.errorMessage) {
              this.errMessage = err.error.errorMessage;
            }
            this.errMessage = 'Something happened please try again';
           
          }
        );
    
        }
    
      }
}
