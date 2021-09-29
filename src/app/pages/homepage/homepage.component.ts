import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { merge, Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ModelsService } from 'src/app/shared/services/model.service';
import { RootService } from 'src/app/shared/services/root.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  destroy$: Subject<void> = new Subject<void>();

 
  vipModels: any
  regularModels: any
  cities: any
  header= 'VIP MODELS'
  header_regular= 'REGULAR MODELS'
  

  constructor(
      private auth: AuthService,
      private model: ModelsService,
      private fb: FormBuilder,
      public root: RootService,
  ) { }
  

  ngOnInit(): void {

    this.model.getcity().subscribe(res => {
      this.cities = res.cities
      console.log(res)
    })

    this.model.getModels('vip').subscribe(data => {
        this.vipModels = data
        console.log(this.vipModels)
    })
      
    this.model.getModels('regular').subscribe(data => {
        this.regularModels = data
    })

    }

    getModels(data: string){
        
        return data
    }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }


  onSelect(event: any){
    const city_id = +event.target.value

    this.model.getFilteredVipModels(city_id).subscribe(res => {
      this.vipModels = res
    })

    this.model.getFilteredRglModels(city_id).subscribe(res => {
      this.regularModels = res
    })
    console.log(event.target.value)
  }
}
