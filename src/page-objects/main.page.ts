import { createTypeReferenceDirectiveResolutionCache } from "typescript";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage {
    /**
     * define selectors using getter methods
     */
    public get zigluApp () {
        return $('~Ziglu');
    }

    public get devApp () {
        return $('~Development App');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async openApp () {
        await this.zigluApp.click();
    }

    public async devAppFound () {
        await this.devApp.waitForDisplayed({ timeout: 5000 });
    }

    // /**
    //  * overwrite specific options to adapt it to page object
    //  */
    // public open () {
    //     return super.open('main');
    // }
}

export default new MainPage();
