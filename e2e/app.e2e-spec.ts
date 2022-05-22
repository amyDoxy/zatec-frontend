import { ZatecFrontendPage } from './app.po';

describe('zatec-frontend App', () => {
  let page: ZatecFrontendPage;

  beforeEach(() => {
    page = new ZatecFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
