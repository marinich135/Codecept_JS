const { I } = inject();

module.exports = {
    fields: {
        filter: '#filter_keyword',
        nameProduct: '.fixed > .prdocutname',
        name: "//div[@class='container-fluid cart-info product-list']//table[@class='table table-striped table-bordered']//tr[position() = 2]//td[2]//a",
        unitPrice: "//div[@class='container-fluid cart-info product-list']//table[@class='table table-striped table-bordered']//tr[position() = 2]//td[4]"


    },
    button: {
        search: '.button-in-search',
        addToCartButton: '.fa-cart-plus',
    },
    async searchProduct(productName){
        I.click(this.fields.filter);
        I.fillField(this.fields.filter, productName);
        I.click(this.button.search);
    },

    async getProductNameInShoppingCart () {
        const text = await I.grabTextFrom(this.fields.nameProduct);
        return text;

    },
    async addToCart () {
        I.click(this.button.addToCartButton);

    },
    async getProductNameInCart () {
        const text = await I.grabTextFrom(this.fields.name);
        return text;

    },
    async getProductPriceInCart () {
        const text = await I.grabTextFrom(this.fields.unitPrice);
        return text;

    },




}
