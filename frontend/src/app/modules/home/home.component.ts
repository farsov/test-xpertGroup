// src/app/modules/home/home.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';
import { CatBreedResponse } from "../../interfaces/cat-breed.interface";
import { MatCardModule } from "@angular/material/card";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    MatTableModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private breedsService = inject(BreedsService);
  public listaRazas: CatBreedResponse[] = [];
  // public filteredRazas: CatBreedResponse[] = [];
  public selectedBreed: CatBreedResponse | null = null;

  public searchText: string = '';
  public filteredRazas: MatTableDataSource<CatBreedResponse> = new MatTableDataSource();

  public displayedColumns: string[] = ['name', 'temperament', 'origin', 'life_span'];


  ngOnInit(): void {
    this.breedsService.getBreeds().subscribe({
      next: (data) => {
        this.listaRazas = data;
        this.filteredRazas = new MatTableDataSource(this.listaRazas);
      },
      error: (err) => {
        console.error(err.message);
      }
    });
  }

  onSelectBreed(breed: CatBreedResponse): void {
    this.selectedBreed = breed;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredRazas.filter = filterValue.trim().toLowerCase();
  }
}
