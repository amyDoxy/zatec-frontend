import { Component, OnInit } from '@angular/core';
import { StarWarsPeople } from './models/people.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  starWarsPeople: StarWarsPeople[] = [];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.fetchStarWarsPeople()
      .subscribe((resp: StarWarsPeople[]) => {
        console.log(resp);
        this.starWarsPeople = resp;
      })
  }

}
