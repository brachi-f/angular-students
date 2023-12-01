import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Student-App By Brachi Fisho"
  date: Date = new Date;
  calcHour() {
    if (this.date.getHours() > 6 && this.date.getHours() <= 12)
      return "Good Morning";
    else if (this.date.getHours() > 12 && this.date.getHours() < 19)
      return "Good Afternoon";
    else
      return "Good Night";
  }
}
