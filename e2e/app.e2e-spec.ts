import { AngularXzrtSitePage } from './app.po';

describe('angular-xzrt-site App', () => {
  let page: AngularXzrtSitePage;

  beforeEach(() => {
    page = new AngularXzrtSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
