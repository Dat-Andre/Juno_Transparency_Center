import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  groups: Group[];
  constructor() {}

  getGroups(): Group[] {
    return this.GROUPS;
  }

  getGroup(name: string): Group {
    return this.GROUPS.find((g) => g.name === name);
  }

  GROUPS: Group[] = [
    {
      name: 'Founders',
      members: [
        {
          name: 'Jake Hartnell',
          wallets: ['junoxxx1', 'junoxxx2', 'junoxxx3'],
          totalLiq: 1,
          totalStaked: 1,
        },
        {
          name: 'Dimi',
          wallets: ['junoxxx1', 'junoxxx2', 'junoxxx3'],
          totalLiq: 1,
          totalStaked: 1,
        },
        {
          name: 'Wolf',
          wallets: ['junoxxx1', 'junoxxx2', 'junoxxx3'],
          totalLiq: 1,
          totalStaked: 1,
        },
        {
          name: 'Jack Z',
          wallets: ['junoxxx1', 'junoxxx2', 'junoxxx3'],
          totalLiq: 1,
          totalStaked: 1,
        },
        {
          name: 'Block',
          wallets: ['junoxxx1', 'junoxxx2', 'junoxxx3'],
          totalLiq: 1,
          totalStaked: 1,
        },
      ],
    },
    {
      name: 'Core 1',
      members: [
        {
          name: 'Jake Hartnell',
          wallets: ['junoxxx1', 'junoxxx2', 'junoxxx3'],
          totalLiq: 1,
          totalStaked: 1,
        },
        {
          name: 'Dimi',
          wallets: ['junoxxx1', 'junoxxx2', 'junoxxx3'],
          totalLiq: 1,
          totalStaked: 1,
        },
        {
          name: 'theFrey',
          wallets: ['junoxxx1', 'junoxxx2', 'junoxxx3'],
          totalLiq: 1,
          totalStaked: 1,
        },
        {
          name: 'Jack Z',
          wallets: ['junoxxx1', 'junoxxx2', 'junoxxx3'],
          totalLiq: 1,
          totalStaked: 1,
        },
        {
          name: 'Block',
          wallets: ['junoxxx1', 'junoxxx2', 'junoxxx3'],
          totalLiq: 1,
          totalStaked: 1,
        },
        {
          name: 'Max',
          wallets: ['junoxxx1', 'junoxxx2', 'junoxxx3'],
          totalLiq: 1,
          totalStaked: 1,
        },
      ],
    },
  ];
}

export interface Group {
  name: string;
  members: Contributers[];
}

export interface Contributers {
  name: string;
  wallets: string[];
  totalLiq: number;
  totalStaked: number;
}
