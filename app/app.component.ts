import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";

@Component({
	selector: "mi-app",
	templateUrl: "app/view/peliculas.html",
	styleUrls: ["../assets/css/styles.css"]
	/*template:	`<h1>{{titulo}}</h1>
				<ul>
					<li>Titulo: <strong>{{pelicula}}</strong></li>
					<li>Ditector: <strong>{{director}}</strong></li>
					<li>Año: <strong>{{anio}}</strong></li>
				</ul>`*/
})

export class AppComponent{
	public titulo: string = "Peliculas con Angular 2!";
	public pelicula: Pelicula;
	/*public pelicula: string;
	public director: string;
	public anio: number;

	constructor(){
		this.pelicula = "Batman v Superman";
		this.director = "Zack Snider";
		this.anio = 2017;
		this.holaMundo();
	}*/

	constructor(){
		this.pelicula = new Pelicula(1, "Batman v Superman", "Zack Snider", 2016);
		
		//this.holaMundo();
		this.debug();
	}

	/*holaMundo(){
		alert("Pelicula: "+ this.pelicula+ " - "+this.director+ " - "+this.anio);
	}*/
	debug(){
		console.log(this.pelicula);
	}
}