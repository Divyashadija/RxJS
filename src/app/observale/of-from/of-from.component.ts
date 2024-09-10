import { Component } from '@angular/core';
import { DesignUtilityService } from '../../appServices/design-utility.service';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.scss'
})
export class OfFromComponent {
  obsMsg: any;
  constructor(private designUtility: DesignUtilityService){}

  //OF Example
  ngOnInit(): void{
    const obs1 = of('Divya', 'Varsha', 'Dilip', 'Pawan');
    
    obs1.subscribe(res => {
      console.log(res);
      this.designUtility.print(res, 'elContainer');
    })

    const obs2 = of({a: 'Divya', b: 'Varsha', c: 'Dilip', d: 'Pawan'});

    obs2.subscribe(res => {
      this.obsMsg = res;
      console.log('obsMsg => ', res);
      
    })

    //From example - Array
    let Arr = ['Divya', 'Varsha', 'Dilip', 'Pawan'];
    const obs3 = from(Arr);

    obs3.subscribe(res => {
      console.log(res);
      this.designUtility.print(res, 'elContainer3');
    })

    //From example - Promise
    const promise = new Promise(resolve =>{
      setTimeout(() => {
        resolve('Promise Resolved!');
      }, 3000);
    })
    promise.then(res => {
      console.log(res); 
    })

    const obs4 = from(promise);
    obs4.subscribe(res => {
      console.log('From Promise => ',res);
      this.designUtility.print(res, 'elContainer4');
    })

    //From example- String
    const obs5 = from('Welcome to the Observable Tutorial.');
    obs5.subscribe(res => {
      console.log('From String => ',res);
      this.designUtility.print(res, 'elContainer5');
    })
  }

}
