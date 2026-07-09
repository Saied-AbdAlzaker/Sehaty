import { Component, input, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
})
export class PasswordInputComponent {
  control = input.required<FormControl>();

  label = input('Password');

  placeholder = input('Enter password');

  show = signal(false);

  toggle() {
    this.show.update((v) => !v);
  }
}
