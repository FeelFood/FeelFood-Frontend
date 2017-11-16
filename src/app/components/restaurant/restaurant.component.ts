import {Component, Input, OnInit} from '@angular/core';
import {MapComponent} from '../map/map.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Restaurant} from '../../models/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurantName;
  edit = false;
  @Input() profile: boolean;
  editRestaurant;
  restaurant;
  lat = 41.275103;
  lng = 1.985314;
  constructor(private http: HttpClient) {
    this.restaurantName = 'Bulli';
    this.profile = true;

  }
  ngOnInit() {
    this.restaurant = new Restaurant();
    this.http.get(`http://localhost:3001/restaurant/${this.restaurantName}`).subscribe(data => {
      if (data) {
        this.restaurant = data;
      }
    });
  }
  OnChange(value: string) {
    this.http.get(`http://localhost:3001/restaurant/${value}`).subscribe(data => {
      if (data) {
        this.restaurant = data;
      }
    });
  }
  Edit() {
    if (this.edit) {
      this.restaurant = this.editRestaurant;
      this.edit = false;
    }
    else {
      this.editRestaurant = this.restaurant;
      this.edit = true;
    }
  }
  Update() {
    alert(JSON.stringify(this.restaurant))
    this.http.put(`http://localhost:3001/restaurant`, this.restaurant, {headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(data => {
    alert(data);
    });
    this.edit = false;
  }
  private getUser() {

  }
  // initialize_google_map()
  // {
  //   let myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
  //   let mapOptions = {
  //     zoom: 14,
  //     scrollwheel: false,
  //     center: myLatlng
  //   };
  //   let map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
  //   let marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map
  //   });
  //    }

}