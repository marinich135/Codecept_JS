const assert = require ('assert');
Feature('wishList');
Before(({I})=> {
    I.amOnPage('/');
});

Scenario('Add Product to Wishlist', async ({ I,loginPage,wishListPage }) => {
    await loginPage.login('TestDemo1', 'test02072022');
    await wishListPage.addToWishList("Gucci Guilty");
    await wishListPage.goToWishListPage();
    const name = await wishListPage.getProductNameInWishList();
    assert.deepStrictEqual(name, 'Gucci Guilty','В виш листе неверный товар');
    const name1 = await wishListPage.getProductModelInWishList();
    assert.deepStrictEqual(name1,'PRF00269','В виш листе товар другой модели');

});
Scenario('Remove Product from Wishlist', async ({ I,loginPage,wishListPage }) => {
    await loginPage.login('TestDemo1', 'test02072022');
    await wishListPage.goToWishListPage();
    await wishListPage.removeProduct();
    await wishListPage.goToWishListPage();
    const name = await wishListPage.getEmptyWishList();
    assert.deepStrictEqual(name, 'Wish list is empty', 'В Wish list остался товар');

});
