import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InteractionDadandSonCheckpoint';

  backColor: string;

  submitColor(color: string) {
    this.backColor = color
  }
}
