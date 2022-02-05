import Application from "./application";
// import https from 'https'

export default class SettingsView {

    _application:Application;

    constructor(application:Application){
        this._application = application

        console.log('SettingsView.js: Created view')

        const backgrounds = [
            'linear-gradient(0deg, rgba(26,27,30,1) 0%, rgba(26,27,30,1) 50%, rgba(0,212,255,0) 100%), url(\'assets/images/background_1.jpg\')',
            // 'linear-gradient(0deg, rgba(26,27,30,1) 0%, rgba(26,27,30,1) 50%, rgba(0,212,255,0) 100%), url(\'assets/images/background_2.jpg\')',
            // 'linear-gradient(0deg, rgba(26,27,30,1) 0%, rgba(26,27,30,1) 50%, rgba(0,212,255,0) 100%), url(\'assets/images/background_3.jpg\')',
            // 'linear-gradient(0deg, rgba(26,27,30,1) 0%, rgba(26,27,30,1) 50%, rgba(0,212,255,0) 100%), url(\'assets/images/background_4.jpg\')',
        ]

        const settingsView = (<HTMLInputElement>document.getElementById('settingsView'))
        // settingsView.style.backgroundImage = "linear-gradient(0deg, rgba(26,27,30,1) 0%, rgba(26,27,30,1) 50%, rgba(0,212,255,0) 100%), url('assets/images/background_1.jpg')"
        // settingsView.style.backgroundImage = "linear-gradient(0deg, rgba(26,27,30,1) 0%, rgba(26,27,30,1) 50%, rgba(0,212,255,0) 100%), url('assets/images/background_2.jpg')"
        const randomSelect = backgrounds[Math.floor(Math.random()*backgrounds.length)];
        settingsView.style.backgroundImage = randomSelect

        // Load Regions
        const xCloudRegions = [
            {
              name: 'AustraliaEast',
              baseUri: 'https://eau.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'eau.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: -1
            },
            {
              name: 'AustraliaSouthEast',
              baseUri: 'https://seau.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'seau.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: -1
            },
            {
              name: 'BrazilSouth',
              baseUri: 'https://brs.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'brs.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: -1
            },
            {
              name: 'EastUS',
              baseUri: 'https://eus.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'eus.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: -1
            },
            {
              name: 'EastUS2',
              baseUri: 'https://eus2.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'eus2.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: -1
            },
            {
              name: 'JapanEast',
              baseUri: 'https://ejp.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'ejp.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: -1
            },
            {
              name: 'KoreaCentral',
              baseUri: 'https://ckr.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'ckr.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: -1
            },
            {
              name: 'NorthCentralUs',
              baseUri: 'https://ncus.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'ncus.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: -1
            },
            {
              name: 'SouthCentralUS',
              baseUri: 'https://scus.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'scus.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: -1
            },
            {
              name: 'UKSouth',
              baseUri: 'https://uks.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'uks.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: 0
            },
            {
              name: 'WestEurope',
              baseUri: 'https://weu.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'weu.gssv-fastlane-prod.xboxlive.com',
              isDefault: true,
              fallbackPriority: -1
            },
            {
              name: 'WestUS',
              baseUri: 'https://wus.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'wus.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: -1
            },
            {
              name: 'WestUS2',
              baseUri: 'https://wus2.gssv-play-prod.xboxlive.com',
              networkTestHostname: 'wus2.gssv-fastlane-prod.xboxlive.com',
              isDefault: false,
              fallbackPriority: -1
            }
          ]
        const selectInput = document.getElementById('settingsxCloudRegions')
        let selectHtml = ''
        for(const region in xCloudRegions){
            if(application._tokenStore._xCloudRegionHost === xCloudRegions[region].baseUri.substr(8)){
                selectHtml += '<option value="' + xCloudRegions[region].baseUri.substr(8) + '" selected>' + xCloudRegions[region].name + ': ' + xCloudRegions[region].baseUri + '</option>\n'
            } else {
                selectHtml += '<option value="' + xCloudRegions[region].baseUri.substr(8) + '">' + xCloudRegions[region].name + ': ' + xCloudRegions[region].baseUri + '</option>\n'
            }
        }

        selectInput.innerHTML = selectHtml

        selectInput.addEventListener('change', (event) => {
            console.log('Region changed:', (<HTMLSelectElement>event.target).value)
            const newRegion = (<HTMLSelectElement>event.target).value
            application._tokenStore._xCloudRegionHost = newRegion
        })

    }

    load(){
        return new Promise((resolve, reject) => {
            console.log('SettingsView.js: Loaded view')
            resolve(true)
        })
    }

    unload(){
        return new Promise((resolve, reject) => {
            console.log('SettingsView.js: Unloaded view')
            resolve(true)
        })
    }
}