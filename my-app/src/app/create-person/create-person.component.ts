import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../models/person';
import { take } from 'rxjs';
import { AppService } from '../app.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-person.component.html',
  styleUrl: './create-person.component.scss',
})
export class CreatePersonComponent {
  constructor(private appService: AppService) {}

  CreateNewPerson(person: Person) {
    this.appService
      .CreatePerson(person)
      .pipe(take(1))
      .subscribe((response) => {
        console.log('Person created!', response);
      });
  }

  Clear(): void {
    this.appService.showCreatePersonControl?.next(false);
  }
}
