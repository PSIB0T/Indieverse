import { MusicPlayerPage } from './app.po';

describe('music-player App', () => {
  let page: MusicPlayerPage;

  beforeEach(() => {
    page = new MusicPlayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
