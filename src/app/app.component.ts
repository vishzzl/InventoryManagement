import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from "./Services/api.service";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './Services/auth.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [ApiService,AuthService],
    imports: [CommonModule, RouterOutlet, HomeComponent, ReactiveFormsModule,LoginComponent]
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