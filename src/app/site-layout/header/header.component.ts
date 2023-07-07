import { Component } from '@angular/core';
import { ProductService } from 'src/app/product/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
searchTerm:any=[]

constructor(private ps:ProductService)
{

}
ngOnInit():void
{
}
search(event:any)
{
  this.searchTerm=event.target.value
  //seand data to behaviour subject
  this.ps.search.next(this.searchTerm)
}
}
