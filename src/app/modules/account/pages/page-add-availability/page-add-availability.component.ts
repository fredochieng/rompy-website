import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ModelsService } from 'src/app/shared/services/model.service';

@Component({
  selector: 'app-page-add-availability',
  templateUrl: './page-add-availability.component.html',
  styleUrls: ['./page-add-availability.component.scss']
})
export class PageAddAvailabilityComponent implements OnInit {

  form!: FormGroup
  
  constructor(private router: Router, private auth: AuthService, private model: ModelsService, private fb: FormBuilder) { }

  currentUser = this.auth.userValue;
  id = this.currentUser.id;
  model_id = +this.currentUser.model_no

  dropdownList : any;
  data: any;

  ngOnInit() {
      this.form = this.fb.group({
        availability_id: ['', [Validators.required]],
        model_id: [this.id]
      });
      this.model.getAvailabilities().subscribe(res => {
        this.dropdownList = res.availabilities
      })
     
      
      this.model.getModelAvailability(this.model_id).subscribe(res => {
        console.log(res.model)
        this.data = res.model
      })
    }

    onSubmit(form: any){
      console.log(form)
      this.model.addModelAvailability(form).subscribe(res => {
        
      })
    }


}
