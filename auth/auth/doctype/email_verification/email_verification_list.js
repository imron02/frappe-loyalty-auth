// Copyright (c) 2024, Imron Rosdiana and contributors
// For license information, please see license.txt

frappe.listview_settings['Email Verification'] = {
	get_indicator: function (doc) {
		if (doc.verified_time) {
			return [__('Active'), 'blue', 'verified_time,!=,null'];
		}
		
		return [__('Inactive'), 'blue', 'verified_time,=,null'];
  }
}
