import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';


@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {


  paises: Country[] = [];

  displayedColumns: string[] = ['bandera', 'name', 'capital', 'population','actions'];
  dataSource!: MatTableDataSource<Country>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {

    this.paisService.getListado().subscribe( resp => {

      console.log( resp );
      this.paises = resp;
      this.dataSource = new MatTableDataSource(this.paises);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.paginator._intl.itemsPerPageLabel = 'Registros por página';

    });



  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
