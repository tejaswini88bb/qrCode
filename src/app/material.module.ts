import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [MatButtonModule,MatInputModule],
  exports: [MatButtonModule,MatInputModule],
})
export class MaterialModule { }