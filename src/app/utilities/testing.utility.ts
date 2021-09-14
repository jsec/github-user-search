import {
  Type
} from '@angular/core';
import {
  TestBed
} from '@angular/core/testing';

interface ITestComponentHarness<T> {
  component: T;
  element: HTMLElement;
}

export function generateTestComponent<T>(componentType: Type<T>): ITestComponentHarness<T> {
  const fixture = TestBed.createComponent(componentType);
  fixture.detectChanges();
  const component = fixture.componentInstance;
  const element = fixture.nativeElement as HTMLElement;
  return { component, element };
}
