import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, UserService } from '../../services';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {
  displayedColumns: string[] = ['username', 'name', 'email', 'actions'];
  users = this.userService.users;
  constructor(
    private userService: UserService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  deactivateUser(user: User) {
    this.dialogService
      .deactivateUserConfirmation()
      .afterClosed()
      .subscribe((isConfirmed: boolean) => {
        if (!isConfirmed) return;
        this.userService.deleteUser(user.username);
      });
  }

  addUser() {
    this.dialogService.createAccount('admin');
  }

  onRowDoubleClick(data: User) {
    this.router.navigate(['/users', data.username]);
  }
}
