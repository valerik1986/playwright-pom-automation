const BasePage = require('./basePage');
const { expect } = require('@playwright/test');

class StartBannerPage extends BasePage {
  constructor(page) {
    super(page);
    this.atletaIcon = "(//*[name()='rect'])[38]";
    this.xBetweenIcons = "(//span[@class='WelcomeModalByBit_blackText__BWJe0'])[1]";
    this.bybitIcon = "(//*[name()='rect'])[39]";
    this.bannerTitle = "//span[@class='WelcomeModalByBit_title__Nz_J_']";
    this.bannerText = "//span[@class='WelcomeModalByBit_desc__3HeXx']";
    this.iphonePicture = "(//div[@class='WelcomeModalByBit_block__t0JNt'])[1]";
    this.textOnIphonePicture = "(//span[normalize-space()='iPhone 16 Pro'])[1]";
    this.porschePicture = "(//div[@class='WelcomeModalByBit_block__t0JNt'])[2]";
    this.textOnPorschePicture = "(//span[normalize-space()='Porsche 718'])[1]";
    this.rolexPicture = "(//div[@class='WelcomeModalByBit_block__t0JNt'])[3]";
    this.textOnRolexPicture = "(//span[normalize-space()='Rolex'])[1]";
    this.readMoreButton = "(//button[normalize-space()='Read more'])[1]";
    this.closeButton = "(//span[@class='WelcomeModalByBit_closeText__eyb5b'])[1]";
    this.closeIcon = "(//*[name()='path'])[363]";
    this.dateTitle = "(//span[@class='OneNews_dateText__yLN8t'])[1]";
    this.eventTitle = "(//span[@class='OneNews_title__Chyle'])[1]";
  }

  async verifyAtletaIconIsVisible() {
    await this.page.waitForSelector(this.atletaIcon);
  }

  async verifyXBetweenIconsIsVisible(xBetweenIcons) {
    await this.page.waitForSelector(this.xBetweenIcons);
    const actualText = await this.page.textContent(this.xBetweenIcons);
    expect(actualText.trim()).toContain(xBetweenIcons);
  }

  async verifyBybitIconIsVisible() {
    await this.page.waitForSelector(this.bybitIcon);
  }

  async verifyBannerTitleIsVisible(expectedBannerTitle) {
    await this.page.waitForSelector(this.bannerTitle);
    const actualText = await this.page.textContent(this.bannerTitle);
    const expectedPattern = `^${expectedBannerTitle.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')}$`;
    expect(actualText.trim()).toMatch(new RegExp(expectedPattern, 's'));
  }

  async verifyBannerTextIsVisible(expectedBannerText) {
    await this.page.waitForSelector(this.bannerText);
    const actualText = await this.page.textContent(this.bannerText);
    const expectedPattern = `^${expectedBannerText.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')}$`;
    expect(actualText.trim()).toMatch(new RegExp(expectedPattern, 's'));
  }

  async verifyIphonePictureIsVisible() {
    await this.page.waitForSelector(this.iphonePicture);
  }

  async verifyTextOnIphonePictureIsVisible(textOnIphonePicture) {
    await this.page.waitForSelector(this.textOnIphonePicture);
    const actualText = await this.page.textContent(this.textOnIphonePicture);
    expect(actualText.trim()).toContain(textOnIphonePicture);
  }

  async verifyPorschePictureIsVisible() {
    await this.page.waitForSelector(this.porschePicture);
  }

  async verifyTextOnPorschePictureIsVisible(textOnPorschePicture) {
    await this.page.waitForSelector(this.textOnPorschePicture);
    const actualText = await this.page.textContent(this.textOnPorschePicture);
    expect(actualText.trim()).toContain(textOnPorschePicture);
  }

  async verifyRolexPictureIsVisible() {
    await this.page.waitForSelector(this.rolexPicture);
  }

  async verifyTextOnRolexPictureIsVisible(textOnRolexPicture) {
    await this.page.waitForSelector(this.textOnRolexPicture);
    const actualText = await this.page.textContent(this.textOnRolexPicture);
    expect(actualText.trim()).toContain(textOnRolexPicture);
  }

  async verifyReadMoreButtonIsVisible(readMoreButton) {
    await this.page.waitForSelector(this.readMoreButton);
    const actualText = await this.page.textContent(this.readMoreButton);
    expect(actualText.trim()).toContain(readMoreButton);
  }

  async verifyCloseButtonIsVisible(closeButton) {
    await this.page.waitForSelector(this.closeButton);
    const actualText = await this.page.textContent(this.closeButton);
    expect(actualText.trim()).toContain(closeButton);
  }

  async verifyCloseIconIsVisible() {
    await this.page.waitForSelector(this.closeIcon);
  }

  async clickReadMoreButton() {
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.click(this.readMoreButton)
    ]);
    this.page = newPage;
  }

  async verifyDateTitleIsVisible(dateTitle) {
    await this.page.waitForSelector(this.dateTitle);
    const actualText = await this.page.textContent(this.dateTitle);
    expect(actualText.trim()).toContain(dateTitle);
  }

  async verifyEventTitleIsVisible(expectedEventTitle) {
    await this.page.waitForSelector(this.eventTitle);
    const actualText = await this.page.textContent(this.eventTitle);
    const expectedPattern = `^${expectedEventTitle.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')}$`;
    expect(actualText.trim()).toMatch(new RegExp(expectedPattern, 's'));
  }

  async clickCloseButton() {
    await this.click(this.closeButton);
  }
}

module.exports = StartBannerPage;