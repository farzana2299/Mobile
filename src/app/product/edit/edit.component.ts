import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id:any
  pdata:any={}
  constructor(private ps:ProductService,private ar:ActivatedRoute,private rt:Router)
  {

  }
  ngOnInit():void
  {
    this.ar.params.subscribe((data:any)=>{
      this.id=data.id
      console.log(this.id);
      
    })
    this.ps.getProduct(this.id).subscribe((result:any)=>{
      this.pdata=result
      console.log(this.pdata);
      
    })
   
  }
  editProduct()
  {
    this.ps.updateProduct(this.id,this.pdata).subscribe((result:any)=>{
      alert('Product Data Updated')
      this.rt.navigateByUrl('product/view/'+this.id)
    })
  }
}
