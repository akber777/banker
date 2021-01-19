
import React, { useLayoutEffect } from 'react';

import $ from 'jquery';



const Resize = () => {

    useLayoutEffect(() => {

        function resize() {

            var footer_height = $('footer').height(),

                header_height = $('header').height(),
                plus_height = footer_height + header_height,
                window_height = $(window).height(),
                new_height = window_height - plus_height;


            if ($('main').height() < window_height) {
                $('main').css({

                    'min-height': new_height

                })
            }

        }


        resize()


    }, [])

    return (
        ''
    );
}

export default Resize;
