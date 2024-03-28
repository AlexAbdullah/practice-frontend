import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = '';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .GetMessage()
      .pipe(take(1))
      .subscribe((message) => {
        this.title = message;
      });
  }
}
