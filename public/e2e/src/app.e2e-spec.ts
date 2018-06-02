import { StreamerDashboardPage } from './app.po';

describe('gistology App', () => {
  let page: StreamerDashboardPage;

  beforeEach(() => {
    page = new StreamerDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
