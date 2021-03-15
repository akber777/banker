import React, { useLayoutEffect } from "react";

import $ from "jquery";

const Resize = () => {
  useLayoutEffect(() => {
    function resize() {
      var footer_height = $("footer").height(),
        header_height = $("header").height(),
        plus_height = footer_height + header_height,
        window_height = $(window).height(),
        new_height = window_height - plus_height;

      if ($("main").height() < window_height) {
        $("main").css({
          "min-height": new_height,
        });
      }

    }

    resize();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 248) {
        if ($(".fixed").hasClass("noFixed") === false) {
          $(".fixed").addClass("noFixed");
          $(".home__leftBanner").addClass("fixedBannerLeft");
          $(".home__rightBanner").addClass("fixedBannerRight");
        }
      } else {
        $(".fixed").removeClass("noFixed");
        $(".home__leftBanner").removeClass("fixedBannerLeft");
        $(".home__rightBanner").removeClass("fixedBannerRight");
      }
    });
  });



  return "";
};

export default Resize;
