export class Pelicula {
  private _nombre: string;
  private _director: string;
  private _genero: string[];
  private _duracion: number;
  private _año: number;
  private _calificacion: number;

  constructor(
    nombre: string,
    director: string,
    genero: string[],
    duracion: number,
    año: number,
    calificacion: number
  ) {
    this._nombre = nombre;
    this._director = director;
    this._genero = genero;
    this._duracion = duracion;
    this._año = año;
    this._calificacion = calificacion;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get director(): string {
    return this._director;
  }

  set director(director: string) {
    this._director = director;
  }

  get genero(): string[] {
    return this._genero;
  }

  set genero(genero: string[]) {
    this._genero = genero;
  }

  get duracion(): number {
    return this._duracion;
  }

  set duracion(duracion: number) {
    this._duracion = duracion;
  }

  get año(): number {
    return this._año;
  }

  set año(año: number) {
    this._año = año;
  }

  get calificacion(): number {
    return this._calificacion;
  }

  set calificacion(calificacion: number) {
    this._calificacion = calificacion;
  }
imprimir(): void {
    console.log(`Nombre: ${this._nombre}`);
    console.log(`Director: ${this._director}`);
    console.log(`Genero: ${this._genero.join(', ')}`);
    console.log(`Duracion: ${this._duracion} minutos`);
    console.log(`Año: ${this._año}`);
    console.log(`Calificacion: ${this._calificacion}`);
    console.log(`Valoracion: ${this.calcularValoracion()}`);
  }

  private calcularValoracion(): string {
    if (this._calificacion >= 0 && this._calificacion < 2) {
      return 'Valoración muy mala';
    } else if (this._calificacion >= 2 && this._calificacion < 5) {
      return 'Valoración mala';
    } else if (this._calificacion >= 5 && this._calificacion < 7) {
      return 'Valoración regular';
    } else if (this._calificacion >= 7 && this._calificacion < 8) {
      return 'Valoración buena';
    } else if (this._calificacion >= 8 && this._calificacion <= 10) {
      return 'Valoracion excelente';
    } else {
      return 'Calificacion fuera de rango';
    }
  }
}
