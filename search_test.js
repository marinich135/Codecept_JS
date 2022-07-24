const assert = require ('assert');
Feature('search');
Before(({I})=> {
    I.amOnPage('/');
});

Scenario('Search Product', async ({ I,loginPage,shoppingCartPage }) => {
    await loginPage.login('TestDemo1', 'test02072022');
    await shoppingCartPage.searchProduct('shampoo');
    const name = await shoppingCartPage.getProductNameInShoppingCart();
    assert.deepStrictEqual(name, 'Curls to straight Shampoo', 'Название шампуня не совпадает с искомым');

});
