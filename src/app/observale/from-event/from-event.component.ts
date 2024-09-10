import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent {

  @ViewChild('addBtn')
  addBtn!: ElementRef;

 constructor(private designUtility: DesignUtilityService){}

  ngAfterViewInit(){
    let count = 1;
   
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countVal = 'Video ' + count++
      console.log(countVal);
      this.designUtility.print(countVal, 'elContainer');
      this.designUtility.print(countVal, 'elContainer2');
    })
  }
}
