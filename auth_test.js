const assert = require ('assert');
Feature('auth');
Before(({I})=> {
    I.amOnPage('/');
});

Scenario('Authorization', async ({ I,loginPage }) => {
    await loginPage.login('TestDemo1', 'test02072022');
    const name = await loginPage.getProfileName();
    assert.deepStrictEqual(name, 'Welcome back Test', 'Имя пользователя не равно Тест');


});
