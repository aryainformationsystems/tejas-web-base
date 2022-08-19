import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  getPageData(page: string): any {
    return [
      {
        type: 'navigation',
        subType: 14,
        page
      },
      {
        type: 'call-to-action',
        subType: 16,
        page
      },
      {
        type: 'content',
        subType: 22,
        page
      },
      {
        type: 'contact-us',
        subType: 6,
        page
      },
      {
        type: 'features',
        subType: 6,
        page
      },
      {
        type: 'form',
        subType: 3,
        page
      },
      {
        type: 'pricings',
        subType: 3,
        page
      },
      {
        type: 'testimonials',
        subType: 3,
        page
      },
      {
        type: 'team',
        subType: 1,
        page
      },
      {
        type: 'footer',
        subType: 10,
        page
      }
    ]
  }
}
