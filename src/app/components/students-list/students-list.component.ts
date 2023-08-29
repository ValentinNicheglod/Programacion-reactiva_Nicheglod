import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {

  columns: string[] = ['id', 'fullName', 'email'];
  users;

  constructor(userService: UsersService) {
    this.users = userService.getUsers();
  }
}
