$(function(){
	function createChatBtn(){
		//var title = $('.page-header').text().replace(/ /g,'');
        var add_element_button = $("<button />", {
            text: 'Chat with buyer',
            class: "btn btn-block btn-green",
            click: function() {window.location.href = "http://localhost:3000/"}
        });
        $("<i class='fa fa-comment'></i>").insertBefore()
        $(add_element_button).insertAfter( "#adreply_sidebar_btn" );
    }
    createChatBtn();
});