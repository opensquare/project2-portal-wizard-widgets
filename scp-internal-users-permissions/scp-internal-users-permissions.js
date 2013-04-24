function Widget_scp_internal_users_permissions() {

	var _this = this;
	var channelGroupSelected = 'scp-internal-users.group-selected';

	this.onReadyExtend = function() {
		pw.addListenerToChannel(this, channelGroupSelected);
	};

	this.handleEvent = function(channel, event) {
		if (channel === channelGroupSelected) {
			_this.role = event.role;
			populatePermissions(event.role.id);
		}
	};

	function populatePermissions(groupId) {
		$.get('proxy/security/permission/all').done(function(permissionArray) {
			var $permissionsList = $('ul', _this.$widgetDiv);
			$permissionsList.empty();
			for (var i = 0; i < permissionArray.length; i++) {
				var permissionId = permissionArray[i].id;
				var $listItem = $('<li>' + permissionArray[i].name + '<input type="checkbox"' + (hasPermissionFromRole(permissionId) ? ' checked="checked"' : '')  + '"></li>');
				$listItem.data('id', permissionId);
				$permissionsList.append($listItem);
			}
		});
	}

	function hasPermissionFromRole(permissionId) {
		for (var i = 0; i < _this.role.permissions.length; i++) {
			var permission = _this.role.permissions[i];
			if (permission.id == permissionId) {
				return true;
			}
		}
		return false;
	}

}