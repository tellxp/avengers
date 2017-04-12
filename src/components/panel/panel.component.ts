import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, Input,
  OnChanges,
  OnDestroy,
  OnInit, Renderer2
} from '@angular/core';
import {DomService} from '../widget/dom.service';
import {WidgetComponent} from '../widget/widget.component';
import {isNullOrUndefined} from 'util';


@Component({
  selector: 'ave-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  providers: [DomService]
})
export class PanelComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() alignment: PanelAlignmentType;
  @Input() width: string;
  @Input() height: string;

  constructor(elementRef: ElementRef, domService: DomService, private render: Renderer2) {
    super(elementRef, domService);
  }

  ngOnChanges() {
    super.ngOnChanges();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngDoCheck() {
    super.ngDoCheck();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();
  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();

    this.setAlignment();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
  setAlignment() {
    if (isNullOrUndefined(this.alignment)) {
      this.alignment = PanelAlignmentType.Tile;
    }
    switch (this.alignment) {
      case PanelAlignmentType.Stack:
        this.render.setStyle(this.elementRef.nativeElement, 'flex-flow', 'column');
        break;
      case PanelAlignmentType.Tile:
        this.render.setStyle(this.elementRef.nativeElement, 'flex-flow', 'row');
        break;
      default:
        throw Error('Unmatched alignment');
    }

  }
}
export enum PanelAlignmentType {
  Stack,
  Tile
}
