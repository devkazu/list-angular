import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listadeCompras!: Item[];
  itemParaSerEditado!: Item;
  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {
    this.listadeCompras = this.listaService.getListaDeCompra();
    console.log(this.listadeCompras);
  }
  ngDoCheck(): void {
    this.listaService.atualizarLocalStorage();
  }
  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }
  deletarItem(id: number) {
    const index = this.listadeCompras.findIndex((item) => item.id === id);
    this.listadeCompras.splice(index, 1);
  }
  limparLista() {
    this.listadeCompras = [];
  }
}
