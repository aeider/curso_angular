import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";
import {PeliculasListComponent} from "./components/peliculas-list.component";

@Component({
	selector: "mi-app",
	templateUrl: "app/view/peliculas.html",
	directives: [PeliculasListComponent],
	styleUrls: ["../assets/css/styles.css"]
})

export class AppComponent{
	public titulo: string = "Peliculas con Angular 2!";
	public pelicula: Pelicula;
	public mostrarDatos: boolean;
	public peliculas;

	constructor(){
		this.mostrarDatos = false;
		this.pelicula = new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);

		this.peliculas = [
			new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
			new Pelicula(1, "La verdad duele", "Will Smith", 2016),
			new Pelicula(1, "El señor de los anillos", "Desconocido", 2004),
			new Pelicula(1, "Una historia real", "El de supersalidos", 2015),
			new Pelicula(1, "Don Jon", "Josep Gordon Levit", 2014)
		]

		this.debug();
	}

	debug(titulo = null){
		if(titulo != null ){
			console.log(this.pelicula.titulo);
		}else{
			console.log(this.pelicula);
		}
	}

	onShowHide(value){
		this.mostrarDatos = value;
	}

	/*onHideShow(){
		this.mostrarDatos = false;
	}*/

}