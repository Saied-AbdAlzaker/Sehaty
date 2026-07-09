import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss'
})
export class AuthHeaderComponent {

}
