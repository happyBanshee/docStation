import {Meteor} from 'meteor/meteor';
import {Router} from 'meteor/iron:router';

Router.route('/device/:_id', function(){
    var device = Devices.findOne({_id: this.params._id});
    this.render('device',{data: device});
});

Router.route('/device',{
    template:"createDevice",
    name:'createDevice'
});

Router.route('/login',{
    template: 'loginPage',
    name:'loginPage'
});

Router.route('/',{
    template: 'dashboard',
    name: 'dashboard'
});
