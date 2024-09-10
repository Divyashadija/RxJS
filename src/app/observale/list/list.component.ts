import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

}
