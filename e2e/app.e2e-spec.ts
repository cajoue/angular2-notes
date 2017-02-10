import { Angular2NotesPage } from './app.po';

describe('angular2-notes App', function() {
  let page: Angular2NotesPage;

  beforeEach(() => {
    page = new Angular2NotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
