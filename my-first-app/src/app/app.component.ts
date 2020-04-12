import { Component } from '@angular/core';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Darshil Kansara';
  inputText="";
  copytext="";
  title="my-first-app";
  
  onClick(){
    this.copytext=this.inputText;
    
  }

  
}
