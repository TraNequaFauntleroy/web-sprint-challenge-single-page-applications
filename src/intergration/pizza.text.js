describe('Pizza App', () => {
    beforeEach(()=>{
        crypto.visit('https://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const specialInput = () => cy.get('input[id=special-text]')
    const sizeInput = () => cy.get('input[name=size]')
    const submit= () => cy.get('button[id="order-button"')

    it('Sanity check to make sure that tests work', () => {
        // 'it' keyword is a test
        //'expect is an assertion - the indiviual parts that make up the test
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({}) // equal ie ===
        expect({}).to.eql({}) // eql ie ==
    }) 

    it('Can type in the inputs', () => {
        nameInput()
            .should('have.value', '')
            .type('Hey! lets see!')
            .should('have.value', 'Hey! lets see!')
        specialInput()
            .should('have.value', '')
            .type('Hey! lets see!')
            .should('have.value', 'Hey! lets see!')
    })

    it('The submit button enables when text input is filled out', () => {
        nameInput().type('NeNe')
        submit().should('not.be.disabled')
    })

})