import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Person } from '../models/person';
import { FormsModule } from '@angular/forms';
import { CreatePersonComponent } from '../create-person/create-person.component';
import { GetPersonComponent } from '../get-person/get-person.component';

@Component({
  standalone: true,
  selector: 'app-person',
  templateUrl: './person.component.html',
  imports: [
    CommonModule,
    FormsModule,
    CreatePersonComponent,
    GetPersonComponent,
  ],
})
export class PersonComponent {
  public personName?: string;
  public quote?: string;
  public showCreatePersonControl: boolean = false;
  public showGetPeopleControl: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  Create() {
    this.showCreatePersonControl = !this.showCreatePersonControl;
  }

  Get() {
    this.showGetPeopleControl = !this.showGetPeopleControl;
    console.log(this.showGetPeopleControl);
  }
}
