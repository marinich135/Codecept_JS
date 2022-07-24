const { I } = inject();

module.exports = {
    fields: {
        filter: '#filter_keyword',
        dropDownMenu: '#customernav > #customer_menu_top > .dropdown > .top > .menu_text',
        wishListCard: '.ct_padding_right > .nav-dash > li > a > .fa-star',
        nameWish: "//div[@class='container-fluid wishlist product-list']//table[@class='table table-striped table-bordered']//tr[position() = 2]//td[2]//a",
        unitModelWish:  "//div[@class='container-fluid wishlist product-list']//table[@class='table table-striped table-bordered']//tr[position() = 2]//td[3]",
        empty: '.contentpanel'

    },

    button: {
        search: '.button-in-search',
        addToWishList: '.fa-plus-square',
        remove: '.fa-trash-o'
    },
    async addToWishList(productName){
        I.click(this.fields.filter);
        I.fillField(this.fields.filter, productName);
        I.click(this.button.search);
        I.click(this.button.addToWishList);
    },
    async goToWishListPage(){
       I.click(this.fields.dropDownMenu);
       I.click(this.fields.wishListCard);
    },
    async getProductNameInWishList(){
        const text = await I.grabTextFrom(this.fields.nameWish);
        return text;
    },
    async getProductModelInWishList(){
        const text = await I.grabTextFrom(this.fields.unitModelWish);
        return text;
    },
    async removeProduct(){
       I.click(this.button.remove);
    },
    async getEmptyWishList(){
        const text = await I.grabTextFrom(this.fields.empty);
        return text;
    },

}
