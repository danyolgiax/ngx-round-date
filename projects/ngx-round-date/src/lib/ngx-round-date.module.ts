import { NgModule } from '@angular/core';
import { RoundDatePipe } from './ngx-round-date.pipe';
import { CommonModule } from '@angular/common'


@NgModule({
  declarations: [RoundDatePipe],
  imports: [CommonModule],
  exports: [RoundDatePipe]
})
export class RoundDatePipeModule { }
