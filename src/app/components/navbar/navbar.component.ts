import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img = 'https://th.bing.com/th/id/R.986c85af66dfe90abe49a8134e33c98d?rik=XZtH6fuD%2bAy7UQ&riu=http%3a%2f%2fideasunidas.com%2fwp-content%2fuploads%2f2017%2f01%2fAngular_full_color_logo.svg_.png&ehk=yjv9nwRXkZWvpmrYFLHm1nCEWphav9aIphMCsDwJldM%3d&risl=&pid=ImgRaw&r=0';

  constructor() { }

  ngOnInit(): void {
  }

}
