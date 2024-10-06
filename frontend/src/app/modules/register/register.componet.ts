// src/app/modules/register/register.component.ts
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthService} from "../../services/register.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule,CommonModule,
    ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Registro exitoso', response);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error de registro', error);
          alert('Error de registro. Verifica los datos ingresados.');
        }
      });
    }
  }
}
