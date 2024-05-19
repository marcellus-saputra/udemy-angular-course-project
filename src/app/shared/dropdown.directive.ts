import { 
    Directive,
    ElementRef,
    HostBinding,
    HostListener
} from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {

    constructor(private elemRef: ElementRef) {}

    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elemRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    // Self implementation
    /* constructor(private renderer: Renderer2, private elemRef: ElementRef) {}
    
    set isOpen(isOpen: boolean) {
        if (isOpen) {
            this.renderer.addClass(this.elemRef.nativeElement, 'open');
        } else {
            this.renderer.removeClass(this.elemRef.nativeElement, 'open');
        }
    }
    
    ngOnInit(): void {
        this.isOpen = false;
    }
    
    @HostListener('click') onClick(eventData: Event) {
        this.isOpen = true;
    }
    
    @HostListener('mouseleave') onMouseLeave(eventData: Event) {
        this.isOpen = false;
    } */
}

