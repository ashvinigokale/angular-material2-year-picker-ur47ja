import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import {MatMomentDateModule} from'@angular/material-moment-adapter';
import {CustomDatepickerComponent} from './custom-datepicker.component';
import {YearPickerComponent} from './year-picker-component/year-picker.component';
import {MonthPickerComponent} from './month-picker-component/month-picker.component';
import {RegularDatepickerComponent} from './regular-datepicker-component/regular-datepicker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
  ],
  declarations: [
    CustomDatepickerComponent,
    MonthPickerComponent,
    YearPickerComponent,
    RegularDatepickerComponent,
  ],
  exports: [
    CustomDatepickerComponent,
  ],
})
export class CustomDatepickerModule {}