import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderSiteService {

  varDetails = [
    {
      id:1,
      varImg: "https://http2.mlstatic.com/D_NQ_NP_831241-MLB44924943412_022021-O.jpg",
      varNome: "Tinta Preta",
      varDescricao: "Tinta preta 30ml, ótima qualidade da Eletric ink.",
      varValor: 60,
    },
    {
      id: 2,
      varImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmlWdC-TkaEPume6VWWUIJcpNHwhTqaau9fg&usqp=CAU",
      varNome: "Tinta Branca",
      varDescricao: "Tinta branca 30ml, ótima qualidade da Eletric ink.",
      varValor: 60,
    },
    {
      id: 3,
      varImg: "https://www.dhresource.com/albu_344319556_00/1.0x0.jpg",
      varNome: "Máquina De Tatuagem",
      varDescricao: "Máquina Profissional De Tatuagem Da Libélula Rotary",
      varValor: 520.8,
    },
    {
      id: 4,
      varImg: "https://a-static.mlcdn.com.br/800x560/maquina-de-tatuagem-tattoo-rotativa-dragonfly/tattooarthes/m8955/ff208d7d5ff7a9912834154b88f0698e.jpeg",
      varNome: "Máquina De Tatuagem",
      varDescricao: "Máquina De Tatuagem Da Elgato",
      varValor: 599.99,
    },
    {
      id: 5,
      varImg: "https://tropicalderm.com.br/pub/media/catalog/product/cache/e68d7b9b8dd7bc44bbda85009f78db4a/b/a/base_5.jpg",
      varNome: "Bandeja de tinta",
      varDescricao: "Bnadeja para tinta, ate 5 cores",
      varValor: 25.5,
    }
  ]

  constructor() { }
}
