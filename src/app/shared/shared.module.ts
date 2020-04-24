import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from './pipe/pipe.module';
import { FilterPipe } from './pipe/filter-pipe';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[PipeModule],
  providers:[FilterPipe]

})

export class SharedModule { }
