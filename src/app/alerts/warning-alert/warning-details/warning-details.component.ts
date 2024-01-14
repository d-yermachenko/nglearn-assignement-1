import { Component } from "@angular/core";

@Component({
    selector: 'warning-alert-details',
    templateUrl: './warning-details.component.html'
})
export class WarningAlertDetailsComponent {
    public title: string = "Warning";
    public domain: string = "What about this warning details?";
    public helpUrl: string = "www.google.com";
}