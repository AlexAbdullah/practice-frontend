import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-container-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container-demo.component.html',
  styleUrl: './ng-container-demo.component.scss',
})
export class NgContainerDemoComponent {
  public showNgTemplateDemo: boolean = false;
}
