import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Randy Dominguez';

  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;
  countries: Cliente[];

  constructor() {
    this.refreshCountries();
  }

  refreshCountries() {
    this.countries = COUNTRIES
      .map((Cliente, i) => ({id: i + 1, ...Cliente}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}



interface Cliente {
  id?: number;
  nombre: string;
  empresaId: number;
  empresa: string;
}

const COUNTRIES: Cliente[] = [
  {
    nombre: 'Randy Dominguez',
    empresa: 'Grupo Viamar',
    empresaId: 1,
    id:1
  },

];

