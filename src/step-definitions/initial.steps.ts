import { Given, When, Then } from '@wdio/cucumber-framework';

import MainPage from '../page-objects/initial.page';

const pages = {
    main: MainPage
}

Given('I have tapped on the app', async () => {
    await MainPage.checkInitialPageElements();
});

When('I tap on the sign up button', async () => {
    await MainPage.clickSignUpButton();
});

Then('I am asked for my email', async () => {
    await MainPage.enterEmail('badgers@me.com');
})
