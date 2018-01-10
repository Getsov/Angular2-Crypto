import { Injectable } from '@angular/core';
declare const Materialize: any;

@Injectable()
export class NotificationService {
    
    constructor() { }

    loadingAlert(text: string, cb?) {
        Materialize.toast(text, 1500, '', cb);
    }

    successAlert(text: string, cb?) {
        Materialize.toast(text, 2000, 'black yellowTextColor', cb);
    }

    errorAlert(text: string, cb?) {
        Materialize.toast(text, 3000, 'red lighten-1', cb); 
    }
}