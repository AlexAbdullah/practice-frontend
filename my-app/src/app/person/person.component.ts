import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, take } from 'rxjs';
import { CommonModule } from '@angular/common';
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
  public showGetPeopleControl$?: Observable<boolean>;
  public showCreatePersonControl$?: Observable<boolean>;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.showGetPeopleControl$ =
      this.appService.showGetPeopleControl?.asObservable();
    this.showCreatePersonControl$ =
      this.appService.showCreatePersonControl?.asObservable();
  }

  Create() {
    this.appService.showCreatePersonControl?.next(true);
  }

  Get() {
    this.appService.showGetPeopleControl?.next(true);
  }
}
