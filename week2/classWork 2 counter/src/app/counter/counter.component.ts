import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  num: number = 0;
  myclassName: string = "";

  add(): void{
    this.num += 1 ;
    this.colorButtonChange()
  }

  lower(): void{
    this.num -= 1 ;
    this.colorButtonChange()
  }

  colorButtonChange(){
    if (this.num > 0) {
      this.myclassName = "green";
    }else if(this.num < 0){
      this.myclassName = "red"
    }else {this.myclassName = "grey"}
  }

}
