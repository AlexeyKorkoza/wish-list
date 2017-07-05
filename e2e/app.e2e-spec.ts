import { WishListPage } from './app.po';

describe('wish-list App', () => {
  let page: WishListPage;

  beforeEach(() => {
    page = new WishListPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
