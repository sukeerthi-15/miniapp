import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Raw,Users } from '../apis/users';
import { UsersService } from '../apis/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: Users[] = [];
  constructor(public usersService: UsersService,private router:Router) {}

  createuser(){
    this.router.navigate(["create"])
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((raw: Raw) => {
      this.users = raw.data;
      // console.log('User', this.users);
    });
  }
}