import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'cursos-lista',
	// template: `
	// 	<p>Olá, meu nome é {{nome}}!</p>
	// 	<hr />
	// 	<ul>
	// 		<li *ngFor="let curso  of cursos">
	// 			{{curso}}
	// 		</li>
	// 	</ul>
	// `
	templateUrl: 'cursos.component.html'
})

export class CursosComponente{
	nome = 'Nanderson';
	cursos = ['PHP Basico', 'PHP OO', 'Silex Basico'];
}
