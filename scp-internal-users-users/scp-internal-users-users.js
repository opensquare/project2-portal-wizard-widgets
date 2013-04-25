function Widget_scp_internal_users_users() {

	var _this = this;
	var channelUsersLoaded = 'scp-internal-users.users-loaded';
	var channelGroupSelected = 'scp-internal-users.group-selected';

	this.onReadyExtend = function() {
		_this.$ul = $('ul', _this.$widgetDiv);
		pw.addListenerToChannel(this, channelUsersLoaded);
		pw.addListenerToChannel(this, channelGroupSelected);
	};

	this.handleEvent = function(channel, event) {
		if (channel === channelUsersLoaded) {
			_this.users = event.users;
			refreshDisplayedUsers();
		} else if (channel == channelGroupSelected) {
			_this.role = event.role;
			refreshDisplayedUsers();
		}
	};

	function refreshDisplayedUsers() {
		if (_this.role !== undefined && _this.users !== undefined) {
			_this.$ul.empty();
			for (var i = 0; i < _this.users.length; i++) {
				var user = _this.users[i];
				if (doesUserHaveRole(user, _this.role)) {
					var $li = $('<li>' + user.displayName + '</li>');
					_this.$ul.append($li);
				}
			}
		}
	}

	function doesUserHaveRole(user, role) {
		for (var i = 0; i < user.roles.length; i++) {
			if (user.roles[i].id == role.id) {
				return true;
			}
		}
		return false;
	}
}