import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback test using fixtures', () => {
   before(() => {
    FeedbackPage.load();
   })

   it('should submit feedback form', () => {
    FeedbackPage.submitFeedback();
   })
})