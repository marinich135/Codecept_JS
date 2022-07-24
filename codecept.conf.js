const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://automationteststore.com/index.php?rt=account/login',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login.js',
    shoppingCartPage: './pages/shoppingCart.js',
    wishListPage: './pages/wishList.js',



  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS',
  translation: 'ja-JP'
}
