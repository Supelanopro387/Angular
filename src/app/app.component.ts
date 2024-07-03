import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './data.service'; // Importar el servicio
import { PeriodicElement } from './periodic-element'; // Importar la interfaz

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  newElement: PeriodicElement = { position: 0, name: '-', weight: 0, symbol: '-' };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadElements();
  }

  loadElements(): void {
    this.dataService.getElements().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  addElement(): void {
    const data = this.dataSource.data;
    data.push(this.newElement);
    this.dataSource.data = data;
    this.dataService.saveElements(data).subscribe();
    this.newElement = { position: 0, name: '', weight: 0, symbol: '' };
  }
}