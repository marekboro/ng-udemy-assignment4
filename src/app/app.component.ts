import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

oddNumbers: number[] =[]
evenNumbers: number[] =[]


constructor(){}

onIntervalSeen(intervalEmitted:number){
  intervalEmitted%2!=0 ? this.oddNumbers.push(intervalEmitted) : this.evenNumbers.push(intervalEmitted)

  // console.log(intervalEmitted )
}

}
