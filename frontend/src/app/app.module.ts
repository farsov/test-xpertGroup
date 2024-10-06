import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from "./modules/login/login.component";
import {HomeComponent} from "./modules/home/home.component";
import {RegisterComponent} from "./modules/register/register.componet"; // Importa el módulo de animaciones

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
