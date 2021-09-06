import {url_example_cypress} from '../../../../config';
import Menubar from '../../../../cypress/page-objects/components/Menubar';

describe('Home page tests', () => {
    before(() => {
        cy.visit(url_example_cypress);

    })

    it('should be able to click on cypress.io link and load the same page again', () => {
        Menubar.clickAndVerifyHomePageLink();
    })

    it('should be able to click on Commands menu item and display all commands in drop down as sub menu', () => {
        Menubar.clickAndVerifyCommandsMenuItem();
    })

    it('should be able to click on utilities and navigate to utilities page', () => {
       Menubar.clickAndVerifyUtilitiesMenuItem();
    })

    it('should be able to click on Cypress API link and navigate to Cypress API page', () => {
        Menubar.clickAndVerifyCypressAPIMenuItem();
    })

    it('should be able to click on Github link and navigate to Github page', () => {
        Menubar.clickAndVerifyGithubMenuItem();
    })

   /*  it('should be able to click on Cypress API link and navigate to Cypress API page', () => {
        
    }) */
})