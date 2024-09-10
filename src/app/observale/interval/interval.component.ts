import { Component } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent {

  obsMsg: any;
  videoSubscription!: Subscription;
  constructor(private designUtility: DesignUtilityService){}

  ngOnInit(): void{
    // const broadCastVideos = interval(2000);
    const broadCastVideos = timer(5000, 1000);
    
    this.videoSubscription = broadCastVideos.subscribe(res =>{
      console.log(res);
      this.obsMsg = 'Video ' + res;
      this.designUtility.print(this.obsMsg, 'elContainer');
      this.designUtility.print(this.obsMsg, 'elContainer2');
      this.designUtility.print(this.obsMsg, 'elContainer3');

      if(res >= 10){
        this.videoSubscription.unsubscribe();
      }
      
    })
  }

}
