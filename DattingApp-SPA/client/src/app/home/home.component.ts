import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  registerToggle() {
    this.registerMode= !this.registerMode;
  }

  getUser() {
    this.http.get('http://localhost:50568/api/users').subscribe(users => this.users = users);
  }

  cancelRegisterMode(event: boolean) {
      this.registerMode = event;
  }

}
