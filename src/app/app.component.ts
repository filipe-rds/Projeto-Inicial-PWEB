//import { Usuario } from './shared/models/usuario';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeModeService } from './shared/services/theme-mode.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'gerenciador-estudos';

  ngOnInit() {
    initFlowbite();
  }


  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, public themeService: ThemeModeService) {}

  toggleThemeMode() {
    this.themeService.updateThemeMode();
    // Recarrega o componente forçando a navegação para a mesma rota
    this.roteador.navigate([this.roteador.url]).then(() => {
      window.location.reload();
    });
  }

}
