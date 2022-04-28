import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-detall-pais',
  templateUrl: './detall-pais.component.html',
  styleUrls: ['./detall-pais.component.css']
})
export class DetallPaisComponent implements OnInit {

  pais!: Country | undefined;

  constructor(
      private activatedRoute: ActivatedRoute,
      private paisService: PaisesService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      delay( 1000 )
    )
    .subscribe( ( { id } )=>  {

        console.log( id  );
        this.paisService.getPaisPorCodigo( id ).subscribe( respPais => {
          this.pais = respPais;
        });

    })
  }

}
