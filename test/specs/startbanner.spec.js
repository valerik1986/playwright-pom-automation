const { test } = require('@playwright/test');
const StartBannerPage = require('../pageobjects/startBannerPage');
const environments = require('../../environment');

test.describe('Start Banner Tests', () => {
  let startBannerPage;

  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    startBannerPage = new StartBannerPage(page);
    await startBannerPage.navigate(environments.urls.production);
  });

  test('Should display the Atleta icon', async () => {
    await startBannerPage.verifyAtletaIconIsVisible();
  });

  test('Should display the "x" between icons', async () => {
    await startBannerPage.verifyXBetweenIconsIsVisible('x');
  });

  test('Should display the Bybit icon', async () => {
    await startBannerPage.verifyBybitIconIsVisible();
  });

  test('Should display the start banner title with correct content', async () => {
    await startBannerPage.verifyBannerTitleIsVisible(`Atleta X ByBit Collaboration!`);
  });

  test('Should display the start banner text with correct content', async () => {
    await startBannerPage.verifyBannerTextIsVisible(`Get ready to mainnet & Win Big: Porsche 718, Rolex, iPhone 16 Pro, and More!`);
  });

  test('Should display the iPhone picture', async () => {
    await startBannerPage.verifyIphonePictureIsVisible();
  });

  test('Should display the text on the iPhone picture', async () => {
    await startBannerPage.verifyTextOnIphonePictureIsVisible('iPhone 16 Pro');
  });

  test('Should display the Porsche picture', async () => {
    await startBannerPage.verifyPorschePictureIsVisible();
  });

  test('Should display the text on the Porsche picture', async () => {
    await startBannerPage.verifyTextOnPorschePictureIsVisible('Porsche 718');
  });

  test('Should display the Rolex picture', async () => {
    await startBannerPage.verifyRolexPictureIsVisible();
  });

  test('Should display the text on the Rolex picture', async () => {
    await startBannerPage.verifyTextOnRolexPictureIsVisible('Rolex');
  });

  test('Should display the "Read more" button', async () => {
    await startBannerPage.verifyReadMoreButtonIsVisible('Read more');
  });

  test('Should display the "Close" button', async () => {
    await startBannerPage.verifyCloseButtonIsVisible('Close');
  });

  test('Should display the close icon', async () => {
    await startBannerPage.verifyCloseIconIsVisible();
  });

  test('Should click the "Read more" button and verify the event details', async () => {
    await startBannerPage.clickReadMoreButton();
    await startBannerPage.verifyDateTitleIsVisible(`Oct 03, 2024`);
    await startBannerPage.verifyEventTitleIsVisible(`Atleta x Bybit: Groundbreaking Mainnet Launch Event`);
  });
});