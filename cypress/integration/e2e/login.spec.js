import { url,login_username,login_password } from '../../../config';
import Navbar from '../../page-objects/components/Navbar';
import LoginPage from '../../page-objects/pages/LoginPage';

describe('Login failed test', () => {
   before(() => {
       cy.visit(url);
       Navbar.clickSignIn();
   })   

   it('should login with invalid credentials', () => {
    LoginPage.login("invalid username","invalid password");
   })

   it('should display error message', () => {
    LoginPage.displayErrorMessage();
   })
})

describe('Login success test', () => {
    before(() => {
        cy.visit(url);
        Navbar.clickSignIn();
    })

    it('should login into application', () =>{
        LoginPage.login(login_username,login_password);
    })
})