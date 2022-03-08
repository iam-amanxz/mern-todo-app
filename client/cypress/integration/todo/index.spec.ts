context('E2E', () => {
  describe('Todo', () => {
    before(() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3333/api/todo',
      }).then((response) => {
        const todos = response.body
        todos.forEach((todo) => {
          cy.request({
            method: 'DELETE',
            url: `http://localhost:3333/api/todo/${todo._id}`,
          })
        })
      })
    })

    it('should add a new todo', () => {
      cy.visit('/')

      cy.get('[data-testid="title"]').type('Buy Milk')
      cy.get('.react-datepicker__input-container > input').click()
      cy.get('.react-datepicker__day--025').click()
      cy.get('[data-testid="create"]').click()

      cy.contains('Buy Milk @Mar 25, 2022').should('be.visible')
    })

    it('should mark a todo as completed', () => {
      cy.visit('/')

      cy.contains('Buy Milk @Mar 25, 2022').click()
      cy.contains('Buy Milk @Mar 25, 2022').should(
        'have.css',
        'text-decoration-line',
        'line-through',
      )
    })

    it('should mark a todo as not completed', () => {
      cy.visit('/')

      cy.contains('Buy Milk @Mar 25, 2022').click()
      cy.contains('Buy Milk @Mar 25, 2022').should(
        'not.have.css',
        'text-decoration-line',
        'line-through',
      )
    })

    it('should remove the todo', () => {
      cy.visit('/')

      cy.contains('Buy Milk @Mar 25, 2022').trigger('mouseover')
      cy.get('[data-testid="remove"]').click()
      cy.contains('Buy Milk @Mar 25, 2022').should('not.exist')
      cy.contains('No Todo found! Please add').should('exist')
    })

    it('should sort the todos', () => {
      cy.visit('/')

      cy.fixture('sort').then((data) => {
        data.todos.forEach((todo) => {
          cy.request({
            method: 'POST',
            url: `http://localhost:3333/api/todo/`,
            body: todo,
          })
        })
      })

      cy.reload()

      cy.get('[data-testid="titleText"]')
        .eq(0)
        .contains('todo 4')
        .should('exist')
      cy.get('[data-testid="titleText"]')
        .eq(1)
        .contains('todo 3')
        .should('exist')
      cy.get('[data-testid="titleText"]')
        .eq(2)
        .contains('todo 2')
        .should('exist')
      cy.get('[data-testid="titleText"]')
        .eq(3)
        .contains('todo 1')
        .should('exist')
    })

    after(() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3333/api/todo',
      }).then((response) => {
        const todos = response.body
        todos.forEach((todo) => {
          cy.request({
            method: 'DELETE',
            url: `http://localhost:3333/api/todo/${todo._id}`,
          })
        })
      })
    })
  })
})
