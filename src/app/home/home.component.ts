import { Component, OnInit } from '@angular/core';
import { DataService, Group } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  groups!: Group[];

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.groups = this.dataService.getGroups();
  }

  navigateToDetails(name: string) {
    this.router.navigate(['./group', name], { relativeTo: this.route });
  }
}
