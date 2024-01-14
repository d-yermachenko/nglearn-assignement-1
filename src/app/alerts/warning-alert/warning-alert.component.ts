import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
      <div class="panel panel-warning">
      <div class="panel-heading">{{ title }}</div>
        <div class="panel-body">
            <warning-alert-details></warning-alert-details>
        </div>
    </div>
  `})
export class WarningAlertComponent {
  public title: string = "Warning";
  public message: string = "Warning message";
}
