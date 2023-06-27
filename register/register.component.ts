import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username!: string;
  password!: string;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const user = { username: this.username, password: this.password };
    this.http.post('http://localhost:3000/api/auth/register', user)
      .subscribe({
        next: (response) => {
          console.log(response);
          // Handle success, e.g., show a success message
        },
        error: (error) => {
          console.error(error);
          // Handle error, e.g., show an error message
        }
      });
  }
}
