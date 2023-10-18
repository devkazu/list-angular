import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input()
  itemQueVaiSerEditado!: Item;
  valorItem!: string;
  constructor(private listaService: ListaDeCompraService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  ngOnInit(): void {}

  adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }
}
