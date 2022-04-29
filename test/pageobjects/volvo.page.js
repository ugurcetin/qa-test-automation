const Page = require('./page');

class VolvoPage extends Page {

    get acceptCookiesButton () { return $('.accept-cookies-button') } 
    get cookieSettingsButton () { return $('.cookie-settings-button') }
    get video1 () { return $('#Video-1 > section > div')}
    get video1WatchStoryButton () { return $('#Video-1 > section > div > div > div > button')}
    get video1Button () { return $('#Video-1 > section > div > button')}
    get video1Iframe () { return $('#Video-1 > section > div > iframe')}
    get video1IElement () { return $('#Video-1 > section > div > button > div > video')}

    get ourCarsMenuButton () { return $('button[data-autoid="nav:topNavCarMenu"]')}

    get ourCarsMenuCloseButton () { return $('button[data-autoid="nav:carMenuCloseButton"]')}

    get ourCarsMenuCloseIconButton () { return $('button[data-autoid="nav:carMenuCloseIcon"]')}

    get ourCarsMenuDesktop () {return $('//body/div[4]/nav/div[1]/div/div/div[1]/div/div[1]/div')}


    get sideNavToggleButton () { return $('#sitenav-v2-sidenav-toggle') }

    get sideNavToggleCloseButton () { return $('button[data-autoid="nav:siteNavCloseIcon"]') }

    get sideNavToggleBackDrop () { return $('#Sitenav-backdrop') }

    get learnMoreAboutCarSafetyButton () { return $('a[data-autoid="iconCallouts:cta"]') }

    get videoTestimonial1 () { return $$('[data-autoid="videoTestimonials:container"]')[0]}
    get videoTestimonial1Button () { return $$('[data-autoid="videoTestimonials:container"]')[0].$('button')}

    get videoTestimonial2 () { return $$('[data-autoid="videoTestimonials:container"]')[1]}
    get videoTestimonial2Button () { return $$('[data-autoid="videoTestimonials:container"]')[1].$('button')}

    get videoTestimonial3 () { return $$('[data-autoid="videoTestimonials:container"]')[2]}
    get videoTestimonial3Button () { return $$('[data-autoid="videoTestimonials:container"]')[2].$('button')}

    get videoTestimonial4 () { return $$('[data-autoid="videoTestimonials:container"]')[3]}
    get videoTestimonial4Button () { return $$('[data-autoid="videoTestimonials:container"]')[3].$('button')}


    get learnMoreButton () { return $('a[data-autoid="imageWithText:primaryCta"]') }

    get rechargeButton () { return $('a[data-autoid="ProductListCarousel:cta1"]') }
    get mildHybridCarsButton () { return $('a[data-autoid="ProductListCarousel:cta2"]') }

    get springCarouselNextButton () { return $('button[data-autoid="springCarouselNextButton"]') }
    get springCarouselPreviousButton () { return $('button[data-autoid="springCarouselPreviousButton"]') }


    async checkIfCookiePopupAppearsAndAcceptCookieTerms() {
        await expect(this.acceptCookiesButton).toBeExisting();
        await expect(this.cookieSettingsButton).toBeExisting();
        await this.acceptCookiesButton.click();
    }

    async clickOnOurCars() {
        await this.ourCarsMenuButton.click();
    }

    async cookieSettings() {
        await this.cookieSettingsButton.click();
    }

    async clickOnwatchTheStory() {
        await this.video1WatchStoryButton.click();
    }

    async playVideo1() {
        await this.video1Button.click();
    }

    async onClicklearnMoreAboutCarSafety() {
        await this.learnMoreAboutCarSafetyButton.click();
    }

    async onClicklearnMore() {
        await this.learnMoreButton.click();
    }

    async onClickOurCarsMenuCloseButton() {
        await this.ourCarsMenuCloseButton.click();
    }

    async onClickOurCarsMenuCloseIconButton() {
        await this.ourCarsMenuCloseIconButton.click();
    }

    async openToggleMenu() {
        await this.sideNavToggleButton.click();
    }

    async onClickSideNavToggleButtonCloseButton() {
        await this.sideNavToggleCloseButton.click();
    }

    async onClickSideNavToggleBackDropButtonClose() {
        await this.sideNavToggleBackDrop.click();
    }

    async playvideoTestimonial1() {
        await this.videoTestimonial1.click();
    }

    async playvideoTestimonial1Button() {
        await this.videoTestimonial1Button.click();
    }

    async playvideoTestimonial2() {
        await this.videoTestimonial2.click();
    }

    async playvideoTestimonial2Button() {
        await this.videoTestimonial2Button.click();
    }

    async playvideoTestimonial3() {
        await this.videoTestimonial3.click();
    }

    async playvideoTestimonial3Button() {
        await this.videoTestimonial3Button.click();
    }

    async playvideoTestimonial4() {
        await this.videoTestimonial4.click();
    }

    async playvideoTestimonial4Button() {
        await this.videoTestimonial4Button.click();
    }
    
    async onClickSpringCarouselNextButton() {
        await this.springCarouselNextButton.click();
    }

    async onClickSpringCarouselPreviousButton() {
        await this.springCarouselPreviousButton.click();
    }

    async onClickVolvoIconButton() {
        await this.volvoIconButton.click();
    }

    async onClickRechargeButton() {
        await this.rechargeButton.click();
    }

    async onClickMildHybridCarsButton() {
        await this.mildHybridCarsButton.click();
    }
    
    open () {
        return super.open('');
    }

}

module.exports = new VolvoPage();
