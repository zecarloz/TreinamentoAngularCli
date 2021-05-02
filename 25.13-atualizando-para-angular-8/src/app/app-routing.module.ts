import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';

const routes: Routes = [
  { path: 'lancamentos', loadChildren: () => import('app/lancamentos/lancamentos.module').then(m => m.LancamentosModule) },
  { path: 'pessoas', loadChildren: () => import('app/pessoas/pessoas.module').then(m => m.PessoasModule) },
  { path: 'dashboard', loadChildren: () => import('app/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'relatorios', loadChildren: () => import('app/relatorios/relatorios.module').then(m => m.RelatoriosModule) },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
