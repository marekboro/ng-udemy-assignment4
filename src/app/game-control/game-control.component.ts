import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  ref: any;

  counter: number = 0;
  @Output() intervalEmitted = new EventEmitter<number>()


  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.ref = setInterval(() => {
      // console.log(this.counter); 
      this.intervalEmitted.emit(this.counter);
      this.counter ++;
    }, 1000);
  }
  onEndGame() {
    clearInterval(this.ref);
    // this.counter = 0;

  }

}
