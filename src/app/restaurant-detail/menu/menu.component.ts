import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from './menu-item.model';
import {RestaurantsService} from '../../restaurants/restaurants.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @Input() menuItem: MenuItem

  menu: Observable<MenuItem[]>

  constructor(private restaurantService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantService
        .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }

}
