import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-program2';
  password='Secreate Password="Darshil"';
  surname="Kansara"
  showPassword=true;
  log=[];
  logtime=[];
  
  onClick(){
    this.showPassword=!this.showPassword;
    console.log(this.showPassword);
  }

  Add(){
    this.log.push(this.log.length+1);
    //this.log.push(this.surname);
    console.log(this.log);
    
  }
  
  Addtime(){
    this.logtime.push(new Date());
    console.log(this.logtime);
  }

}
