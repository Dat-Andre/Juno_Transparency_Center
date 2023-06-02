import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService, Group } from '../data.service';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.scss'],
})
export class GroupViewComponent implements OnInit {
  groupName: string;
  group: Group;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.groupName = params.get('name');
      if (this.groupName) {
        this.group = this.dataService.getGroup(this.groupName);
      }
    });
  }

  navigateToMemberDetail(name: string) {}
}
