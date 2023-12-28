import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from "./Services/api.service";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiService]
})
export class AppComponent {
  response: any;

  constructor(private apiService: ApiService) {}

  sendData() {
    const data = { key: 'value' }; // Replace with your actual data
    this.apiService.postData(data).subscribe(
      (res) => {
        this.response = res;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}