import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-page-subscription',
  templateUrl: './page-subscription.component.html',
  styleUrls: ['./page-subscription.component.scss']
})
export class PageSubscriptionComponent implements OnInit {

  constructor(private auth: AuthService) { }

  currentUser = this.auth.userValue;
  id = +this.currentUser.model_no;

model_no!: string;
paid_amount!: number;
payment_method!: string;
sub_amount!: number
sub_duration!: number;
sub_end_date!: string;
sub_no!: number;
sub_pkg_amount!: number;
sub_pkg_code!: string;
sub_pkg_name!: string;
sub_start_date!: string;
sub_trans_code!: string;

  ngOnInit(): void {
    this.auth.getModelSubscription(this.id).subscribe(res => {
      console.log(res)
      this.model_no = res.model_no,
      this.paid_amount = res.paid_amount,
      this.payment_method = res.payment_method,
      this.sub_amount = res.sub_amount,
      this.sub_duration = res.sub_duration,
      this.sub_start_date = res.sub_start_date
      this.sub_end_date = res.sub_end_date,
      this.sub_no = res.sub_no,
      this.sub_pkg_amount = res.sub_pkg_amount
      this.sub_pkg_name = res.sub_pkg_name
     
})
  }

}
