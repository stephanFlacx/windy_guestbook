import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomImagePathService {

  constructor() { }

  getPath(): string {
    const min = 1;
    const max = 32;
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    const stringNumber = randomNumber.toString().padStart(3, '0');
    const imagePath = `../../assets/windsurf_pictures/ws_jh_${stringNumber}.jpg`;
    return imagePath;
  }
}
