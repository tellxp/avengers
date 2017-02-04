import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './dash-board.component.html',
  styleUrls: ['dash-board.component.scss']
})
export class AppComponent {
  title = 'Hello World!';

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}
