import {url_example_cypress} from '../../../../config';
import KitchenSinkHomePage from '../../../page-objects/pages/KitchenSinkHomePage';

describe('Tests to verify links and sub sections under Commands', () => {
    before(() => {
        cy.visit(url_example_cypress);
    })

    it('should contain commands header and expected text', () => {
        KitchenSinkHomePage.verifyCommandsSectionText();
    })

    it('test to verify subsection links under commands header and click on it', () => {
        KitchenSinkHomePage.verifyCommandsSubsectionLinks();
    })

    it.only('test to verify cy commands under Querying subsection and click on it', () => {
        KitchenSinkHomePage.clickGetCommand();
    })
})