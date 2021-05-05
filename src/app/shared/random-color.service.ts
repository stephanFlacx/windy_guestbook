import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomColorService {

  constructor() { }

  getColor(): string {
    const colors = ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3'];
    const randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
  }
}

