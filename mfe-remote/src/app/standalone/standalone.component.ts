import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent {
  @Input() myvari: string = "value";

  constructor(public cdRef: ChangeDetectorRef) {
  }
}
