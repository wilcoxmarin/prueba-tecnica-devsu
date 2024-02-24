import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Option } from 'src/app/interface/option';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit{
  @ViewChild("b") element: ElementRef = new ElementRef({});
  @Input() options: Option[] = [];

  flag: boolean = false;

  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.render.listen("document","click", (event)=>{
      const attributes = event.srcElement.offsetParent.attributes;
      if(attributes.length>1){
        if(attributes[1].value.includes('active_content')){
          this.toggle();
        }
      }
    })
  }

  toggle(){
    if (!this.flag){
      this.render.addClass(this.element.nativeElement.nextElementSibling, 'active_content')
    }else{
      this.render.removeClass(this.element.nativeElement.nextElementSibling, 'active_content')
    }
    this.flag = !this.flag
  }
}
