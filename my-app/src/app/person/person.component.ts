import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-person',
  templateUrl: './person.component.html',
  imports: [CommonModule],
})
export class PersonComponent {
  public title$: Observable<string> | undefined;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.title$ = this.appService.GetPerson('earn').pipe(take(1));
  }
}
