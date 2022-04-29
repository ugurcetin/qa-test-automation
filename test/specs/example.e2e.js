const VolvoPage = require('../pageobjects/volvo.page');


describe('Volvo Page testing', () => {
    it('should check if cookie popup appears and accept cookie terms', async () => {
        await VolvoPage.open();
        await VolvoPage.checkIfCookiePopupAppearsAndAcceptCookieTerms();
    });

    it('should play video 1 and check if the video exists', async () => {
        await VolvoPage.open();

        //await VolvoPage.cookieSettingsButton.waitForDisplayed({ timeout: 10000 })


        //await VolvoPage.volvo();
        await expect(VolvoPage.video1).toBeExisting();
        await expect(VolvoPage.video1Button).toBeExisting();
        await expect(VolvoPage.video1WatchStoryButton).toBeExisting();
        await expect(VolvoPage.video1Iframe).not.toBeExisting();

        await VolvoPage.clickOnwatchTheStory();

        await expect(VolvoPage.video1Iframe).toBeExisting();
        await expect(VolvoPage.video1Button).not.toBeExisting();
        await expect(VolvoPage.video1WatchStoryButton).not.toBeExisting();        
        
    });

    it('should play video 1 (2.scenario)', async () => {
        await VolvoPage.open();

        await expect(VolvoPage.video1).toBeExisting();
        await expect(VolvoPage.video1Button).toBeExisting();
        await expect(VolvoPage.video1WatchStoryButton).toBeExisting();
        await expect(VolvoPage.video1Iframe).not.toBeExisting();

        await VolvoPage.playVideo1();

        await expect(VolvoPage.video1Iframe).toBeExisting();
        await expect(VolvoPage.video1Button).not.toBeExisting();
        await expect(VolvoPage.video1WatchStoryButton).not.toBeExisting();        
        
        
    });

    it('should click LearnMoreAboutCarSafety then navigate', async () => {
        await VolvoPage.open();
        
        await expect(VolvoPage.learnMoreAboutCarSafetyButton).toBeExisting();

        await VolvoPage.onClicklearnMoreAboutCarSafety();

        
        const redirectedUrl = await browser.getUrl();
        expect(redirectedUrl).toEqual(`https://www.volvocars.com/intl/v/car-safety`);

    
    });


    it('should click rechargeButton then navigate', async () => {
        await VolvoPage.open();
        
        await expect(VolvoPage.rechargeButton).toBeExisting();

        await VolvoPage.onClickRechargeButton();

        
        const redirectedUrl = await browser.getUrl();
        expect(redirectedUrl).toEqual(`https://www.volvocars.com/intl/v/cars/recharge`);

    
    });

    it('should click mildHybridCarsButton then navigate', async () => {
        await VolvoPage.open();
        
        await expect(VolvoPage.mildHybridCarsButton).toBeExisting();

        await VolvoPage.onClickMildHybridCarsButton();

        
        const redirectedUrl = await browser.getUrl();
        expect(redirectedUrl).toEqual(`https://www.volvocars.com/intl/v/cars/other-powertrains`);

    
    });

    it('should open LearnMore', async () => {
        await VolvoPage.open();

        await expect(VolvoPage.learnMoreButton).toBeExisting();

        await VolvoPage.onClicklearnMore();

        const redirectedUrl = await browser.getUrl();
        expect(redirectedUrl).toEqual(`https://www.volvocars.com/intl/v/car-safety/safety-heritage`);

    
    });

    it('should open ourCars Panel then close by using MenuCloseButton', async () => {
        await VolvoPage.open();

        await VolvoPage.clickOnOurCars();

        await VolvoPage.onClickOurCarsMenuCloseButton();

    
    });

    it('should open ourCars Panel then close by using MenuCloseIconButton', async () => {
        await VolvoPage.open();

        await VolvoPage.clickOnOurCars();

        await VolvoPage.onClickOurCarsMenuCloseIconButton();

    
    });

    it('should open sideNavToogle Panel then close by using CloseButton', async () => {
        await VolvoPage.open();

        await VolvoPage.openToggleMenu();

        await VolvoPage.onClickSideNavToggleButtonCloseButton();

    
    });


    it('should open sideNavToogle Panel then close by using BackDrop', async () => {
        await VolvoPage.open();

        await VolvoPage.openToggleMenu();

        await VolvoPage.onClickSideNavToggleBackDropButtonClose();
    
    });

    it('should open play testimonial video 1 by clicking over the image', async () => {
        await VolvoPage.open();
        await VolvoPage.playvideoTestimonial1();
    });

    it('should open play testimonial video 1 by clicking on play button', async () => {
        await VolvoPage.open();
        await VolvoPage.playvideoTestimonial1Button();
    });

    it('should open play testimonial video 2 by clicking over the image', async () => {
        await VolvoPage.open();
        await VolvoPage.playvideoTestimonial2();
    });

    it('should open play testimonial video 2 by clicking on play button', async () => {
        await VolvoPage.open();
        await VolvoPage.playvideoTestimonial2Button();
    });

    it('should open play testimonial video 3 by clicking over the image', async () => {
        await VolvoPage.open();
        await VolvoPage.playvideoTestimonial3();
    });

    it('should open play testimonial video 3 by clicking on play button', async () => {
        await VolvoPage.open();
        await VolvoPage.playvideoTestimonial3Button();
    });

    it('should open play testimonial video 4 by clicking over the image', async () => {
        await VolvoPage.open();
        await VolvoPage.playvideoTestimonial4();
    });

    it('should open play testimonial video 4 by clicking on play button', async () => {
        await VolvoPage.open();
        await VolvoPage.playvideoTestimonial4Button();

    });

    

    it('should click springCarouselNextButton', async () => {
        await VolvoPage.open();

        await expect(VolvoPage.springCarouselNextButton).toBeExisting();

        await VolvoPage.onClickSpringCarouselNextButton();

    
    });

    it('should click springCarouselPreviousButton', async () => {
        await VolvoPage.open();

        await expect(VolvoPage.springCarouselPreviousButton).toBeExisting();

        await VolvoPage.onClickSpringCarouselPreviousButton();

    
    });

    it('should open first page', async () => {

        const link = await $('a[data-autoid="productListCarouselItem-0"]').getAttribute("href");
        await browser.url(`https://www.volvocars.com${link}`);
        const redirectedUrl = await browser.getUrl();
        expect(redirectedUrl).toEqual(`https://www.volvocars.com${link}`);
    });

});


