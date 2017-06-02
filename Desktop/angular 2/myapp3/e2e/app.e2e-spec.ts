import { Myapp3Page } from './app.po';

describe('myapp3 App', () => {
  let page: Myapp3Page;

  beforeEach(() => {
    page = new Myapp3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
