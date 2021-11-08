import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return (await element(by.css('app-root .navbar-nav .nav-item a')).getText()).trim();
  }
}
