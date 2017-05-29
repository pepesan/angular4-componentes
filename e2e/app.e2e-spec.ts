import { Angular4MiejemploPage } from './app.po';

describe('angular4-miejemplo App', () => {
  let page: Angular4MiejemploPage;

  beforeEach(() => {
    page = new Angular4MiejemploPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
