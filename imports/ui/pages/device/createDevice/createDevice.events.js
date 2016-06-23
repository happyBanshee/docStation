import {Meteor} from 'meteor/meteor';

Template.createDevice.events({
    'submit #createDevice': function(event){
        event.preventDefault();
        var device = {
            name: event.target.name.value,
            os: jQuery(event.target).find("#os input:checked").val(),
            version: event.target.version.value,
            type: jQuery(event.target).find("#type input:checked").val(),
            office: event.target.office.value
        };
        Devices.insert(device);
    }
});