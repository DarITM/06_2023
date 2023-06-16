import { describe,test,expect, Page, Locator } from '@playwright/test'
import context from 'zustand/context';

import { Startpage1 } from '../D_tests/eniro_se';

    test('Startpage_tests_for_topMenu', async ({ page }) => { 
     const startpage1 = new Startpage1(page);
     await startpage1.goToTopMenuKarta(); 
     await startpage1.goToTopMenuDirection();
     await startpage1.goToTopMenuWhoCall();
     await startpage1.goToTopMenuYourBuisness();
     await startpage1.goToTopMenuProduct();
     await startpage1.goToTopMenuTools();
     await startpage1.goToTopMenuLogin();

    })

test('E2E', async ({ page }) =>{
const startpage1 = new Startpage1(page);
await startpage1.e2e();
})
