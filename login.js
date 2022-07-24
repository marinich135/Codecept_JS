const { I } = inject();

module.exports = {
    fields: {
        username: '#loginFrm_loginname',
        password: '#loginFrm_password',
        profileName: '#loginFrm_loginname',

    },
    button: {login: '.col-sm-6 > .loginbox > #loginFrm > fieldset > .btn'},

    async login(email, password) {
        I.click(this.fields.username);
        I.fillField(this.fields.username, email);
        I.click(this.fields.password);
        I.fillField(this.fields.password, password);
        I.click(this.button.login);
    },
    async getProfileName () {
        const text = await I.grabTextFrom(this.fields.profileName);
        return text;

        }

}
