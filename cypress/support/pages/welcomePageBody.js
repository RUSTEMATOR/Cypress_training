class WelcomePageBody{
    doMoreText = ('.hero-descriptor_title.display-2', 'Do more!')

    descriptionBodyText = '.hero-descriptor_descr.lead'

    signUpButton = '.hero-descriptor_btn.btn.btn-primary'

    videoFrame = "//iframe[@class='hero-video_frame']"

    fuelExpenses = "div[class='col-12 col-lg-6'] img[alt='Instructions']"

    instructionsImage = "div[class='col-12 col-lg-6 mt-lg-0 mt-md-5 mt-sm-4 mt-3'] img[alt='Instructions']"

    logFuelExpenses = "div[class='col-12 col-lg-6'] p[class='about-block_title h2']"

    instructionsAndManuals = "div[class='col-12 col-lg-6 mt-lg-0 mt-md-5 mt-sm-4 mt-3'] p[class='about-block_title h2']"

    fuelExpensesDescription = "div[class='col-12 col-lg-6'] p[class='about-block_descr lead']"

    instructionsAndManualsDescription = "div[class='col-12 col-lg-6 mt-lg-0 mt-md-5 mt-sm-4 mt-3'] p[class='about-block_descr lead']"

    descriptionBodyTextPlaceholder = 'With the help of the Hillel auto project, you will have the opportunity to get hands-on experience in manual testing.'

    signUpButtonText = 'Sign up'

    instructionsAndManualsText = 'Instructions and manuals'

    instructionsAndManualsDescriptionText = 'Watch over 100 instructions and repair your car yourself.'

    logFuelExpensesText = 'Keep track of your replacement schedule and plan your vehicle maintenance expenses in advance.'

    getDoMoreText(){
        return this.doMoreText
    }

    getDescriptionBodyText(){
        return this.descriptionBodyText
    }

    getSignUpButton(){
        return this.signUpButton
    }

    getVideoFrame(){
        return this.videoFrame
    }

    getFuelExpenses(){
        return this.fuelExpenses
    }

    getInstructionsImage(){
        return this.instructionsImage
    }

    getLogFuelExpenses(){
        return this.logFuelExpenses
    }

    getInstructionsAndManuals(){
        return this.instructionsAndManuals
    }

    getFuelExpensesDescription(){
        return this.fuelExpensesDescription
    }

    getInstructionsAndManualsDescription(){
        return this.instructionsAndManualsDescription
    }
}

const welcomePageBody = new WelcomePageBody()
export default welcomePageBody