import { Directive, ElementRef } from "@angular/core"
@Directive({
  selector:'[setBackground]'
})

export class SetBackgroundDirective{
constructor(private element:ElementRef){
    element.nativeElement.style.backgroundColor='#F5F5DC';
}
}
