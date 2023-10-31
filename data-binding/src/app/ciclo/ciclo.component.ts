import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from "@angular/core";


@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit,
    DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  // Importante
  ngOnChanges() {
    this.log('constructor');
  }

  // Importante
  ngOnInit() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('DoCheck');
  }

  ngAfterContentInit() {
    this.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('AfterViewChecked');
  }

  // Importante
  ngOnDestroy() {
    this.log('OnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
