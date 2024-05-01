describe("ProiectLogin", () => {
    
    it("WrongUserPass", () => {
        cy.visit("https://grav-sport.ro/");
        cy.get('.c-header__col-mobile-buttons > .c-header__button-link--account > .ip-user').click();
        cy.get('#username').type("Gianni123");
        cy.get('#password').type("pristavu123");
        cy.get('.c-login__login-row > .c-button').click();
        cy.get('.woocommerce-notice').should("exist");
    })
})

describe("ProiectLogin", () => {

    it("CorrectUserPass", () => {
        cy.visit("https://grav-sport.ro/");
        cy.get('.c-header__col-mobile-buttons > .c-header__button-link--account > .ip-user').click();
        cy.get('#username').type("gianni.pristavu@gmail.com");
        cy.get('#password').type("Gianni123!");
        cy.get('.c-login__login-row > .c-button').click();
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > .c-account__navigation-link').should("exist");
    })
})

describe("ProiectLogin", () => {

    it("Logout", () => {
        cy.visit("https://grav-sport.ro/");
        cy.get('.c-header__col-mobile-buttons > .c-header__button-link--account > .ip-user').click();
        cy.get('#username').type("gianni.pristavu@gmail.com");
        cy.get('#password').type("Gianni123!");
        cy.get('.c-login__login-row > .c-button').click();
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > .c-account__navigation-link').click();
        cy.get('.js-login-form > .c-login__header').should("exist");
    })
})

describe("ProiectLogin", () => {

    it("SidePanel", () => {
        cy.visit("https://grav-sport.ro/");
        cy.get('.ip-hamburger_menu').click();
        cy.get('#menu-item-21').should('exist');
        cy.get('.c-header__menu-buttons > .h-close-button > .ip-close-rect').click();
        cy.get('.c-button').should('exist');
    })
})

describe("ProiectLogin", () => {

    it("AddtoCart", () => {
        cy.visit("https://grav-sport.ro/");
        cy.get('.ip-hamburger_menu').click();
        cy.get('#menu-item-23 > a').click();
        cy.get('#pa_marime').select('40');
        cy.get('.single_add_to_cart_button').click();
        cy.get('.c-shop-sidebar__content > .widget_shopping_cart_content > .woocommerce-mini-cart > .woocommerce-mini-cart-item > .c-product-list-widget__wrap').should('exist');
        cy.get('.c-shop-sidebar__content > .widget_shopping_cart_content > .woocommerce-mini-cart > .woocommerce-mini-cart-item > .c-product-list-widget__wrap > .c-product-list-widget__remove > .ip-close-small').click();
        cy.get('.c-shop-sidebar__content > .widget_shopping_cart_content > .c-product-list-widget__empty').should('exist');

    })
})

describe("ProiectLogin", () => {

    it("order", () => {
        cy.visit("https://grav-sport.ro/");
        cy.get('.ip-hamburger_menu').click();
        cy.get('#menu-item-23 > a').click();
        cy.get('#pa_marime').select('40');
        cy.get('.c-product__buy-now').click();
        cy.get('#place_order').should('exist');
    })
})

describe("ProiectLogin", () => {

    it("products", () => {
        cy.visit("https://grav-sport.ro/");
        cy.get('.c-button').click();
        cy.get('.c-product__title').should('exist');
        cy.get('.c-product__short-description > :nth-child(1)').should('exist');
        cy.get('.c-header__row > .c-header__logo > .c-header__logo-link > .c-header__logo-img').click();
        cy.get('.c-button').should('exist');
    })
})