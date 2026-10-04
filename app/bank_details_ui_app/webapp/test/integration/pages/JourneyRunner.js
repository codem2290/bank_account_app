sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/ui/bank/bankdetailsuiapp/test/integration/pages/BanksList.gen",
	"com/ui/bank/bankdetailsuiapp/test/integration/pages/BanksObjectPage.gen"
], function (JourneyRunner, BanksListGenerated, BanksObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/ui/bank/bankdetailsuiapp') + '/test/flp.html#app-preview',
        pages: {
			onTheBanksListGenerated: BanksListGenerated,
			onTheBanksObjectPageGenerated: BanksObjectPageGenerated
        },
        async: true
    });

    return runner;
});

