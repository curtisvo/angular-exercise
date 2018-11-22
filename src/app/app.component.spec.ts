import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { NavItem } from './nav-item';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContentAreaComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    expect(app.contentAreaComp).toBeTruthy();
  });

  it('init values should be good', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.focus).toEqual(true);
    expect(app.selectedNavItem.id).toEqual(1);
    expect(app.selectedNavItem.title).toEqual("Suggestions For You");
  });

  it('down event should change selected nav item', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    app.onKey({key: "ArrowDown"});
    expect(app.focus).toEqual(true);
    expect(app.selectedNavItem.id).toEqual(2);
    expect(app.selectedNavItem.title).toEqual("Recently Watched");
  });

  it('up event should change selected nav item', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    app.setSelectedNavItem(1);
    app.onKey({key: "ArrowUp"});
    expect(app.focus).toEqual(true);
    expect(app.selectedNavItem.id).toEqual(1);
    expect(app.selectedNavItem.title).toEqual("Suggestions For You");
  });

  it('right event should lose focus', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    app.onKey({key: "ArrowRight"});
    expect(app.focus).toEqual(false);
    expect(app.selectedNavItem.id).toEqual(1);
    expect(app.selectedNavItem.title).toEqual("Suggestions For You");
  });
  /*
  it('left event should regain focus', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    app.onKey({key: "ArrowRight"});
    console.log(app.focus);
    app.onKey({key: "ArrowLeft"});
    console.log(app.focus);
    expect(app.focus).toEqual(true);
    expect(app.selectedNavItem.id).toEqual(1);
    expect(app.selectedNavItem.title).toEqual("Suggestions For You");
  });
    */
});
