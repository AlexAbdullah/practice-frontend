import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule, PersonComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
