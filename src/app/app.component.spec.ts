import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoot } from './app-root.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppRoot
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppRoot);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-playground'`, () => {
    const fixture = TestBed.createComponent(AppRoot);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-playground');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppRoot);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-playground!');
  });
});
