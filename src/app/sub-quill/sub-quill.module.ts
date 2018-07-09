import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubQuillComponent } from './sub-quill.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, QuillModule],
  declarations: [SubQuillComponent],
  exports: [SubQuillComponent]
})
export class SubQuillModule {}
