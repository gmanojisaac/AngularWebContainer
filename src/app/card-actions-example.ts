import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import mermaid from "mermaid";

/**
 * @title Card with actions alignment option
 */
@Component({
  selector: 'card-actions-example',
  templateUrl: 'card-actions-example.html',
})
export class CardActionsExample  implements AfterViewInit {

  constructor() { }

  
  @ViewChild('mermaidDiv') mermaidDiv: ElementRef;

  public ngAfterViewInit(): void {
    /*mermaid.initialize({
        theme: "default"
    });*/
const config = {
    startOnLoad: true,
    flowchart: {
        useMaxWidth: false,
        htmlLabels: true
    }
};

mermaid.initialize(config);
    
    const element: any = this.mermaidDiv.nativeElement;
    const graphDefinition = `graph TD\nA[Christmas] -->|Get money| B(Go shopping)\nB --> C(Let me think)\nC -->|One| D[Laptop]\nC -->|Two| E[iPhone]\nC -->|Three| F[fa:fa-car Car]\nA[Christmas] -->|Get money| D[Laptop]\nB --> E`;
    mermaid.render("graphDiv", graphDefinition, (svgCode, bindFunctions) => {
        element.innerHTML = svgCode;
        bindFunctions(element);
    });
  }


}