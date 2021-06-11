import BasePage from "../pages/BasePage";

export default class AccountLinks extends BasePage{
    static verifyVisibilityOfAccountLinks(){
        cy.isVisible('.nav-tabs');
    }
    
    static clickAccountSummary(){
        cy.get('#account_summary_tab').click();
    }
}