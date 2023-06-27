import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const user = { username: this.username, password: this.password };
    this.http.post('http://localhost:3000/api/auth/login', user)
      .subscribe({
        next: (response) => {
          console.log(response);
          // Handle success, e.g., store token in local storage
        },
        error: (error) => {
          console.error(error);
          // Handle error, e.g., show an error message
        }
      });
  }
}
