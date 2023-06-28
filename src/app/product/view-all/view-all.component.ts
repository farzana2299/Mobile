import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {
  productsArray:any=[]
  constructor(private ps:ProductService) {

  }
  ngOnInit():void
{
  this.ps.getAllProduct().subscribe((result:any)=>{
    this.productsArray=result
    console.log(this.productsArray);
    
  })
}
}
