import {Meteor} from 'meteor/meteor';
import {DEVICEOS} from '/imports/constants/deviceOS';
import {OFFICES} from '/imports/constants/offices';

Template.createDevice.rendered = function() {
    $(document).ready(function() {
        $('select').material_select();
    });
};

Template.createDevice.helpers({
    deviceOS: DEVICEOS,
    offices: OFFICES,
    capitalize: function(text){
        return text.charAt(0).toUpperCase() + text.slice(1);
    },
    devices: function(){
        return Devices.find({});
    }
});