import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';

@Component({
    selector: 'ngx-pages',
    styleUrls: ['pages.component.scss'],
    templateUrl: './pages.component.html',
})
export class PagesComponent {

    constructor(//private authService: AuthService,
                private router: Router) {

    }
    menu: NbMenuItem[] = [
        {
            title: 'Inicio',
            icon: 'home-outline',
            link: '/pages/dashboard'
        },{
            title: 'Nueva Solicitud',
            icon: 'email-outline',
            link: '/pages/solicitudes',
            //hidden: (this.getRol()==2)
        },{
            title: 'Mis Solicitudes',
            icon: 'inbox-outline',
            link: '/pages/mis_solicitudes',
            //hidden: (this.getRol()==2)
        },{
            title: 'Mis certificados',
            icon: 'folder-outline',
            link: '/pages/mis_certificados',
            //hidden: (this.getRol()==2)
        },{
            title: 'Certificados generados',
            icon: 'folder-outline',
            link: '/pages/certificados_institucion',
           // hidden: (this.getRol()==3)
        },{
            title: 'Validar certificado',
            icon: 'search-outline',
           // link: '/pages/validar',
        },{
            title: 'Solicitudes pendientes',
            icon: 'email-outline',
            link: '/pages/pendientes',
           // hidden: (this.getRol()==3)
        },{
            title: 'Emitir certificado',
            icon: 'file-add-outline',
            link: '/pages/certificar',
          //  hidden: (this.getRol()==3)
        },{
            title: 'Revocar certificado',
            icon: 'file-remove-outline',
            link: '/pages/revocar',
          //  hidden: (this.getRol()==3)
        }
    ];

    // logout(){
    //     this.authService.logout();
    //     this.router.navigate(['/auth/login']);
    // }
    // getRol(){
    //     return this.authService.currentRol;
    // }
}
