/* 
* Function to switch face on browser resize *
*/
$.fn.resizeFace = function() { 

	$(window).resize(function() {

	  	// Show large face
	  	if($(window).width() >= 1140) {
	  		
	  		$('#designer-img').css({'opacity':'1'});
	  		$('#coder-img').css({'opacity':'1'});
	  		$('#designer-bg').css({'opacity':'1'});
	  		$('#coder-bg').css({'opacity':'1'});
	  		$('#designer').css({'opacity':'1'});
	  		$('#coder').css({'opacity':'1'});

	  	} else { // Show smaller face image

	  		$('#face-img').css({'opacity':'1'});
	  		$('#designer').css({'opacity':'1'});
	  		$('#coder').css({'opacity':'1'});
	  	}

	});
};

/* 
* Function to animate Face Wrapper
*/
$.fn.animateHome = function() { 

	// only animate for large desktop browsers
	if($(window).width() >= 1140){

	      $('#content').animate({'opacity':'1'}, 500, 'easeOutExpo');
	      $('#designer-img').css({'left':'-500px'}).stop().animate({'opacity':'1', 'left':'100px'}, 1000, 'easeOutExpo');
	      $('#coder-img').css({'right':'-500px'}).stop().animate({'opacity':'1', 'right':'100px'}, 1000, 'easeOutExpo');
	      $('#designer-bg').css({'left':'-500px'}).stop().animate({'opacity':'1', 'left':'100px'}, 1500, 'easeOutBack');
	      $('#coder-bg').css({'right':'-500px'}).stop().animate({'opacity':'1', 'right':'100px'}, 1500, 'easeOutBack');
	      $('#designer').delay(1500).animate({'opacity':'1'}, 500, 'easeOutExpo');
	      $('#coder').delay(1500).animate({'opacity':'1'}, 500, 'easeOutExpo', function(){ animateFace(); });

	}else{
	    
	    $('#content').animate({'opacity':'1'}, 500, 'easeOutExpo');
	    $('#face-img').animate({'opacity':'1'}, 2000, 'easeOutExpo');
	    $('#designer').delay(1000).animate({'opacity':'1'}, 500, 'easeOutExpo');
	   // $('#coder').delay(1000).animate({'opacity':'1'}, 500, 'easeOutExpo', function(){ animateContent(); });

	}
}; 


/* 
* Function to animate face
*/
function animateFace() {

	var designerImg 	= $('#designer-img');
	var coderImg 		= $('#coder-img');
	var designerHover	= $('#designer');
	var coderHover		= $('#coder');
	var designerDesc	= $('#designer-desc');
	var coderDesc		= $('#coder-desc');	
	var designerArrow	= $('#designer-arrow');
	var coderArrow		= $('#coder-arrow');		
	var designerBg		= $('#designer-bg');
	var coderBg			= $('#coder-bg');
	var face 			= $('#face');
	var section 		= $('#section');
	var duration 		= 500;
	var mouseX = 0;
	var relMouseX = 520;
	var xp = 520;
	frameRate =  30;
	timeInterval = Math.round( 1000 / frameRate );	
	var loop;	
	// Firstly animate the bottom content onto the page
	//animateContent();
	
	section.mouseenter(function(e){
		// Get mouse position
		section.mousemove(function(e){

		   	// raw mouse position
		   	mouseX = e.pageX;

		   	// mouse position relative to face div
		   	relMouseX = mouseX - face.offset().left;

		});
		
		// Animate the face based on mouse movement
		loop = setInterval(function(){

			// zeno's paradox dampens the movement
			xp += (relMouseX - xp) / 12;

			designerImg.css({width:420 + (520 - xp) * 0.5, left: 100 + (520 - xp) * 0.1});
		    coderImg.css({width:420 + (xp - 520) * 0.5, right: 100 - (520 - xp) * 0.1});

		    designerBg.css({left: 100 + (520 - xp) * 0.05, opacity: ((1040 - xp)/520)});
		    coderBg.css({right:  100 + (xp - 520) * 0.05, opacity: (xp/520)});

		    designerDesc.css({opacity: ((1040 - xp)/520)});
		    coderDesc.css({opacity: (xp/520)});

		}, timeInterval );

	}).mouseleave(function(e){ 

		// reset the face to initial state
		clearInterval(loop);
		xp 			= 520;
		mouseX 		= 0;
		relMouseX 	= 520;

		designerImg.hoverFlow(e.type, {width: 420, left: 100}, duration, 'easeOutQuad');
		coderImg.hoverFlow(e.type, {width: 420, right: 100}, duration, 'easeOutQuad');
		coderDesc.hoverFlow(e.type, {opacity: 1}, duration, 'easeOutQuad');
		designerDesc.hoverFlow(e.type, {opacity: 1}, duration, 'easeOutQuad');
		coderBg.hoverFlow(e.type, {right:100, opacity: 1}, duration, 'easeOutQuad');
		designerBg.hoverFlow(e.type, {left:100, opacity: 1}, duration, 'easeOutQuad');

	}); 
	
};



/* Pie chart */
$(document).ready(function(){
     if ($(window).width() > 767) {
            window.scrollReveal = new scrollReveal({
                    reset: !1
                }),
                function() {
                    var t, e, n = window.requestAnimationFrame || function(t) {
                            setTimeout(t, 1e3 / 60)
                        },
                        i = [].slice.call(document.querySelectorAll(".layer")).map(function(t) {
                            var e = t.getBoundingClientRect();
                            return t.x = e.left, t.y = e.top, t.w = e.right - e.left, t.h = e.bottom - e.top, t.fX = t.getAttribute("data-force-x") || t.getAttribute("data-force") || 10, t.fY = t.getAttribute("data-force-y") || t.getAttribute("data-force") || 10, t
                        });
                    document.addEventListener("dragover", function(n) {
                            t = n.clientX, e = n.clientY
                        }, !1), document.addEventListener("mousemove", function(n) {
                            t = n.clientX, e = n.clientY
                        }, !1),
                        function o() {
                            if (t && e) {
                                var a = window.innerWidth,
                                    r = window.innerHeight,
                                    s = a / 2,
                                    c = r / 2,
                                    l = t - a / 2,
                                    u = r / 2 - e;
                                i.forEach(function(t) {
                                    var e = t.w / t.fX * (l / -s),
                                        n = t.h / t.fY * (u / c);
                                    t.style.transform = t.style["-webkit-transform"] = "translate(" + e + "px," + n + "px)"
                                })
                            }
                            n(o)
                        }()
                }(),
                function() {
                    function t() {
                        n.width = window.innerWidth, n.height = window.innerHeight, e()
                    }

                    function e() {
                        function t() {
                            v += .5;
                            var t = parseInt(v);
                            if (!(v > m.length - 2)) {
                                i.clearRect(0, 0, n.width, n.height), i.beginPath(), i.moveTo(m[t].x, m[t].y);
                                for (var e = t; e < m.length; e++) i.lineTo(m[e].x, m[e].y);
                                i.stroke()
                            }
                        }

                        function e() {
                            requestAnimationFrame(e), t()
                        }

                        function o(t) {
                            t.preventDefault(), t.stopPropagation(), c = parseInt(t.clientX - d), l = parseInt(t.clientY - f), m.length = 0, m.push({
                                x: c,
                                y: l
                            }), v = 0, p = !0
                        }

                        function a(t) {
                            t.preventDefault(), t.stopPropagation(), mouseX = parseInt(t.clientX - d), mouseY = parseInt(t.clientY - f), p = !1
                        }

                        function r(t) {
                            t.preventDefault(), t.stopPropagation(), mouseX = parseInt(t.clientX - d), mouseY = parseInt(t.clientY - f), p = !1
                        }

                        function s(t) {
                            p && (t.preventDefault(), t.stopPropagation(), mouseX = parseInt(t.clientX - d), mouseY = parseInt(t.clientY - f), m.push({
                                x: mouseX,
                                y: mouseY
                            }))
                        }
                        i.lineCap = "round", i.lineJoin = "round", i.lineWidth = 4, i.strokeStyle = "#fb3";
                        var c, l, u = $("#canvas"),
                            h = u.offset(),
                            d = h.left,
                            f = h.top,
                            p = (u.scrollLeft(), u.scrollTop(), !1),
                            m = [],
                            v = 0;
                        e(), $("#canvas").mousedown(function(t) {
                            o(t)
                        }), $("#canvas").mousemove(function(t) {
                            s(t)
                        }), $("#canvas").mouseup(function(t) {
                            a(t)
                        }), $("#canvas").mouseout(function(t) {
                            r(t)
                        })
                    }
                    var n = document.getElementById("canvas"),
                        i = n.getContext("2d");
                    window.addEventListener("resize", t, !1), t()
                }();
            var i = {
                init: function() {
                    this.diagram()
                },
                random: function(t, e) {
                    return Math.floor(Math.random() * (e - t + 1) + t)
                },
                diagram: function() {
                    var t = Raphael("diagram", 600, 600),
                        e = 73,
                        n = "Skills",
                        o = 250;
                    t.circle(300, 300, 85).attr({
                        stroke: "none",
                        fill: "#0099cc"
                    });
                    var a = t.text(300, 300, n).attr({
                        font: "16px Alegreya Sans",
                        fill: "#fff"
                    }).toFront();
                    t.customAttributes.arc = function(t, e, n) {
                        var o = 3.6 * t,
                            a = 360 == o ? 359.99 : o,
                            r = i.random(91, 240),
                            s = (r - a) * Math.PI / 180,
                            c = r * Math.PI / 180,
                            l = 300 + n * Math.cos(c),
                            u = 300 - n * Math.sin(c),
                            h = 300 + n * Math.cos(s),
                            d = 300 - n * Math.sin(s),
                            f = [
                                ["M", l, u],
                                ["A", n, n, 0, +(a > 180), 1, h, d]
                            ];
                        return {
                            path: f,
                            stroke: e
                        }
                    }, $(".get").find(".arc").each(function() {
                        var i = $(this),
                            r = i.find(".color").val(),
                            s = i.find(".percent").val(),
                            c = i.find(".text").text();
                        e += 30;
                        var l = t.path().attr({
                            arc: [s, r, e],
                            "stroke-width": 26
                        });
                        l.mouseover(function() {
                            this.animate({
                                "stroke-width": 50,
                                opacity: .75
                            }, 1e3, "elastic"), "VML" != Raphael.type && this.toFront(), a.stop().animate({
                                opacity: 0
                            }, o, ">", function() {
                                this.attr({
                                    text: c + "\n" + s + "%"
                                }).animate({
                                    opacity: 1
                                }, o, "<")
                            })
                        }).mouseout(function() {
                            this.stop().animate({
                                "stroke-width": 26,
                                opacity: 1
                            }, 4 * o, "elastic"), a.stop().animate({
                                opacity: 0
                            }, o, ">", function() {
                                a.attr({
                                    text: n
                                }).animate({
                                    opacity: 1
                                }, o, "<")
                            })
                        })
                    })
                }
            };
            $(function() {
                i.init()
            })
        }
})
/* Pie chart */

/* smooth scrall js */
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 1500, 'swing', function () {
            window.location.hash = target;
        });
        $(".menu.active .btn").click();
    });
});