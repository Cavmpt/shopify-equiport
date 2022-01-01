(function ($) {
	var halo = {
	    initBrandsSlider: function() {
	        var brandsSlider = $('[data-brands-slider]');

	        brandsSlider.each(function () {
	            var self = $(this);

	            if (self.not('.slick-initialized')) {
	                self.slick({
	                    slidesToShow: self.data('rows'),
	                    slidesToScroll: 1,
	                    get dots() {
                            if (window.layout_style == 'layout_style_suppermarket') {
                                return this.dots = true; 
                            } else {
                                return this.dots = false; 
                            }
                        },
	                    infinite: false,
	                    speed: 800,
	                    get nextArrow() {
                            if ((window.layout_style == 'layout_style_1170') || (window.layout_style == 'layout_style_flower')) {
                                return this.nextArrow = '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>';
                            } else if ((window.layout_style == 'layout_style_fullwidth') || (window.layout_style == 'layout_style_suppermarket') || (window.layout_style == 'layout_style_surfup')){
                                return this.nextArrow = '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>';
                            }
                            else {
                                return this.nextArrow = '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>';
                            }
                        },
                        get prevArrow() {
                            if ((window.layout_style == 'layout_style_1170') || (window.layout_style == 'layout_style_flower')) {
                                return this.prevArrow = '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>';
                            } else if ((window.layout_style == 'layout_style_fullwidth') || (window.layout_style == 'layout_style_suppermarket') || (window.layout_style == 'layout_style_surfup')){
                                return this.prevArrow = '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>';
                            } 
                            else {
                                return this.prevArrow = '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>';
                            }
                        },
	                    responsive: [{
	                            breakpoint: 1200,
	                            settings: {
	                                slidesToShow: 4,
	                                slidesToScroll: 4,
	                                arrows: false,
	                                get arrows() {
			                            if (window.layout_style == 'layout_style_suppermarket') {
			                                return this.arrows = false; 
			                            } else {
			                                return this.arrows = true; 
			                            }
			                        },
	                            }
	                        },
	                        {
	                            breakpoint: 992,
	                            settings: {
	                                slidesToShow: 3,
	                                slidesToScroll: 3,
	                                get arrows() {
			                            if (window.layout_style == 'layout_style_suppermarket') {
			                                return this.arrows = false; 
			                            } else {
			                                return this.arrows = true; 
			                            }
			                        },
	                            }
	                        },
	                        {
	                            breakpoint: 768,
	                            settings: {
	                                slidesToShow: 2,
	                                slidesToScroll: 2,
	                                get arrows() {
			                            if (window.layout_style == 'layout_style_suppermarket') {
			                                return this.arrows = false; 
			                            } else {
			                                return this.arrows = true; 
			                            }
			                        },
	                            }
	                        },
	                        {
	                            breakpoint: 480,
	                            settings: {
	                                get slidesToShow() {
	                                	if (window.layout_style == 'layout_style_suppermarket') {
			                                return this.slidesToShow = 2; 
			                            } else {
			                                return this.slidesToShow = 1; 
			                            }
	                                },
	                                get slidesToScroll() {
	                                	if (window.layout_style == 'layout_style_suppermarket') {
			                                return this.slidesToScroll = 2; 
			                            } else {
			                                return this.slidesToScroll = 1; 
			                            }
	                                },
	                                get arrows() {
			                            if (window.layout_style == 'layout_style_suppermarket') {
			                                return this.arrows = false; 
			                            } else {
			                                return this.arrows = true; 
			                            }
			                        },
	                            }
	                        }
	                    ]
	                });
	            }
	        });
	    }
	}
	halo.initBrandsSlider();
})(jQuery);
