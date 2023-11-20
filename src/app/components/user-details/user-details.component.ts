import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, UserService } from '../../services';
import { User, UserSummary } from '../../models';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogActions,
    MatDividerModule,
    MatCardModule,
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  activeRoute$: Subscription;
  userData: UserSummary = new User();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private dialogService: DialogService
  ) {
    this.activeRoute$ = this.route.params.subscribe((params) => {
      const username = params['id'];
      this.userData =
        this.userService.getUserByUsername(username) || new User();
    });
  }

  ngOnDestroy() {
    this.activeRoute$.unsubscribe();
  }

  editUser() {
    this.dialogService
      .editAccount(this.userData)
      .afterClosed()
      .subscribe((user: User) => {
        if (!user) return;
        this.userService.editUser(this.userData.username, user);
        this.userData =
          this.userService.getUserByUsername(user.username) || new User();
      });
  }
}
