import {url_example_cypress} from '../../../../config';
import Menubar from '../../../../cypress/page-objects/components/Menubar';
import KitchenSinkHomePage from '../../../../cypress/page-objects/pages/KitchenSinkHomePage';

describe('Banner text/color verification tests', () => {
    before(() => {
        cy.visit(url_example_cypress);
    })

    it('Banner should contain the background color #00bf88', () => {
        KitchenSinkHomePage.verifyBannerBackgroundColor();
    })

    it('Banner should contain required text as header', () => {
        KitchenSinkHomePage.verifyBannerHeaderText();
    })
})