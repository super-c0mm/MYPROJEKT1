window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs_item"),
        playBtn = document.querySelector("#playVideo"),
        video = document.querySelector("#video");
    playBtn.addEventListener('click', function(){
            video.play()
            video.setAttribute('controls', 'controls');
            playBtn.style.display = "none";
    });
    video.addEventListener('ended', function(){
        this.src= this.src;
        playBtn.style.display ="block";
        video.removeAttribute('controls');
    });
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs_item_active")) {
                    otherItem.classList.remove("tabs_item_active");
                }
            })
            elem.classList.add("tabs_item_active")
        });
    });
    $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<div class="carousel_arrow carousel_prev"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="carousel_arrow carousel_next"><i class="fas fa-chevron-right"></i></div>'
});
$('#buyNowBtn').on('click', popupOpen);
$('#buyTryBtn').on('click', popupOpen);
$('.popup_close').on('click', ()=> {
    $('.popup').removeClass('popup_active');
    $('body').css('overflow', 'visible');
});
function popupOpen(){
    $('.popup').addClass('popup_active');
    $('.popup_done').hide();
    $('.popup_wrap').show();
    $('body').css('overflow', 'hidden');
}
$("a[href*=#]").on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 777);
		e.preventDefault();
		return false;
	});
    $('.form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "form.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('form').trigger('reset');
            $('.popup').addClass('popup_active');
            $('.popup_wrap').hide();
            $('.popup_done').show();
            $('.popup_close').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: '<div class="carousel_arrow carousel_prev"><i class="fas fa-chevron-left"></i></div>',
            nextArrow: '<div class="carousel_arrow carousel_next"><i class="fas fa-chevron-right"></i></div>'
        });
        });
        return false;
    });
});
