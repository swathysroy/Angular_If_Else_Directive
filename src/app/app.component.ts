import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  msg:String = 'Welcome';
  name:String;

  public onButtonClick(){
    console.log(name);
    this.msg = this.msg+" "+this.name;
    console.log(name);
  }
}
