import {
  TestBed
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';

import {
  AppComponent
} from './app.component';
import {
  generateTestComponent
} from './helpers/test.helpers';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const { component } = generateTestComponent(AppComponent);
    expect(component).toBeTruthy();
  });
});