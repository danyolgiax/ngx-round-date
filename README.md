# Simple round-date pipe

## ngx-round-date

[![npm version](https://badge.fury.io/js/ngx-round-date.svg)](http://badge.fury.io/js/ngx-round-date)
[![npm downloads](https://img.shields.io/npm/dm/ngx-round-date.svg)](https://npmjs.org/ngx-round-date)

Simple round-date pipe

    ```typescript
	this.testDate=new Date(2022,12,31,23,59,59);
    ```

    ```html
    <span>{{testDate | roundDate}}</span> --> 01/02/2023 00:00:00
    ```  

  

- Compatible with [Angular](https://angular.io/) version 12.2.0


## Usage

1. Install **ngx-round-date** through [npm](https://www.npmjs.com/package/ngx-round-date) package manager using the following command:

    ```bash
    npm i ngx-round-date --save
    ```

2. Add RoundDatePipeModule into your AppModule class. app.module.ts would look like this:

    ```typescript
    import {NgModule} from '@angular/core';
    import {BrowserModule} from '@angular/platform-browser';
    import {AppComponent} from './app.component';
    import { RoundDatePipeModule } from 'ngx-round-date';

    @NgModule({
      imports: [BrowserModule, RoundDatePipeModule],
      declarations: [AppComponent],
      bootstrap: [AppComponent],
    })
    export class AppModule {
    }
    ```
    
3. Add the pipe into html (default round 5 minutes)

    ```html
    <span>{{testDate | roundDate}}</span>
    ```  
    or
    ```html
    <span>{{testDate | roundDate:10}}</span>
    ```  

### License

The MIT License (see the [LICENSE](https://github.com/danyolgiax/ngx-round-date/blob/main/LICENCE) file for the full text)