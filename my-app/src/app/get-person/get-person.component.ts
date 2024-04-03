import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../models/person';
import { take } from 'rxjs';
import { AppService } from '../app.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-person',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './get-person.component.html',
  styleUrl: './get-person.component.scss',
})
export class GetPersonComponent implements OnInit {
  constructor(private appService: AppService) {}

  showGetPeopleControl: boolean = false;
  people: Person[] = [];

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.showGetPeopleControl = true;
    this.appService
      .GetAllPeople()
      .pipe(take(1))
      .subscribe((response) => {
        this.people = response;
        console.log(this.people);
      });
  }

  clearList(): void {
    this.people = [];
    this.showGetPeopleControl = false;
  }

  showClearButton(): boolean {
    return this.people.length > 0;
  }
}
