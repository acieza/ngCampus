import { Component, OnInit } from '@angular/core';
import { CargaCsvService } from 'src/app/core/servicios/cargaCsvUser/carga-csv.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  constructor(
    private cargaCsv: CargaCsvService,
  ) { }

  ngOnInit(): void {
  }

  

}
