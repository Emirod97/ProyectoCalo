import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyectoApp';

  color1:any;
  color2:any;

  ngOnInit(){
    this.color1="button1";
    this.color2="button1";
  }

  convertir(){
    const id = (<HTMLInputElement>document.getElementById('variable')).value;

    if(id=="1"){
      this.color1="button2";
    }else if(id=="0"){
      this.color1="button3";
    }else{
      this.color1="button1";
    }


  }
}
