describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const specialInput = () => cy.get('input[id=special-text]')
    const submit= () => cy.get('button[id="order-button"')

    it('Can type in the inputs', () => {
        nameInput()
            .should('have.value', '')
            .type('Hey! lets see!')
            .should('have.value', 'Hey! lets see!')
        emailInput()
            .should('have.value', '')
            .type('Hey! lets see!')
            .should('have.value', 'Hey! lets see!')
        specialInput()
            .should('have.value', '')
            .type('Hey! lets see!')
            .should('have.value', 'Hey! lets see!')
    })

    it('The submit button enables when required inputs are filled out', () => {
        nameInput().type('NeNe')
        emailInput().type('have fun')
        specialInput().type('secret')
        submit().should('not.be.disabled')
    })

    it('The submit button enables when required inputs are filled out', () => {
        nameInput().type('NeNe')
        emailInput().type('have fun')
        specialInput().type('secret')
        submit().should('not.be.disabled')
    })








})