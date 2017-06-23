import { PerdidonotestePage } from './app.po';

describe('perdidonoteste App', () => {
  let page: PerdidonotestePage;

  beforeEach(() => {
    page = new PerdidonotestePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
