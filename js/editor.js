(function() {
	tinymce.PluginManager.add('custom_link_class', function(editor, url) {
		// Add a button that opens a window
		editor.addButton('custom_link_class', {
			title: 'Insert/edit button link',
			icon: 'link',
			onclick: function() {
				// Open window
				editor.windowManager.open({
					title: 'Insert/edit button link',
					body: [
						{type: 'textbox', name: 'link_text', label: 'Link Text'},
						{type: 'textbox', name: 'url', label: 'URL'}
					],
					onsubmit: function(e) {
						// Insert content when the window form is submitted
						editor.insertContent('<a class="button" href="' + e.data.url + '">' + e.data.link_text + '</a>');
					}
				});
			}
		});
	});
})();
