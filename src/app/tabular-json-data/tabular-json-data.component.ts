import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabular-json-data',
  templateUrl: './tabular-json-data.component.html',
  styleUrls: ['./tabular-json-data.component.css']
})
export class TabularJsonDataComponent implements OnInit {

  constructor() { }

  // Data generated via http://www.mockaroo.com/
  private _someReallyLongJsonData: object = [{
    id: 1,
    first_name: 'Selene',
    last_name: 'Jouen',
    email: 'sjouen0@ucoz.com',
    gender: 'Female',
    ip_address: '108.130.128.128'
  }, {
    id: 2,
    first_name: 'Kerrie',
    last_name: 'Smieton',
    email: 'ksmieton1@ning.com',
    gender: 'Female',
    ip_address: '160.67.63.226'
  }, {
    id: 3,
    first_name: 'Damian',
    last_name: 'Izakov',
    email: 'dizakov2@theatlantic.com',
    gender: 'Male',
    ip_address: '106.200.68.81'
  }, {
    id: 4,
    first_name: 'Kevon',
    last_name: 'Du Plantier',
    email: 'kduplantier3@seesaa.net',
    gender: 'Male',
    ip_address: '176.33.78.235'
  }, {
    id: 5,
    first_name: 'Herrick',
    last_name: 'Danilchik',
    email: 'hdanilchik4@unesco.org',
    gender: 'Male',
    ip_address: '155.80.130.240'
  }, {
    id: 6,
    first_name: 'Brandon',
    last_name: 'Cafferky',
    email: 'bcafferky5@businessweek.com',
    gender: 'Male',
    ip_address: '23.234.202.140'
  }, {
    id: 7,
    first_name: 'Cyrille',
    last_name: 'Lahrs',
    email: 'clahrs6@issuu.com',
    gender: 'Male',
    ip_address: '125.163.110.74'
  }, {
    id: 8,
    first_name: 'Richmond',
    last_name: 'Veart',
    email: 'rveart7@sakura.ne.jp',
    gender: 'Male',
    ip_address: '64.183.200.102'
  }, {
    id: 9,
    first_name: 'Gottfried',
    last_name: 'Healy',
    email: 'ghealy8@friendfeed.com',
    gender: 'Male',
    ip_address: '76.88.12.60'
  }, {
    id: 10,
    first_name: 'Roi',
    last_name: 'Izaks',
    email: 'rizaks9@csmonitor.com',
    gender: 'Male',
    ip_address: '210.99.28.122'
  }, {
    id: 11,
    first_name: 'Tilly',
    last_name: 'Marklow',
    email: 'tmarklowa@hexun.com',
    gender: 'Female',
    ip_address: '5.249.220.86'
  }, {
    id: 12,
    first_name: 'Leesa',
    last_name: 'Spenley',
    email: 'lspenleyb@diigo.com',
    gender: 'Female',
    ip_address: '164.240.138.199'
  }, {
    id: 13,
    first_name: 'Donall',
    last_name: 'Fernehough',
    email: 'dfernehoughc@cdbaby.com',
    gender: 'Male',
    ip_address: '23.11.116.74'
  }, {
    id: 14,
    first_name: 'Alfie',
    last_name: 'Faccini',
    email: 'afaccinid@blog.com',
    gender: 'Male',
    ip_address: '9.45.241.144'
  }, {
    id: 15,
    first_name: 'Jae',
    last_name: 'Parker',
    email: 'jparkere@histats.com',
    gender: 'Male',
    ip_address: '30.244.180.15'
  }, {
    id: 16,
    first_name: 'Amie',
    last_name: 'Goodyear',
    email: 'agoodyearf@ed.gov',
    gender: 'Female',
    ip_address: '22.219.221.85'
  }, {
    id: 17,
    first_name: 'Elmore',
    last_name: 'Rude',
    email: 'erudeg@sitemeter.com',
    gender: 'Male',
    ip_address: '128.156.57.215'
  }, {
    id: 18,
    first_name: 'Georgia',
    last_name: 'Letterick',
    email: 'gletterickh@guardian.co.uk',
    gender: 'Female',
    ip_address: '222.208.186.186'
  }, {
    id: 19,
    first_name: 'Ericka',
    last_name: 'Everil',
    email: 'eeverili@wsj.com',
    gender: 'Female',
    ip_address: '218.160.65.197'
  }, {
    id: 20,
    first_name: 'Corny',
    last_name: 'Tupie',
    email: 'ctupiej@cornell.edu',
    gender: 'Male',
    ip_address: '246.134.191.49'
  }];

  ngOnInit() {
  }

  public onClickLogButton(): void {
    console.log(this._someReallyLongJsonData);
  }

  public onClickTableButton(): void {
    console.table(this._someReallyLongJsonData);
  }
}
