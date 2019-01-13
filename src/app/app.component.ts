import { Component } from '@angular/core';
import { HostListener} from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taglia-Clean-web';
  topeScroling=true;
  home=false;
  contactos=false;
  servicios=false;
  nosotros=false;




  public vaiArriba() {
    console.log("arriba");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    console.log(window.pageYOffset);
    if (window.pageYOffset < 200) {
      this.topeScroling = true;
    } else {
      this.topeScroling = false;
    }
    // this.home = false;
    // this.contactos = false;
    // this.servicios = false;
    // this.nosotros = false;
    // if (window.pageYOffset >= 0 && window.pageYOffset < 804) {
    //   //stoy en nosotros
    //   this.home = true;
    // }

    // if (window.pageYOffset > 804 && window.pageYOffset < 1237) {
    //   //stoy en nosotros
    //   this.nosotros = true;
    // }

    // if (window.pageYOffset > 1237 && window.pageYOffset < 1568) {
    //   //stoy en nosotros
    //   this.servicios = true;
    // }

    // if (window.pageYOffset > 1568) {
    //   //stoy en nosotros
    //   this.contactos = true;
    // }
  }
}