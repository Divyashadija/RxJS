import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent {
  
  techStatus: any;
  techStatus2: any;
  sub2!: Subscription;
  constructor(private designUtility: DesignUtilityService){}

  ngOnInit(): void {
    
    //Ex - 01 (Manual)
    const custObs1 = Observable.create((observer: any) => {

      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('TypeScript');
      }, 2000);

      setTimeout(() => {
        observer.next('HTML and CSS');
      }, 3000);

      setTimeout(() => {
        observer.next('JavaScript');
        // observer.error(new Error('Limit Exceed'))
       
      }, 4000);

      setTimeout(() => {
        observer.next('Jquery');
        observer.complete();
        
      }, 5000);
    })

    custObs1.subscribe((res: any) => {
      this.designUtility.print(res, 'elContainer');
    },  
    (err: any) => {
       this.techStatus = 'error'
    },
    () => {
      this.techStatus = 'complete'
    })

    //Ex - 02 (Custom Interval)
    const Arr2 = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];
    const cusObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);

        if(count >= 3){
          observer.error('Error Emit');
        }

        if(count >= 5){
          observer.complete();
        }
        count++;
      }, 1000)
    })

    this.sub2 = cusObs2.subscribe((res: any) => {
      console.log(res);
      this.designUtility.print(res, 'elContainer2');
    },
    (err: any) => {
      this.techStatus2 = 'error'
   },
   () => {
     this.techStatus2 = 'complete'
   })

    //Ex - 03 (Random Names)
  }

  ngOnDestroy(){
    this.sub2.unsubscribe();
  }
}
