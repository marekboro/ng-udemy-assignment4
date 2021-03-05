import { Component, ViewChild, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ViewChild {
 descendants: boolean;
 emitDistinctChangesOnly: boolean;
 first: boolean;
 read: any;
 isViewQuery: boolean;
 selector: any;
 static?: boolean;

  counter:number

@Input() incoming:number;  

constructor(){}


ngOnChanges(changes: SimpleChanges) {
  this.counter= this.incoming;
  console.log(this.counter)
}

}
