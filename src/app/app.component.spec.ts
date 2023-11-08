import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    jest.mock("src/environments/environment", () => ({
      environment: {
        production: false,
        apiKey: '123'
      }
    }));
  })

  it("should setup app", () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'recipe-search'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('recipe-search');
  });
});
