import BasePage from "../pages/BasePage";

export default class Menubar extends BasePage{
    static clickAndVerifyHomePageLink(){
        cy.get('.navbar-brand').click();
        cy.url().should('include' , 'https://example.cypress.io/');
    }

    static clickAndVerifyCommandsMenuItem(){
        cy.get('[data-toggle ="dropdown"]').click();
        cy.fixture('menuitems.json').then(data => {
            data.forEach(element => {
                cy.get('.dropdown-menu').should('contain' , element.item); 
            });
            //cy.get('.dropdown-menu').should('contain' , data[0].item1);
            //cy.get('.dropdown-menu').should('contain' , data[1].item2);
        })
    }

    static clickAndVerifyUtilitiesMenuItem(){
        cy.get('#navbar').within(() => {
            cy.contains('Utilities').click();
        })
        cy.url().should('include' , 'https://example.cypress.io/utilities');
    }

    static clickAndVerifyCypressAPIMenuItem(){
        cy.get('#navbar').within(() => {
            cy.contains('Cypress API').click();
        })
        cy.url().should('include' , 'https://example.cypress.io/cypress-api');
    }

    static clickAndVerifyGithubMenuItem(){
        cy.contains('GitHub').click();
        cy.url().should('include' , 'https://github.com/cypress-io/cypress-example-kitchensink');
        cy.go('back');
        cy.url().should('include' , 'https://example.cypress.io/cypress-api');

    }

}