import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ModelsService } from 'src/app/shared/services/model.service';

@Component({
    selector: 'app-page-dashboard',
    templateUrl: './page-dashboard.component.html',
    styleUrls: ['./page-dashboard.component.sass']
})
export class PageDashboardComponent {

    selectedFile!: File
   
    constructor(private auth:AuthService,public fb: FormBuilder,private model: ModelsService) { }

    currentUser = this.auth.userValue;
    id = this.currentUser.id;
    model_no = this.currentUser.model_no

    imageSrc!: string;
    form!: FormGroup;
    percentDone: any = 0;

    email!: string
    name!: string
    preview_image!: string
    country! : string
    city! : string
    phone_no! : string
    real_phone_no! : string
    about! : string
    
    ngOnInit() {

      this.form = this.fb.group({
        model_id: [this.id],
        picture: [null],
      })

        this.auth.getModel(this.model_no).subscribe(res => {
              console.log(this.model_no)
              // this.email = res.email
              // this.name = res.name
              // this.preview_image = res.preview_image
              // this.country = res.country_name
              // this.city = res.city_name
              // this.phone_no = res.phone_no
              // this.real_phone_no = res.real_phone_no
              // this.about = res.about
        })
       
      }

      onFileChanged(event: any) {
        
        const reader = new FileReader();
        
        if(event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          reader.readAsDataURL(file);
        
          reader.onload = () => {
       
            this.form.patchValue({
              picture: reader.result
            });
       
          };
       
        }
      }

      onUpload(){
        this.model.uploadPhoto(this.form.value).subscribe(res => {
          console.log(res)
        })
        console.log(this.form.value)
      }

}
