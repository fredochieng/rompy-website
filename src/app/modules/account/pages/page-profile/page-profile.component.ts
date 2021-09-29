import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styleUrls: ['./page-profile.component.sass']
})
export class PageProfileComponent {

    public errMessage: string | undefined;
    public successMessage: string | undefined;
    public submitted = false;

    form!: FormGroup
    
    constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService, private fb: FormBuilder) { }

    currentUser = this.auth.userValue;
    id = this.currentUser.model_no;

    ngOnInit() {
        this.form = this.fb.group({
          name: ['', [Validators.required]],
          email: ['', [Validators.required]],
          phone_no: ['', [Validators.required]],
          real_phone_no: ['', [Validators.required]],
          about: ['', [Validators.required]],
        });
        this.auth.getModel(this.id).subscribe(res => {
          console.log(res)
          this.editModel(res)
    })
      }

      editModel(data: any) {
        this.form.patchValue({
          name: data.name,
          email: data.email,
          phone_no: data.phone_no,
          real_phone_no: data.real_phone_no,
          about: data.about,
        });
      }

      onUpdate(data:any){
        this.auth.updateModel(this.id, data).subscribe(res => {
          console.log(res)
        });
      }

}
