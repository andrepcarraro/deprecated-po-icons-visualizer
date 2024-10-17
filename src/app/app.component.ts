import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PoIconDictionary,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  iconDictionary = PoIconDictionary;

  get iconKeys(): string[] {
    return Object.keys(this.iconDictionary).filter(key => key !== 'NAME_LIB');
  }

  getIconClass(iconKey: string): string {
    return this.iconDictionary[iconKey];
  }

  getIconName(iconKey: string): string {
    return this.iconDictionary[iconKey].replace(/po-icon\s+po-icon-/, '');
  }

  // Track the copied class
  copiedClass: string | null = null;

  // Function to copy the icon class
  copyIconClass(icon: string): void {
    navigator.clipboard.writeText(icon).then(() => {
      this.copiedClass = icon;

      // Reset the copied class after 1 second
      setTimeout(() => {
        this.copiedClass = null;
      }, 1000);
    });
  }
}
