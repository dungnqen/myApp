var IvyLanguage = new function() {
	this.messages = {};
    this.get = function(category, message_id, original_message) {
        try {
            var str = IvyLanguage.messages[category][message_id];
            if(str !== undefined) { return str; }
        } catch(error) { }
        return original_message;
    };
};