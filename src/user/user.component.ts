import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './User';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // name = 'Angular';
  users = [];
  // model = new User();
  // editmodel = new User();
  // @ViewChild('editTaskModal') editTaskModal;
  // deleteid = 0;
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getAllProjectService().subscribe((data: any[]) => {
      this.users = data;
      console.log(JSON.stringify(this.users));
    });
  }
}
