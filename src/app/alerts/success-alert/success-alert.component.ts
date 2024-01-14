import  {Component} from '@angular/core';

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html'
})
export class SuccessAlertComponent {
    public title: string = "Success";
    public message: string = "Success message";
}
