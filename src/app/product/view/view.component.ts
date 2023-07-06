import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

pid: any;
pdata:any={}

constructor(private ar:ActivatedRoute,private ps:ProductService,private rt:Router){}
ngOnInit():void{
  this.ar.params.subscribe((data:any)=>{
    this.pid=data.id
    console.log(this.pid);

    
  })
  // api call 
  this.ps.getProduct(this.pid).subscribe((result:any)=>{
    this.pdata=result
    console.log(this.pdata);
    
  })
}
deleteProduct()
{
  this.ps.deleteProduct(this.pid).subscribe((result:any)=>{
    alert('Product Deleted')
    this.rt.navigateByUrl("")
  })
}
}
