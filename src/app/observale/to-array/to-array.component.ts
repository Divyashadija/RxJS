import { Component } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  standalone: true,
  imports: [],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent {

  users = [
    {name: 'Divya', skills: 'Angular'},
    {name: 'Pawan', skills: 'Java'},
    {name: 'Vicky', skills: 'React'},
    {name: 'Jay', skills: 'Marketing'}
  ]
  sourcesub!: Subscription;

  ngOnInit(): void{

    //Ex - 01
    const source = interval(1000);

   this.sourcesub =  source.pipe(take(6) ,toArray())
    .subscribe(res => {
      // console.log(res);
    })

    //Ex - 02
    const source2 = from(this.users);

    source2.pipe(toArray()).subscribe(res => {
      // console.log(res);
    })

    //Ex = 03
    const source3 = of('Divya', 'Akash', 'Varsha', 'Pawan', 'Dilip');
    source3.pipe(toArray()).subscribe(res => {
      console.log(res);
    })
  }
}
