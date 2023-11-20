import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DialogService, PetShopService } from '../../services';
import { MatCardModule } from '@angular/material/card';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { PetShop } from '../../models';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDialogContent,
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  petShop = this.petShopService.petShop;
  constructor(
    private petShopService: PetShopService,
    private dialogService: DialogService
  ) {}

  editStore() {
    this.dialogService
      .editStore(this.petShopService.petShop())
      .afterClosed()
      .subscribe((store: PetShop) => {
        if (!store) return;
        this.petShopService.editPetShop(store);
      });
  }
}
