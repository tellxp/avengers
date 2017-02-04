import {Component} from '@angular/core';
import {PanelBarExpandMode} from '@progress/kendo-angular-layout';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
  private baseImageUrl: string = "http://demos.telerik.com/kendo-ui/content/web/panelbar/";
  public expandMode: number = PanelBarExpandMode.Multiple;

  private imageUrl(imageName: string): string {
    return this.baseImageUrl + imageName + ".jpg";
  }
}
