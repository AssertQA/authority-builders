export class HomePage {


    /**
     * Methods
     */

    visit() {
        cy.visit('www.google.com')
    }
  }
  
  export const homePage = new HomePage();