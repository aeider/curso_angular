System.register(["angular2/core", "./model/pelicula", "./components/peliculas-list.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pelicula_1, peliculas_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            },
            function (peliculas_list_component_1_1) {
                peliculas_list_component_1 = peliculas_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = "Peliculas con Angular 2!";
                    this.mostrarDatos = false;
                    this.pelicula = new pelicula_1.Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);
                    this.peliculas = [
                        new pelicula_1.Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
                        new pelicula_1.Pelicula(1, "La verdad duele", "Will Smith", 2016),
                        new pelicula_1.Pelicula(1, "El señor de los anillos", "Desconocido", 2004),
                        new pelicula_1.Pelicula(1, "Una historia real", "El de supersalidos", 2015),
                        new pelicula_1.Pelicula(1, "Don Jon", "Josep Gordon Levit", 2014)
                    ];
                    this.debug();
                }
                AppComponent.prototype.debug = function (titulo) {
                    if (titulo === void 0) { titulo = null; }
                    if (titulo != null) {
                        console.log(this.pelicula.titulo);
                    }
                    else {
                        console.log(this.pelicula);
                    }
                };
                AppComponent.prototype.onShowHide = function (value) {
                    this.mostrarDatos = value;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "mi-app",
                        templateUrl: "app/view/peliculas.html",
                        directives: [peliculas_list_component_1.PeliculasListComponent],
                        styleUrls: ["../assets/css/styles.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map