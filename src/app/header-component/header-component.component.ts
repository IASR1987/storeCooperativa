import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',  // Cambié el selector a 'app-header' por convención
  imports: [RouterModule,RouterLink],
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']  // Cambié de 'styleUrl' a 'styleUrls'
})
export class HeaderComponent {

}
