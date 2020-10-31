import { NgModule } from '@angular/core';

import {
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDialogModule,
    MatRadioModule,
    MAT_DIALOG_DEFAULT_OPTIONS,
    ErrorStateMatcher,
    ShowOnDirtyErrorStateMatcher
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatProgressSpinnerModule, 
      MatCheckboxModule,
      MatInputModule,
      MatIconModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatChipsModule,
      MatExpansionModule,
      MatSnackBarModule,
      MatProgressBarModule,
      MatDialogModule,
      MatRadioModule,
  ],
  exports: [
      MatButtonModule,
      MatProgressSpinnerModule, 
      MatCheckboxModule,
      MatInputModule,
      MatIconModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatChipsModule,
      MatExpansionModule,
      MatSnackBarModule,
      MatProgressBarModule,
      MatDialogModule,
      MatRadioModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
  
})
export class AppMaterialModule {}