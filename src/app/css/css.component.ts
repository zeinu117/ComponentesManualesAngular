import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class  CssComponente{
    public title : string = "Componente CSS";
    public resumen: string = " CSS es un acrónimo de Cascading Style Sheets, hojas de estilo en cascada. Por eso, cuando hablamos del estilo de una página web, o de los estilos de eXe, en realidad nos estamos refiriendo a un archivo CSS. Es en este tipo de archivos donde reside todo el aspecto que tendrá nuestro proyecto. En este apartado vamos a ver todas (o casi todas) las propiedades que se pueden alterar por medio de las hojas de estilo. No se trata, por supuesto, de aprenderlos, tan sólo de tener una referencia. Así, si queremos cambiar el tamaño de la letra, tan sólo tendremos que buscar cuál es la sintaxis que debemos utilizar (obviamente, estará en el apartado fuentes)."
    public resumen2 : string = "Hay que indicar que algunos de ellos no los soporta Internet Explorer y en cambio otros no los entiende el Firefox. Así que es recomendable probarlos en ambos exploradores antes de incorporarlos a nuestras páginas."
}
