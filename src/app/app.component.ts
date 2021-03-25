import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public input!: string;
  public message: string = '';

  public splitedStringCount(str: string) {
    return str.split(',').length;
  }

  public determineLength(str: string) {
    if (str == undefined || str == '') this.message = 'Please enter data first';
    else
      this.message = this.splitedStringCount(str) <= 3 ? 'Enjoy!' : 'Too Much!';
  }
}
