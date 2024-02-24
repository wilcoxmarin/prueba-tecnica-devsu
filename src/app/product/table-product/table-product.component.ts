import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss'],
})
export class TableProductComponent implements OnInit {
  @Output() create: EventEmitter<boolean> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() nextPage: EventEmitter<any> = new EventEmitter();
  @Output() backPage: EventEmitter<any> = new EventEmitter();
  @Output() selectPage: EventEmitter<number> = new EventEmitter();
  @Output() changeLongRows: EventEmitter<number> = new EventEmitter();
  @Output() filter: EventEmitter<string> = new EventEmitter();


  @Input() products: Product[] = [];
  @Input() rows: number[] = [];
  @Input() pageNow: number = 0;




  search: string = '';
  showRows: number = 5;
  selectShowRows: number[] = [5, 10, 20];


  constructor() {}

  ngOnInit() {
  }

  filterProduct() {
    this.filter.emit(this.search)
  }

  newProduct() {
    this.create.emit(true);
  }

  editProduct(product: Product) {
    this.edit.emit({ edit: true, product: product });
  }

  deleteProduct() {
    alert('Eliminar');
  }

  next(){
    this.pageNow = this.pageNow + 1;
    this.nextPage.emit(true)
  }

  back(){
    this.pageNow = this.pageNow - 1;
    this.backPage.emit(true)
  }

  selectPagee(page: number){
    this.pageNow = page;
    this.selectPage.emit(page)
  }

  changeRows(){
    this.changeLongRows.emit(this.showRows)
  }
}
