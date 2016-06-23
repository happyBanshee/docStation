import { ReactiveDict } from 'meteor/reactive-dict';


Template.loginPage.onCreated(function loginOnCreated(){
    this.state = new ReactiveDict();
    this.state.set("isCreateAccount", false);
});

Template.loginPage.helpers({
    createAccount: function(){
        const instance = Template.instance();
        return instance.state.get("isCreateAccount");
    },
    tempLoginData: function(){
        const instance = Template.instance();
        var tempData = instance.state.get("tempLoginData");
        return tempData;
    }
});