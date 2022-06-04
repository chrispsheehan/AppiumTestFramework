import { Given, When, Then } from '@wdio/cucumber-framework';

import MainPage from '../page-objects/main.page';

const pages = {
    main: MainPage
}

Given('I have tapped on the app', async () => {
    await MainPage.openApp();
});

Then('the dev screen is displayed', async () => {
    await MainPage.devAppFound();
});
