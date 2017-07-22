import { NgFirebaseFirstPage } from './app.po';

describe('ng-firebase-first App', () => {
  let page: NgFirebaseFirstPage;

  beforeEach(() => {
    page = new NgFirebaseFirstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
