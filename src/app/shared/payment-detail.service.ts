import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import{HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  formData:PaymentDetail = new PaymentDetail(); 
  list:PaymentDetail[];
  readonly baseURL = "http://localhost:4418/api/PaymentDetails";

  postPaymentDetail(){
    return this.http.post(this.baseURL,this.formData)
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
