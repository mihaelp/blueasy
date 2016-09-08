$(document).ready(function() {

	$(".c-hamburger").click(function() {
		$( ".hidden-menu" ).toggleClass( "on" );
	});

	$("#portfolio_grid").mixItUp({
		load: {
  	sort: 'order:asc'
  },
	animation: {
    effects: 'fade rotateZ(-180deg)',
    duration: 700
  },
  selectors: {
    target: '.mix',
    filter: '.filter'
  }
  });

	$(".portfolio-menu .menu li p").click(function() {
		$(".portfolio-menu .menu li p").removeClass("active");
		$(this).addClass("active");
	});

	$(".dropdown-toggle").dropdown("toggle");
	$(".dropdown-toggle").dropdown("toggle");
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {

			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

});
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();
