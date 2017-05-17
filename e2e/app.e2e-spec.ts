import { Angular.UmdPage } from './app.po';

describe('angular.umd App', () => {
  let page: Angular.UmdPage;

  beforeEach(() => {
    page = new Angular.UmdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
