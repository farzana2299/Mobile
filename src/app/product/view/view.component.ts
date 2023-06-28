import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

pid: any;

constructor(private ar:ActivatedRoute){}
ngOnInit():void{
  this.ar.params.subscribe((data:any)=>{
    this.pid=data.id
    console.log(this.pid);

    
  })
}
}
