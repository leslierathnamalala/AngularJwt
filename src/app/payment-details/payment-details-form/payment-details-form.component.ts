import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';


@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public service:PaymentDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.paymentDetailID == null){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }

  insertRecord(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Successfully saved','Payment Details Register');
      },
      err =>{
        console.log(err);
      }
    );
  }

  updateRecord(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Updated Successfully','Payment Details Register');
      }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

}
