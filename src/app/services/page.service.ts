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
      }
    ]
  }
}
