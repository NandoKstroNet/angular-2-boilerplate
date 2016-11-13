import { Component } from '@angular/core';

import { MeuPrimeiroComponente } from './primeiro/meu-primeiro.component'
import { CursosComponente } from './cursos/cursos.component'


@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
    `,
    directives: [MeuPrimeiroComponente, CursosComponente]
})
export class AppComponent { }
