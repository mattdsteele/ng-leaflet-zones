import { Component } from '@angular/core';
import { tileLayer, latLng, Layer, marker, icon, MarkerOptions } from 'leaflet';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };
  tooltipClickedTimes = 0;
  layers: Layer[] = [];
  ngOnInit() {
    console.log('initting');
    const markerOptions: MarkerOptions = {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    };
    const mark = marker(latLng(46.879966, -121.726909), markerOptions);
    mark.addEventListener('click', evt => {
      console.log('clicked tooltip');
      this.tooltipClickedTimes++;
    });
    this.layers.push(mark);
  }
  forceUpdate() {
    this.tooltipClickedTimes++;
  }
}
