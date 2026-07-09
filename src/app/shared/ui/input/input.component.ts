import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  control = input.required<FormControl>();

  label = input('');

  placeholder = input('');

  type = input('text');

  required = input(false);

  readonly = input(false);

  disabled = input(false);

  error = computed(() => {
    const c = this.control();

    return c.invalid && (c.touched || c.dirty);
  });
}
