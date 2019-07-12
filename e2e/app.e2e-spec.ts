import { IsearchPage } from './app.po';

describe('isearch App', function() {
  let page: IsearchPage;

  beforeEach(() => {
    page = new IsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
