import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Personaje } from 'src/interfaces/personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  personajes: Personaje[] | undefined;
  personajesCopy: Personaje[] | undefined;

  constructor(public http: HttpClient) {
    this.getData();
  }

  async getData() {
    await this.http.get<any>(environment.apiUrl + '/people')
      .subscribe(
        (res) => {
          this.personajes = res.results.map(({name, height, mass, hair_color, skin_color, eye_color, birth_year, gender}: Personaje) => {
            return {
              name: name,
              height: height,
              mass: mass,
              hair_color: hair_color,
              skin_color: skin_color,
              eye_color: eye_color,
              birth_year: birth_year,
              gender: gender
            };
          });
          console.log(this.personajes);
          this.personajesCopy = this.personajes;

        }
      );
  }

  search(e: any) {
    const value = e.target.value;
    this.personajes = this.personajesCopy?.filter(({name}: Personaje) => {
      return name.toLowerCase().includes(value.toLowerCase());
    })
  }

}
