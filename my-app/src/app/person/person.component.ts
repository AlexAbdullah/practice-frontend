import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Person } from '../models/person';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-person',
  templateUrl: './person.component.html',
  imports: [CommonModule, FormsModule],
})
export class PersonComponent {
  public personName: string | undefined;
  public quote: string | undefined;
  public people: any | undefined;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  CreateNewPerson(person: Person) {
    this.appService
      .CreatePerson(person)
      .pipe(take(1))
      .subscribe((response) => {
        console.log('Person created!', response);
      });
  }

  getPerson() {
    this.appService
      .GetPerson('915577423497204734126663')
      .pipe(take(1))
      .subscribe((response) => {
        this.personName = response.personName;
        this.quote = response.quote;
      });
  }

  getPeople() {
    this.appService
      .GetAllPeople()
      .pipe(take(1))
      .subscribe((response) => {
        this.people = response;
        console.log(this.people);
      });
  }
}
