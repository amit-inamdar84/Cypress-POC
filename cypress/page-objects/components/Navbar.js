export default class Navbar{
    static clickOnLogo(){
        cy.get('.brand').click();
    }

    static search(text){
        cy.get('#searchTerm').type(text,'{enter}');
    }

    static displaySignInButton(){
        cy.isVisible('#signin_button');
    }

    static clickSignIn(){
        cy.get('#signin_button').click();
    }

    static clickLogout(){
        cy.contains('username ').click();
        cy.get('#logout_link').click();
    }
}