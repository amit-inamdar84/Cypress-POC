import BasePage from "../pages/BasePage";
import Menubar from '../components/Menubar';

export default class KitchenSinkHomePage extends BasePage{
    static verifyBannerBackgroundColor() {
        cy.verifyBackgroundColor('.banner','rgb(0, 191, 136)');
        //cy.get('.banner').should('have.css', 'background-color', 'rgb(0, 191, 136)');

    }

    static verifyBannerHeaderText(){
        cy.get('h1').should('contain' , 'Kitchen Sink');
        cy.contains('p' , 'This is an example app').should('contain' , 'This is an example app used to showcase Cypress.io testing. For a full reference of our documentation, go to docs.cypress.io')
    }

    static verifyCommandsSectionText(){
        cy.get('h2').filter(':contains("Commands")').should('contain' , 'Commands');
        cy.contains('p' , 'Commands drive your tests').should('contain' , 'Commands drive your tests in the browser like a real user would. They let you perform actions like typing, clicking, xhr requests, and can also assert things like "my button should be disabled".')
    }

    static verifyCommandsSubsectionLinks(){
        cy.get('.home-list>li>a').filter(':contains("Querying")').click();
        cy.url().should('include' , 'https://example.cypress.io/commands/querying');
        this.goBack();
    }

    static clickGetCommand(){
        /* cy.get('.home-list>li>ul>li>a').filter(':contains("get")').click();
        cy.url().should('include' , 'https://example.cypress.io/commands/querying');
        this.goBack(); */
        cy.get('body>:nth-child(4)>.row>.col-xs-12>.home-list>:nth-child(1)>ul>li>a').should('have.length' , 4);
        cy.get('body>:nth-child(4)>.row>.col-xs-12>.home-list>:nth-child(1)>ul>li').each(($el,index, $list) => {
            cy.wrap($el).within(() => {
                cy.get('a').should('have.attr', 'href');
            })
            //cy.url().should('include' , 'https://example.cypress.io/commands/querying');
            //Menubar.clickAndVerifyHomePageLink();
        })
    }
}