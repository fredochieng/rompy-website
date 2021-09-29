import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MustMatch } from 'src/app/shared/validators/password.validator';

@Component({
    selector: 'app-page-password',
    templateUrl: './page-password.component.html',
    styleUrls: ['./page-password.component.sass']
})
export class PagePasswordComponent {

    public errMessage: string | undefined;
    public successMessage: string | undefined;
    public submitted = false;

    form!: FormGroup
    
    constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService, private fb: FormBuilder) { }

    currentUser = this.auth.userValue;
    id = this.currentUser.id;

    get cpass() {
        return this.form.get('current_password');
      }
    
    get npass() {
    return this.form.get('new_password');
    }

    get cfpass() {
        return this.form.get('confirm_password');

    }  

    ngOnInit() {
        this.form = this.fb.group({
          current_password: ['', [Validators.required]],
          new_password: ['', [Validators.required]],
          confirm_password: ['', [Validators.required]],
          model_id: [this.id]
        },{ validator: MustMatch('new_password', 'confirm_password')});
      }

      onSubmit(){
        this.submitted = true;
        console.log("we are here")
        if (this.form.invalid) {
          return;
        }
        const data = this.form.value;
        this.auth.changePassword({current_password: data.current_password, new_password: data.new_password, model_id: data.model_id }).subscribe((res: any) => {
            if (res) {
              // this.successMessage = 'Confrimation Mail has been sent to your account.';
            //   localStorage.setItem('JWT_TOKEN', res.token);
              this.router.navigateByUrl('/register_company');
            console.log('password changed')
            }
      
          },
          (err: any) => {
            this.errMessage = err.error.errorMessage;
            console.log(err);
          }
        );

      }
}
