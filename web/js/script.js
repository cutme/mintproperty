function masonryInit(){function e(){r<=640&&!0===i?(console.log("disable"),t.destroy(),n.each(function(){$(this).attr("style","")}),i=!1):r>567&&!1===i&&(t=new Masonry(o,a),i=!0,console.log("fire"))}var t,o=document.getElementById("masonry"),n=$(".c-grid__item"),i=!1,a={itemSelector:".c-grid__item",columnWidth:".c-grid__sizer",gutter:".gutter-sizer",percentPosition:!0},r=$(window).width();$(window).on("resize",function(){r=$(window).width(),e()}),e()}function triggerMasonry(){msnry?(msnry.layout(),mint.Helper.blazy()):mint.Helper.blazy()}!function(e,t,o,n,i){"use strict";o(t).ready(function(){n.Helper.cookies(),n.Helper.isMobile(),n.Helper.language(),n.Menu.init(),n.Helper.exist("#accordion")&&n.Accordion.init("#accordion"),n.Helper.exist("#contact-map")&&n.ContactMap.init(),n.Helper.exist("#filters")&&n.Filters.init(),n.Helper.exist("#homeSlider")&&n.Slider.init(),n.Helper.exist("#locationMap")&&n.LocationMap.init(),n.Helper.exist("#masonry")&&masonryInit(),n.Helper.exist("#offerCarousel")&&n.OfferCarousel.init(),n.Helper.exist("#offerContact")&&n.OfferContact.init(),n.Helper.exist("#questionForm")&&n.QuestionForm.init(),n.Helper.exist("#rentSale")&&n.Switcher.rentSale(),n.Helper.exist("#shortcuts")&&n.Accordion.init("#shortcuts"),n.Helper.exist("#shortcuts")&&n.Shortcuts.init(),n.Helper.exist("#viewType")&&n.Switcher.viewType(),n.Helper.exist(".b-lazy")&&n.Helper.blazy(),n.Helper.exist(".mfp-image")&&n.Magnific.images(),n.Helper.exist(".mfp-video")&&n.Magnific.video(),n.Helper.exist(".nice-select")&&n.Helper.nSelect(),n.Helper.exist(".c-top")&&n.Helper.fixTop()}),o(e).on("load",function(){n.Helper.iosFix()})}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a=n.Accordion=function(){};a.prototype.init=function(e){t.querySelector(".js-accNav");o(e).on("click",".js-accNav",function(t){t.preventDefault();var n=o(this),i=o(".js-accNav",e),a=o(".js-accContent",e);n.hasClass("is-active")?(i.removeClass("is-active"),a.slideUp()):(i.removeClass("is-active"),a.slideUp(),n.addClass("is-active"),n.next(a).slideDown())})},n.Accordion=new a}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a=n.ContactMap=function(){};a.prototype.init=function(){function i(){function i(e,t,o){this.latlng=e,this.args=o,this.setMap(t)}function a(){s=r.getCenter()}var r,s;(i.prototype=new google.maps.OverlayView).draw=function(){var e=this,o=this.div;o||(o=this.div=t.getElementById("pin"),void 0!==e.args.marker_id&&(o.dataset.marker_id=e.args.marker_id),this.getPanes().overlayImage.appendChild(o));var n=this.getProjection().fromLatLngToDivPixel(this.latlng);n&&(o.style.left=n.x-100+"px",o.style.top=n.y-70+"px",o.style.opacity=1)},i.prototype.remove=function(){this.div&&(this.div.parentNode.removeChild(this.div),this.div=null)},i.prototype.getPosition=function(){return this.latlng};var l=n.Helper.mapstyle(),c=(new google.maps.MarkerImage("https://www.roxxmedia.pl/wp-content/themes/roxxit/images/marker.png",null,new google.maps.Point(0,0)),{center:{lat:50.0559333,lng:19.9592909},zoom:17,mapTypeControl:!1,panControl:!1,streetViewControl:!1,zoomControl:!0,scrollwheel:!1,styles:l}),p=!1;r=new google.maps.Map(t.getElementById("map-canvas"),c);var d=new google.maps.LatLng(50.0559333,19.9592909);google.maps.event.addDomListener(r,"idle",function(){a()}),google.maps.event.addDomListener(e,"resize",function(){setTimeout(function(){r.setCenter(s),setTimeout(function(){o(e).width()<=768&&!1===p&&(r.panBy(0,0),p=!0)},1e3)},1)}),o(e).width()<=768&&!1===p&&(r.panBy(200,-100),p=!0),r.panBy(-200,0),new i(d,r,{marker_id:"123"})}o.getScript("https://www.google.com/jsapi",function(){google.load("maps","3.exp",{other_params:"key=AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY",callback:function(){i()}})})},n.ContactMap=new a}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a=n.Filters=function(){};a.prototype.init=function(){this.elements(),this.moreOptions()},a.prototype.moreOptions=function(){function i(){o(a).hasClass("is-expanded")&&(!1===n.Helper.isWindowSmallerThan(769)?(s.detach(),c.detach(),l.prepend(s),l.append(c)):(s.detach(),c.detach(),p.prepend(s),p.append(c)))}var a=t.getElementById("filters"),r=o(".js-moreOptions"),s=o(".js-offersNum"),l=o(".js-start"),c=o(".js-submit"),p=o(".js-end");r.on("click",function(e){e.preventDefault();var t=o(this),i=t.data("more"),r=t.data("less");t.toggleClass("is-opened"),o(a).toggleClass("is-expanded"),t.hasClass("is-opened")?(o("span",t).text(r),n.Helper.isWindowSmallerThan(640)&&(s.detach(),c.detach(),p.prepend(s),p.append(c))):(o("span",t).text(i),s.detach(),c.detach(),l.prepend(s),l.append(c))}),o(e).on("resize",function(){i()}),i()},a.prototype.ajax=function(){},a.prototype.destroy=function(){},a.prototype.elements=function(){n.Helper.exist("#bathrooms")&&function(){function e(){o(".num").text(s),o(a).val(s)}var n=t.getElementById("bathrooms"),i=o(".js-minus",n),a=t.getElementById("number_of_bathrooms"),r=o(".js-plus",n),s=(o(".num",n),1);i.on("click",function(t){t.preventDefault(),s>1&&(s--,e())}),r.on("click",function(t){t.preventDefault(),s++,e()})}(),n.Helper.exist("#slider-floor")&&function(){var e=t.getElementById("slider-floor"),n=o(e).parents(".c-filters__item").find(".min"),i=o(e).parents(".c-filters__item").find(".max");noUiSlider.create(e,{start:[0,5],connect:!0,step:1,range:{min:0,max:5},format:wNumb({decimals:0})}),e.noUiSlider.on("update",function(){var t=e.noUiSlider.get()[0],o=e.noUiSlider.get()[1];n.text(t),i.text(o),0===parseInt(t)&&n.text("Min"),5==parseInt(o)&&i.text("Max")})}(),n.Helper.exist("#slider-area")&&function(){var e=t.getElementById("slider-area"),n=o(e).parents(".c-filters__item").find(".min"),i=o(e).parents(".c-filters__item").find(".max");noUiSlider.create(e,{start:[0,80],connect:!0,range:{min:0,max:160},format:wNumb({decimals:3,thousand:".",postfix:" m2"})}),e.noUiSlider.on("update",function(){var t=e.noUiSlider.get()[0],o=e.noUiSlider.get()[1];n.text(t),i.text(o),0===parseInt(t)&&n.text("Min"),160==parseInt(o)&&i.text("Max")})}(),n.Helper.exist("#slider-price")&&function(){var e=t.getElementById("slider-price"),n=o(e).parents(".c-filters__item").find(".min"),i=o(e).parents(".c-filters__item").find(".max");noUiSlider.create(e,{start:[0,500],connect:!0,step:10,range:{min:0,max:500},format:wNumb({decimals:0,postfix:" (tys. zł)"})}),e.noUiSlider.on("update",function(){var t=e.noUiSlider.get()[0],o=e.noUiSlider.get()[1];n.text(t),i.text(o),0===parseInt(t)&&n.text("Min"),500==parseInt(o)&&i.text("Max")})}(),n.Helper.exist("#slider-rooms")&&function(){var e=t.getElementById("slider-rooms"),n=o(e).parents(".c-filters__item").find(".min"),i=o(e).parents(".c-filters__item").find(".max");noUiSlider.create(e,{start:[0,5],connect:!0,range:{min:1,max:10},format:wNumb({decimals:0})}),e.noUiSlider.on("update",function(){var t=e.noUiSlider.get()[0],o=e.noUiSlider.get()[1];n.text(t),i.text(o),10==parseInt(o)&&i.text("Max")})}()},n.Filters=new a}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";function a(){return[{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#d3d3d3"}]},{featureType:"transit",stylers:[{color:"#808080"},{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#b3b3b3"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"},{weight:1.8}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#d7d7d7"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ebebeb"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#a7a7a7"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#efefef"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#696969"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#737373"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#d6d6d6"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#dadada"}]}]}function r(){new Blazy({breakpoints:!1,success:function(e){setTimeout(function(){var t=e.parentNode.parentNode;t.className=t.className.replace(/\bis-hidden\b/,""),t.parentNode.className=t.parentNode.className.replace(/\bis-loading\b/,"")},200)}})}function s(){var e=t.getElementById("cookies"),n=o(".js-accept",e),i=o(".js-close",e);1!=Cookies.get("mintproperty-cookies")&&setTimeout(function(){o(e).removeClass("move-out")},2e3),n.on("click",function(t){t.preventDefault(),Cookies.set("mintproperty-cookies",1,{expires:356,path:"/"}),o(e).addClass("move-out")}),i.on("click",function(t){t.preventDefault(),o(e).addClass("move-out")})}function l(e){return o(e).length>0}function c(){var n=o(".c-top"),i=n.position(),a=t.getElementsByTagName("body"),r=o(".c-container");o(e).on("scroll",function(){o(a).scrollTop()>=i.top+40?(n.addClass("stay"),o(r).addClass("padding-top")):(n.removeClass("stay"),o(r).removeClass("padding-top"))})}function p(e,t){var n=o("body, html"),i=o(e).offset().top;n.animate({scrollTop:i+t},{easing:"easeOutCubic",duration:500})}function d(){function n(){return a=t.body.scrollHeight,r=e.innerHeight,a<=r}function i(){s.height(r)}var a=t.body.scrollHeight,r=e.innerHeight,s=o(".ios-height");navigator.userAgent.match(/(iPhone|iPod|iPad)/i)?(n()&&i(),e.addEventListener("orientationchange",function(){s.attr("style",""),n()&&i()},!1)):o("html").addClass("set-min-height")}function m(){/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))?o("html").addClass("mobile"):o("html").addClass("desktop")}function u(t){return e.innerWidth<parseInt(t,10)}function f(){o(t).on("change","#language",function(){var t=o("option:selected","#language").val();t&&(e.location=t)})}function g(){o(".nice-select").niceSelect()}n.Helper=new function(){return{cookies:s,exist:l,blazy:r,fixTop:c,goToTarget:p,iosFix:d,isMobile:m,isWindowSmallerThan:u,language:f,mapstyle:a,nSelect:g}}}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a=n.LocationMap=function(){};a.prototype.init=function(){function i(){function i(){s=r.getCenter()}function a(e,t,o){this.latlng=e,this.args=o,this.setMap(t)}var r,s,l=t.getElementById("locationMap"),c=o(l).data("lat"),p=o(l).data("lng"),d={center:{lat:c,lng:p},zoom:17,mapTypeControl:!1,panControl:!1,streetViewControl:!1,zoomControl:!0,scrollwheel:!1,styles:n.Helper.mapstyle()};(a.prototype=new google.maps.OverlayView).draw=function(){var e=this,o=this.div;o||(o=this.div=t.getElementById("pin"),void 0!==e.args.marker_id&&(o.dataset.marker_id=e.args.marker_id),google.maps.event.addDomListener(o,"click",function(t){alert("You clicked on a custom marker!"),google.maps.event.trigger(e,"click")}),this.getPanes().overlayImage.appendChild(o));var n=this.getProjection().fromLatLngToDivPixel(this.latlng);n&&(o.style.left=n.x-55+"px",o.style.top=n.y-55+"px",o.style.opacity=1)},a.prototype.remove=function(){this.div&&(this.div.parentNode.removeChild(this.div),this.div=null)},a.prototype.getPosition=function(){return this.latlng},r=new google.maps.Map(l,d),new a(new google.maps.LatLng(c,p),r,{marker_id:"123"}),google.maps.event.addDomListener(r,"idle",function(){i()}),google.maps.event.addDomListener(e,"resize",function(){setTimeout(function(){r.setCenter(s)},1)})}o.getScript("https://www.google.com/jsapi",function(){google.load("maps","3.exp",{other_params:"key=AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY",callback:function(){google.maps.event.addDomListener(e,"load",i)}})})},n.LocationMap=new a}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a=n.Magnific=function(){};a.prototype.images=function(){o(".mfp-image").magnificPopup({gallery:{enabled:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"",arrowMarkup:'<span class="mfp-arrow mfp-arrow-%dir%"></span>'},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.find(".c-Magnific__title").text()},markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div></div>'},closeBtnInside:!1,closeOnBgClick:!1,closeMarkup:'<button title="%title%" type="button" class="mfp-close icon-close"></button>',delegate:"",type:"image",fixedContentPos:!0,mainClass:"mfp-with-zoom mfp-img-mobile",zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}})},a.prototype.video=function(){o(".mfp-video").magnificPopup({closeBtnInside:!1,closeMarkup:'<button title="%title%" type="button" class="mfp-close icon-close"></button>',disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,iframe:{patterns:{youtube_short:{index:"youtu.be/",id:"youtu.be/",src:"//www.youtube.com/embed/%id%?autoplay=1"}}}})},n.Magnific=new a}(window,document,jQuery,window.mint=window.mint||{});var msnry;!function(e,t,o,n,i){"use strict";var a=n.Menu=function(){};a.prototype.init=function(){var e,n=t.getElementById("mobileMenu"),i=t.getElementsByTagName("body");o(n).on("click",function(t){t.preventDefault(),0===o(".mobile-menu").length&&(e=o("body").scrollTop()),o(i).toggleClass("mobile-menu no-scroll"),0===o(".mobile-menu").length&&o(i).scrollTop(e)})},n.Menu=new a}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a=n.OfferCarousels=function(){};a.prototype.init=function(){var e=t.getElementById("offerCarousel");o(".slider-for",e).slick({slidesToShow:1,slidesToScroll:1,prevArrow:'<i class="icon-arrow-2 slick-prev"></i>',nextArrow:'<i class="icon-arrow-2 slick-next"></i>',fade:!0,asNavFor:".slider-nav"}),o(".slider-nav",e).slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-for",focusOnSelect:!0,centerMode:!0,centerPadding:0,variableWidth:!0,prevArrow:'<i class="icon-arrow-2 slick-prev"></i>',nextArrow:'<i class="icon-arrow-2 slick-next"></i>',responsive:[{breakpoint:569,settings:{arrows:!1,slidesToShow:4,swipeToSlide:!0}}]});var n=new Blazy({container:"#offerCarousel"});o(e).on("afterChange",function(e,t,o){n.revalidate()})},n.OfferCarousel=new a}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a=n.OfferContacts=function(){};a.prototype.init=function(){function i(){n.Helper.isWindowSmallerThan(769)?(a=s.detach(),r.after(a)):(a=s.detach(),l.after(a))}t.getElementById("offerContact");var a,r=o(".c-offer-carousel"),s=o(".c-offer-contact"),l=o(".c-offer-details"),c=o(e);i(),c.on("resize",function(){i()})},n.OfferContact=new a}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a,r=n.OffersOnMap=function(){},s=t.getElementById("offersOnMap"),l=[],c=!1,p=51.5402644,d=19.4280405,m=n.Helper.mapstyle(),u={center:{lat:p,lng:d},zoom:17,mapTypeControl:!1,panControl:!1,streetViewControl:!1,zoomControl:!0,scrollwheel:!1,styles:m};r.prototype.getLocations=function(){var t=[];o(".js-location").each(function(){var e=o(this),n=e.data("lat"),i=e.data("lng"),a=o("a",e).attr("href");t.push([n,i,a])}),function(){for(var e=0;e<l.length;e++)l[e].setMap(a)}(),function(t){for(var n=new google.maps.LatLngBounds,i=0;i<t.length;i++){var r=t[i],c=new google.maps.LatLng(r[0],r[1]),p={url:o(s).data("marker"),size:new google.maps.Size(34,34),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,34)},d=new google.maps.Marker({position:c,map:a,draggable:!1,zIndex:20,icon:p,url:r[2]});n.extend(c);var m=n.getNorthEast().lng()-n.getSouthWest().lng(),u=n.getNorthEast().lat()-n.getSouthWest().lat();if(m<98e-5&&m>-98e-5&&u<98e-5&&u>-98e-5){var f=new google.maps.LatLng(n.getNorthEast().lat()+98e-5,n.getNorthEast().lng()+98e-5),g=new google.maps.LatLng(n.getNorthEast().lat()-98e-5,n.getNorthEast().lng()-98e-5);n.extend(f),n.extend(g)}a.fitBounds(n),l.push(d),google.maps.event.addListener(d,"click",function(){e.location.href=d.url})}}(t)},r.prototype.googleMap=function(){},r.prototype.init=function(){function t(){function t(){o=a.getCenter()}var o;new google.maps.LatLng(p,d);a=new google.maps.Map(s,u),r.prototype.getLocations(a),c=!0,google.maps.event.addDomListener(a,"idle",function(){t()}),google.maps.event.addDomListener(e,"resize",function(){setTimeout(function(){a.setCenter(o)},1)})}!1===c?o.getScript("https://www.google.com/jsapi",function(){google.load("maps","3.exp",{other_params:"key=AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY",callback:function(){t()}})}):r.prototype.getLocations(a)},n.OffersOnMap=new r}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a=n.QuestionForm=function(){};a.prototype.init=function(){this.enable(),this.rwud()},a.prototype.ajax=function(){},a.prototype.enable=function(){var e=t.getElementById("questionForm"),i=o(".js-showForm"),a=o(".js-closeForm");i.on("click",function(t){t.preventDefault(),o(e).addClass("is-active"),n.Helper.goToTarget("#questionForm",-20)}),a.on("click",function(t){t.preventDefault(),o(e).removeClass("is-active"),o("form",e).parsley().reset()})},a.prototype.rwud=function(){function i(){n.Helper.isWindowSmallerThan(1180)?(a=l.detach(),s.append(a)):(a=l.detach(),c.append(a))}var a,r=t.getElementById("questionForm"),s=o("form",r),l=o(".o-form__submit"),c=o(".o-form__row--summary"),p=o(e);i(),o(p).on("resize",function(){i()})},n.QuestionForm=new a}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a=n.Shortcutss=function(){};a.prototype.init=function(){var e=t.getElementsByTagName("body"),n=o(".c-shortcuts-btn--trigger"),i=t.getElementById("shortcuts");o(".js-shortcuts-trigger").on("click",function(t){t.preventDefault(),n.toggleClass("is-fixed"),o(i).toggleClass("is-visible"),o(e).toggleClass("no-scroll")})},n.Shortcuts=new a}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a=n.Sliders=function(){};a.prototype.init=function(){var e=t.getElementById("homeSlider");o(e).slick({autoplay:!0,autoplaySpeed:8e3,dots:!0,speed:600,prevArrow:'<i class="icon-arrow-2 slick-prev"></i>',nextArrow:'<i class="icon-arrow-2 slick-next"></i>'});var n=new Blazy({container:"#homeSlider"});o(e).on("afterChange",function(e,t,o){n.revalidate()})},n.Slider=new a}(window,document,jQuery,window.mint=window.mint||{}),function(e,t,o,n,i){"use strict";var a=n.Switcher=function(){};a.prototype.rentSale=function(){function n(){var t="";t=e.location.hash?e.location.hash:"#rent",o(r).removeClass("type-rent type-sale").addClass("type-"+t.substring(1,t.length)),o(s).addClass("is-visible"),o(i).addClass("is-visible")}var i=t.getElementById("rentSale"),a=o(".js-btn",i),r=t.getElementsByTagName("body"),s=t.getElementById("filters");e.location.hash&&o(e).on("hashchange",function(){n()}),a.on("click",function(t){t.preventDefault();var i=o(this).data("type");e.location.hash?(e.location.hash=i,n()):o(r).removeClass("type-rent type-sale").addClass("type-"+i)}),n()},a.prototype.viewType=function(){var e=t.getElementById("viewType"),i=o(".js-btn",e),a=t.getElementById("results");i.on("click",function(e){e.preventDefault();var t=o(this),r=t.data("type");i.removeClass("is-active"),t.addClass("is-active"),o(".js-view",a).removeClass("is-active"),o("#"+r).addClass("is-active"),"map"===r&&n.OffersOnMap.init()})},n.Switcher=new a}(window,document,jQuery,window.mint=window.mint||{}),WebFontConfig={google:{families:["Lato:100,300,400,700:latin-ext"]},active:function(){mint.Helper.exist("#masonry")&&triggerMasonry()}},function(){var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",e.type="text/javascript",e.async="true";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),Parsley.addMessages("pl",{defaultMessage:"Wartość wygląda na nieprawidłową",type:{email:"Wpisz poprawny adres e-mail.",url:"Wpisz poprawny adres URL.",number:"Wpisz poprawną liczbę.",integer:"Dozwolone są jedynie liczby całkowite.",digits:"Dozwolone są jedynie cyfry.",alphanum:"Dozwolone są jedynie znaki alfanumeryczne."},notblank:"Pole nie może być puste.",required:"Pole jest wymagane.",pattern:"Pole zawiera nieprawidłową wartość.",min:"Wartość nie może być mniejsza od %s.",max:"Wartość nie może być większa od %s.",range:"Wartość powinna zaweriać się pomiędzy %s a %s.",minlength:"Minimalna ilość znaków wynosi %s.",maxlength:"Maksymalna ilość znaków wynosi %s.",length:"Ilość znaków wynosi od %s do %s.",mincheck:"Wybierz minimalnie %s opcji.",maxcheck:"Wybierz maksymalnie %s opcji.",check:"Wybierz od %s do %s opcji.",equalto:"Wartości nie są identyczne."}),Parsley.setLocale("pl");