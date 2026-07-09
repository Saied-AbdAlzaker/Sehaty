import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
   text = input('Button');

  type = input<'button' | 'submit'>('button');

  loading = input(false);

  disabled = input(false);

  variant = input<'primary' | 'secondary' | 'outline'>('primary');
}
