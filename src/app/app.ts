import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteHeader } from './components/componente-header/componente-header';
import { ComponenteMain } from './components/componente-main/componente-main';
import { ComponenteAside } from './components/componente-aside/componente-aside';
import { ComponenteFooter } from './components/componente-footer/componente-footer';

@Component({
  imports: [RouterOutlet, ComponenteHeader,ComponenteMain,ComponenteAside,ComponenteFooter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PA2_Espejo');
}
