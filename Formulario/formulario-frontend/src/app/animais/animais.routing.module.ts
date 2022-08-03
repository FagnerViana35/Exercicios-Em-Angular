import { Routes, RouterModule } from '@angular/router';
import { ListaAnimaisComponent } from './lista-animais/animais.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent
  },
];

export const AnimaisRoutingModule = RouterModule.forChild(routes);
