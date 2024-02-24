import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ACTIONS } from '../../../../src/app/enum/actions.enum';
import { Product } from '../../../../src/app/interface/product';
import { ProductService } from '../../../../src/app/services/product-service.service';
import { addYear, dateNow, diffDate, formatDate } from '../../../../src/app/shared/date';

@Component({
  selector: 'app-cu-product',
  templateUrl: './cu-product.component.html',
  styleUrls: ['./cu-product.component.scss'],
})
export class CuProductComponent implements OnInit {
  @Input() product: Product = {} as Product;
  @Output() response: EventEmitter<any> = new  EventEmitter;

  formProduct: FormGroup = new FormGroup({});
  submited: boolean = false;
  edit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.edit = this.product && this.product.id ? true : false;
    this.initForm(this.product);
  }

  initForm(product?: Product){
    this.formProduct = this.fb.group({
      id: [product ? product.id :"",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      name: [product ? product.name :"", [Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      description: [product ? product.description :"", [Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      logo: [product ? product.logo :"", [Validators.required]],
      date_release: [product ? formatDate(new Date(product.date_release)) :"", [Validators.required]],
      date_revision: [product ? formatDate(new Date(product.date_revision)) :"", [Validators.required]],
    })
  }

  get form(){
    return this.formProduct.controls;
  }

  submit(){
    this.submited = true;
    if(this.formProduct.valid && this.submited){
      const data = this.formProduct.getRawValue();
      if(this.edit){
        this.productService.updateProduct(data).subscribe((resp: Product)=>{
          this.callBack(resp, ACTIONS.UPDATE)
        })
      } else {
        this.productService.createProduct(data).subscribe((resp: Product)=>{
          this.callBack(resp, ACTIONS.CREATE)
        })
      }
    }

  }

  verifyId(){
    const value = this.form['id'].getRawValue()
    if(value){
      this.productService.verifyId(value).subscribe((resp: boolean)=>{
        if(resp){
          this.form['id'].setErrors({repit: resp})
        }
      })
    }
  }

  validateDate(){
    const data = this.form['date_release'].getRawValue();
    const date = dateNow()
    if(diffDate(date, new Date(data)) < -1){
      this.form['date_release'].setErrors({date: true})
      this.form['date_revision'].setValue("")
      return;
    }
    this.form['date_revision'].setValue(addYear(new Date(data)))
  }

  callBack(product: Product, action: string){
    this.response.emit({product: product, action: action})
  }

  clear(){
    this.submited = false;
    this.formProduct.reset()
    this.initForm();
  }

}
