const assert = require ('assert');
Feature('addToCart');
Before(({I})=> {
    I.amOnPage('/');
});

Scenario('Add Product to Cart', async ({ I,loginPage,shoppingCartPage }) => {
    await loginPage.login('TestDemo1', 'test02072022');
    await shoppingCartPage.searchProduct('New French With Ease');
    await shoppingCartPage.addToCart();
    const name = await shoppingCartPage.getProductNameInShoppingCart();
    assert.deepStrictEqual(name, 'New French With Ease (1 book + 1 mp3 CD)', 'В корзине неверный товар');
    const name1 = await shoppingCartPage.getProductPriceInCart();
    assert.deepStrictEqual(name1,'$85.00', 'В корзине товар с другой ценой');

});
