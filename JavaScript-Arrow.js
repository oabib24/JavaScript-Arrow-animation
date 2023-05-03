jQuery("#top-hero .fl-col-content.fl-node-content").append('<div class="btn-more-wr"><p>FIND MORE</p><span id="arrow-down" class="arrow-down-btn bounce"><img data-v-600c0352="" src="https://robsonhomes.com/themes/robson/assets/static/img/arrow_desktop.77744e9.svg"></span></div>')

var scrollTo = jQuery("#top-hero").outerHeight()

jQuery("#arrow-down").click(function () {
	setTimeout(() => jQuery('html, body').animate({ scrollTop: scrollTo }, 800), 500);
})