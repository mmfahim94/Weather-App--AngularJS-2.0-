import { A3AngularPage } from './app.po';

describe('a3-angular App', () => {
  let page: A3AngularPage;

  beforeEach(() => {
    page = new A3AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
