import {Injectable, ElementRef} from '@angular/core';

@Injectable()
export class PositionService {

  anchorElement: ElementRef;
  anchorPosition = new ComponentPosition();
  anchorStyle = new ComponentStyle();

  setAnchor(anchor: ElementRef) {
    this.anchorElement = anchor;
    this.initAnchorPosition();
    this.initAnchorStyle();
  }
  private initAnchorPosition() {
    this.anchorPosition.left = this.anchorElement.nativeElement.offsetLeft;
    this.anchorPosition.top = this.anchorElement.nativeElement.offsetTop;
  }

  private initAnchorStyle() {
    this.anchorStyle.height = this.anchorElement.nativeElement.offsetHeight;
    this.anchorStyle.width = this.anchorElement.nativeElement.offsetWidth;
  }
}

export class ComponentPosition {
  left: number;
  top: number;
}

export class ComponentStyle {
  height: number;
  width: number;
}
