import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;
    const recipe = {
        name: 'testName',
        sections: [{ name: 'sectionName', components: [{ raw_text: 'sectionText' }] }],
        instructions: [{ display_text: 'instructionText' }],
        slug: 'testSlug'
    };
    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
        });
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        jest.mock('src/environments/environment', () => ({
            environment: {
                production: false,
                apiKey: '123'
            }
        }));
    });

    it('should setup app', () => {
        expect(app).toBeTruthy();
    });

    it('should have as title recipe-search', () => {
        expect(app.title).toEqual('recipe-search');
    });

    it('should display', () => {
        app.display(recipe);
        expect(app.recipeName).toEqual('testName');
        expect(app.ingredients).toEqual([{ name: 'sectionName', components: [{ raw_text: 'sectionText' }] }]);
        expect(app.instructions).toEqual([{ display_text: 'instructionText' }]);
        expect(app.slug).toEqual('testSlug');
    });

    it('should scroll window', () => {
        jest.spyOn(window, 'scrollTo');
        jest.useFakeTimers();
        app.display(recipe);
        jest.runAllTimers();
        expect(window.scrollTo).toHaveBeenCalled();
        jest.useRealTimers();
    });
});
