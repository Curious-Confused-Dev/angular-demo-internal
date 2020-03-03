import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  showSecretPassword = false;
  logs = [];

  onToggleDetails() {
    this.showSecretPassword = !this.showSecretPassword;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
