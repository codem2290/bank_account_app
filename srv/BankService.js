const cds = require('@sap/cds');

class BankAccountAPIService extends cds.ApplicationService {
    init() {

        this.on('getAccountBalance', async (req) => {
            const { accountNo } = req.data;
            const query = `CALL "getAccountBalance"(iv_account_no=>?,ov_balance=>?)`;
            const response = await cds.run(query, [accountNo]);
            return response;
        });
        return super.init();
    }
}

module.exports = BankAccountAPIService