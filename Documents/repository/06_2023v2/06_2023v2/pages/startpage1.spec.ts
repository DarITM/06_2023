import { describe,test,expect, Page, Locator } from '@playwright/test'
import context from 'zustand/context';

//const { expect } = require('@playwright/test');

export default class Startpage1 {
    readonly page: Page
readonly top_menu_direction: Locator;
readonly top_menu_karta: Locator;
readonly top_menu_whocall: Locator;
readonly top_menu_products: Locator;
readonly top_menu_tools: Locator;
readonly top_menu_login: Locator;
readonly top_menu_your_buisness: Locator;
readonly search_bar: Locator;
readonly search_for: string;
readonly checkSearchInput: Locator;
readonly first_choose: Locator;
readonly profile_page_finansial_data: Locator;

constructor(page: Page){
    this.page=page
    this.top_menu_karta = page.locator('//div[contains(@class, "MuiBox-root css-1jpm9pd")]/child::*[text()="Karta"]')
    this.top_menu_direction = page.locator('//div[contains(@class, "MuiBox-root css-1jpm9pd")]/child::*[text()="Vägbeskrivning"]')
    this.top_menu_whocall = page.locator('//div[contains(@class, "MuiBox-root css-1jpm9pd")]/child::*[text()="Vem Ringde?"]')
    this.top_menu_your_buisness = page.locator('//div[contains(@class, "MuiBox-root css-1jpm9pd")]/child::*[text()="Marknadsför ditt företag"]')
    this.top_menu_products = page.locator('//div[contains(@class, "MuiBox-root css-1jpm9pd")]/child::*[text()="Produkter"]')
    this.top_menu_tools = page.locator('//div[contains(@class, "MuiBox-root css-1jpm9pd")]/child::*[text()="Verktyg"]')
    this.top_menu_login = page.locator('//div[contains(@class, "MuiBox-root css-1jpm9pd")]/child::*[text()="Logga in"]')
    this.search_bar = page.locator('//input[contains(@id, "search-box") and contains (@name,"q")]')
    this.checkSearchInput = page.locator('//div[contains(@class, "MuiBox-root css-1rfep5l")]/child::*[text()="${search_for}"]')
    this.first_choose = page.locator('//div[contains(@data-testid, "result-card-0")]')
    this.profile_page_finansial_data = page.locator('//p[text()="Finansiell information"]')
    
}
async goToStartPage() {
    await this.page.goto('https://www.eniro.se/')
    const title = await this.page.title()
    expect(title).toBe('Eniro.se - Upptäck närheten.')

}
async goToTopMenuKarta() {
    await this.goToStartPage();
    const previousPage = this.page;
  await this.top_menu_karta.click();
  
  await this.page.waitForNavigation();
  
  const newPage = this.page;
    const title = await this.page.title();
    expect(title).toBe('Kartor, vägbeskrivningar, flygfoton, sjökort &amp; mycket mer på eniro.se');
    

  // Check if this is open in new tab
  if (newPage === previousPage) {
    console.log('This same tab');
  } else {
    console.log('New tab');
  }
  expect(newPage).toBe(previousPage);
}
async goToTopMenuDirection() {
    await this.goToStartPage();
    const previousPage = this.page;
  await this.top_menu_direction.click();
  
  await this.page.waitForNavigation();
  
  const newPage = this.page;
    const title = await this.page.title();
    expect(title).toBe('Kartor, vägbeskrivningar, flygfoton, sjökort &amp; mycket mer på eniro.se');
    

  // Check if this is open in new tab
  if (newPage === previousPage) {
    console.log('This same tab');
  } else {
    console.log('New tab');
  }
  expect(newPage).toBe(previousPage);
}
async goToTopMenuWhoCall() {
    await this.goToStartPage();
    const previousPage = this.page;
  await this.top_menu_whocall.click();
  
  await this.page.waitForNavigation();
  
  const newPage = this.page;
    const title = await this.page.title();
    expect(title).toBe('Vem ringde? | De mest sökta telefonnumren i Sverige | Eniro.se');
    

  // Check if this is open in new tab
  if (newPage === previousPage) {
    console.log('This same tab');
  } else {
    console.log('New tab');
  }
  expect(newPage).toBe(previousPage);
}
async goToTopMenuYourBuisness() {
    await this.goToStartPage();
    const previousPage = this.page;
  await this.top_menu_your_buisness.click();
  
  await this.page.waitForNavigation();
  
  const newPage = this.page;
    const title = await this.page.title();
    expect(title).toBe('Vi hjälper ditt företag att synas online');
    

  // Check if this is open in new tab
  if (newPage === previousPage) {
    console.log('This same tab');
  } else {
    console.log('New tab');
  }
  expect(newPage).toBe(previousPage);
}
async goToTopMenuProduct() {
    await this.goToStartPage();
    const previousPage = this.page;
  await this.top_menu_products.click();
  
  await this.page.waitForNavigation();
  
  const newPage = this.page;
    const title = await this.page.title();
    expect(title).toBe('Vi hjälper ditt företag att synas online');
    

  // Check if this is open in new tab
  if (newPage === previousPage) {
    console.log('This same tab');
  } else {
    console.log('New tab');
  }
  expect(newPage).toBe(previousPage);
}
async goToTopMenuTools() {
    await this.goToStartPage();
    const previousPage = this.page;
  await this.top_menu_tools.click();
  
  await this.page.waitForNavigation();
  
  const newPage = this.page;
    const title = await this.page.title();
    expect(title).toBe('Kartor, vägbeskrivningar, flygfoton, sjökort &amp; mycket mer på eniro.se');
    

  // Check if this is open in new tab
  if (newPage === previousPage) {
    console.log('This same tab');
  } else {
    console.log('New tab');
  }
  expect(newPage).toBe(previousPage);
}
async goToTopMenuLogin() {
    await this.goToStartPage();
    const previousPage = this.page;
  await this.top_menu_login.click();
  
  await this.page.waitForNavigation();
  
  const newPage = this.page;
    const title = await this.page.title();
    expect(title).toBe('Kartor, vägbeskrivningar, flygfoton, sjökort &amp; mycket mer på eniro.se');
    

  // Check if this is open in new tab
  if (newPage === previousPage) {
    console.log('This same tab');
  } else {
    console.log('New tab');
  }
  expect(newPage).toBe(previousPage);
}

async e2e() {
    await this.goToStartPage();
    if (this.search_bar !== null) await this.search_bar.type(this.search_for)
        expect(this.search_bar).toHaveJSProperty('value',this.search_for)
        this.search_bar.press('Enter')
        const title = await this.page.title();
        expect(title).toBe(`${this.search_for} | företag | eniro.se | sida 1`);
        this.first_choose.click();
        const title2 = await this.page.title();
         expect(title2).toContain('företag');
        await expect(this.profile_page_finansial_data).toBeVisible();  
}

}
