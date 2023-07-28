function mainFunction() {

    return {
        username: "",
        password: "",
        login: false,
        logout: true,
        account: false,
        classification: false,
        segmentation: false,
        image3D: false,
        information: false,
        augmentation: false,
        homePage: true,
        toggle:false,

        LoggingOut(){
            this.logout = true;
            this.login = false;
        },

        authentication() {
            this.login = true;
            this.logout = false;

            localStorage['username'] = this.username;
            localStorage['password'] = this.password;          
        },

        openAccount() {
            this.account = true;
            this.closeSection('account');
        },

        openClassification() {
            this.classification = true;
            this.closeSection('classification');
        },

        openSegmentation() {
            this.segmentation = true;
            this.closeSection('segmentation');
        },

        open3D() {
            this.image3D = true;
            this.closeSection('image3D');

        },

        openInformation() {
            this.information = true;
            this.closeSection('information');
        },

        openAugmentation() {
            this.augmentation = true;
            this.closeSection('augmentation');
        },

        openHome(currentSection){
            this.homePage = true;
            if(currentSection == "account"){               
                this.account = false;
            }else if(currentSection == "classification"){
                this.classification = false;
            }else if(currentSection == "segmentation"){
                this.segmentation = false;
            }else if(currentSection == "image3D"){
                this.image3D = false;
            }else if(currentSection == "information"){
                this.information = false;
            }else if(currentSection == "augmentation"){
                this.augmentation = false;
            }else{
                console.log('section could not be found')
            }
        },

        closeSection(openSection){
            if(openSection == "account"){               
                this.segmentation = false;
                this.classification = false;
                this.image3D = false;
                this.information = false;
                this.homePage = false;
                this.augmentation = false;
            }else if(openSection == "classification"){
                this.segmentation = false;
                this.account = false;
                this.image3D = false;
                this.information = false;
                this.homePage = false;
                this.augmentation = false;
            }else if(openSection == "segmentation"){
                this.classification = false;
                this.account = false;
                this.image3D = false;
                this.information = false;
                this.homePage = false;
                this.augmentation = false;
            }else if(openSection == "image3D"){
                this.segmentation = false;
                this.account = false;
                this.classification = false;
                this.information = false;
                this.homePage = false;
                this.augmentation = false;
            }else if(openSection == "information"){
                this.segmentation = false;
                this.account = false;
                this.image3D = false;
                this.image3D = false;
                this.homePage = false;
                this.augmentation = false;
            }else if(openSection == "augmentation"){
                this.segmentation = false;
                this.account = false;
                this.image3D = false;
                this.information = false;
                this.homePage = false;
                this.classification = false;
            }else{
                console.log('section could not be found')
            }

        }

    };

}