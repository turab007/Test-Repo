import { TestRepoPage } from './app.po';

describe('test-repo App', () => {
  let page: TestRepoPage;

  beforeEach(() => {
    page = new TestRepoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
