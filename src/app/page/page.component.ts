import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pageData: any[] = [];

  constructor(private pageService: PageService, private route: ActivatedRoute) {
    const page = this.route.snapshot.params['page'];
    this.pageData = pageService.getPageData(page);
  }

  ngOnInit(): void {
    
  }

}
