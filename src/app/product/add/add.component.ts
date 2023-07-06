import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private fb:FormBuilder,private ps:ProductService,private rt:Router){

  }
  ngOnInit():void
{
 
}
 // model form for add 
  addForm=this.fb.group({
    pid:[''],
    pname:[''],
    cid:[''],
    price:[''],
    rating:[''],
    description:[''],
    productImage:[''],
    review:[''],
    warrenty:[''],
    availability:[''],
    storage:[''],
    ram:[''],
    processor:['']
  })
  add()
  {
    var path=this.addForm.value
    var prodData={
      
      id: path.pid,
      productName:path.pname,
      categoryId:path.cid,
      price:path.price,
      rating:path.rating,
      description:path.description,
      productImage:path.productImage,
      review:path.review,
      warrenty:path.warrenty,
      is_available:path.availability,
      storage:path.storage,
      ram:path.ram,
      processor:path.processor
    }
    this.ps.addProduct(prodData).subscribe((result:any)=>{
      alert('Product Added')
      this.rt.navigateByUrl("")
    })
  }
 
}
