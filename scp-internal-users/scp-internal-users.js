function Widget_scp_internal_users() {

	var _this = this;

	this.onReadyExtend = function() {
		_this.$groupSelect = $('.usergroups', _this.$widgetDiv);

		_this.$groupSelect.change(function() {
			displaySelectedGroup();
		});

		populateGroups();
	};

	function populateGroups() {
		$.get('proxy/security/role/all').done(function(rolesArray) {
			_this.roles = rolesArray;
			_this.$groupSelect.empty();
			for (var i = 0; i < rolesArray.length; i++) {
				var $option = $('<option></option>').text(rolesArray[i].name).attr('value', rolesArray[i].id);
				_this.$groupSelect.append($option);
			}
			displaySelectedGroup();
		});
	}

	function displaySelectedGroup() {
		var selectedRoleId = $('option:selected', _this.$widgetDiv).attr('value');
		console.debug('selectedRoleId=' + selectedRoleId);
		pw.notifyChannelOfEvent('scp-internal-users.group-selected', {role:getRole(selectedRoleId)});
	}

	function getRole(roleId) {
		for (var i = 0; i < _this.roles.length; i++) {
			if (_this.roles[i].id == roleId) {
				return _this.roles[i];
			}
		}
		return null;
	}

}