import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstcheckpoint',
  templateUrl: './firstcheckpoint.component.html',
  styleUrls: ['./firstcheckpoint.component.css']
})
export class FirstcheckpointComponent implements OnInit
{
  color = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

modify(newcolor)
{
this.color=newcolor;
}

Colorpardef()
{
   this.color='blue';
}
}
