import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service.service';
import { Product } from '../interface/product';
import { ACTIONS } from '../enum/actions.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  toggle: boolean = false;
  products: Product[] = [];
  product: Product = {} as Product;
  productsTemp: Product[] = [];


  totalPage: number[] = [];
  showRows: number = 5;
  pageNow: number = 0;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((resp: Product[])=>{
      if (resp.length > 0) {
        this.productsTemp = resp;
        this.startTable();
      }
    })
  }

  showCreate(event: any){
    this.toggle = event
  }

  showEdit(event: any){
    this.toggle = event.edit;
    this.product = event.product;
  }

  response(event: any){
    if (event.action === ACTIONS.CREATE){
      this.products.push(event.product)
    } else {
      const searchProdut = this.products.findIndex( p => p.id === event.product.id)
      if (searchProdut >= 0){
        this.products[searchProdut] = event.product
      }
    }
    this.toggle = !this.toggle;
  }

  startTable(filter?: string){
    this.totalPage = [];
    const data = filter ? this.productsTemp.filter( p => JSON.stringify(p).includes(filter)) : this.productsTemp;
    const total = Math.round(data.length / this.showRows);
    for (let index = 0; index < total; index++) {
      this.totalPage.push(index);
    }
    this.startShowRows(data);
  }

  startShowRows(data: Product[]){
    const start = Math.round(this.showRows * this.pageNow)
    const end = Math.round(this.showRows * (this.pageNow + 1))
    this.products = data.slice(start, end);
  }


  nextPage(event: any){
    this.pageNow = this.pageNow + 1;
    this.startTable()
  }

  backPage(event: any){
    this.pageNow = this.pageNow - 1;
    this.startTable()
  }

  selectPage(event: any){
    this.pageNow = event;
    this.startTable()
  }

  changeLongProducts(event: number){
    this.showRows = event;
    this.startTable();
  }

  filter(event: string){
    this.startTable(event)
  }

}
