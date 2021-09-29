import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings} from 'ng-multiselect-dropdown';
import { Observable } from 'rxjs-compat/Observable';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ModelsService } from 'src/app/shared/services/model.service';

interface Service {
  service_id: number,
  service: string
  
}


@Component({
  selector: 'app-page-add-service',
  templateUrl: './page-add-service.component.html',
  styleUrls: ['./page-add-service.component.scss']
})
export class PageAddServiceComponent implements OnInit {

  form!: FormGroup
  
  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService, private model: ModelsService, private fb: FormBuilder) { }

  currentUser = this.auth.userValue;
  id = this.currentUser.id;
  model_id = +this.currentUser.model_no

  dropdownList : any;
  myServices: Service[] = [];

  ngOnInit() {
      this.form = this.fb.group({
        service_id: ['', [Validators.required]],
        model_id: [this.id]
      });
      this.auth.getServices().subscribe(res => {
        this.dropdownList = res
      })
     
      
      this.auth.getModelServices(this.model_id).subscribe(res => {
        this.myServices = res.model
      })
    }

    onSubmit(form: any){
      this.model.addModelServices(form).subscribe(res => {
        
      })
    }



}
