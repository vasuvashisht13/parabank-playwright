import { Page, expect } from '@playwright/test';
import { RegisterPage } from './RegisterPage';
import { LoginPage } from './LoginPage';
import { OpenAccount } from './OpenAccount';
import { TransferFunds } from './TransferFunds';
import { BillPayment } from './BillPayment';
import { FindTransactions } from './FindTransactions';
import { UpdateInfo } from './UpdateInfo';
import { RequestLoan } from './RequestLoan';
import { LogoutPage } from './LogoutPage';



export class POManager {
    private registerPage: RegisterPage;
    private loginPage: LoginPage;
    private openAccount: OpenAccount;
    private transferFunds: TransferFunds;
    private billPayment: BillPayment;
    private findTransactions: FindTransactions;
    private updateInfo: UpdateInfo;
    private requestLoan: RequestLoan;
    private logout: LogoutPage;
   


    constructor(private page: Page) {
        // Initializing the page objects with the page passed to the constructor
        this.registerPage = new RegisterPage(page);
        this.loginPage = new LoginPage(page);
        this.openAccount = new OpenAccount(page);
        this.transferFunds = new TransferFunds(page);
        this.billPayment = new BillPayment(page);
        this.findTransactions = new FindTransactions(page);
        this.updateInfo = new UpdateInfo(page);
        this.requestLoan = new RequestLoan(page);
        this.logout = new LogoutPage(page);

    }

    // Getter methods to access page objects
    getRegisterPage(): RegisterPage {
        return this.registerPage;
    }

    getLoginPage(): LoginPage {
        return this.loginPage;
    }
    getOpenAccount(): OpenAccount {
        return this.openAccount;
    }

    gettransferFunds(): TransferFunds {
        return this.transferFunds;
    }

    getBillPayment(): BillPayment {
        return this.billPayment;
    }

    getFindTransactions(): FindTransactions {
        return this.findTransactions;
    }

    getUpdateInfo(): UpdateInfo {
        return this.updateInfo;
    }

    getRequestLoan(): RequestLoan {
        return this.requestLoan;
    }

    getlogout(): LogoutPage {
        return this.logout;
    }
}
