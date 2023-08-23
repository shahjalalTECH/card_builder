jQuery(document).ready(function () {
    jQuery(document).on('change', 'input[type=color]', function () {
        let colorVal = jQuery(this).val();
        jQuery(this).parents("label").val() = colorVal;
    });

    // Toggle click by front to backface visible
    jQuery(".bob-business-flip-card-alternet-btn").click(
        function () {
            jQuery(".bob-business-flip-card-inner").toggleClass("bob-business-flip-card-inner-rotate");
            jQuery(".bob-business-flip-card-inner").toggleClass("bob-card-back-side bob-card-front-side");
            jQuery("#bb_contextmenu").hide();
        }
    );
    jQuery(document).on('submit', '.discount_form', function (e) {
        e.preventDefault()
        let code = jQuery('.discount_form input[name=coupon_code]').val()
        jQuery.ajax({
            url: ajax_obj.ajaxurl,
            type: 'POST',
            data: {
                'action': 'add_coupon',
                'code': code,
                'nonce': ajax_obj.nonce
            },
            success: function (result) {
                location.reload()
            },
            error: function (xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                alert('Error - ' + errorMessage);
            }
        });
    });
    // jQuery(".bob-business-flip-card-front").click(
    //     function () {
    //         jQuery(".bob-business-flip-card-inner").removeClass("bob-business-flip-card-inner-rotate");
    //         jQuery(".bob-business-flip-card-inner").removeClass("bob-card-back-side");
    //         jQuery(".bob-business-flip-card-inner").addClass("bob-card-front-side");
    //     }
    // );

    // jQuery(".bob-business-flip-card-back").click(
    //     function () {
    //         jQuery(".bob-business-flip-card-inner").addClass("bob-business-flip-card-inner-rotate");
    //         jQuery(".bob-business-flip-card-inner").addClass("bob-card-back-side");
    //         jQuery(".bob-business-flip-card-inner").removeClass("bob-card-front-side");
    //     }
    // );

    // Option Text custom code
    jQuery("#text-options").click(function () {
        jQuery(this).parent().next().toggleClass("bob-business-card-text-option-parent-display");
    });

    jQuery("#bob-first-name").on('input', function () {
        let bob_value = jQuery(this).val();
        jQuery("h2.bb-your-name strong").text(bob_value);
    });

    jQuery("#bob-last-name").on('input', function () {
        let bob_value = jQuery(this).val();
        jQuery("h2.bb-your-name span").text(bob_value);

    });

    jQuery("#bob-designation").on('input', function () {
        let bob_value = jQuery(this).val();
        jQuery("p.bb-your-tagline").text(bob_value);
    });

    jQuery("#bob-company-name").on('input', function () {
        let bob_value = jQuery(this).val();
        jQuery(".bob-business-flip-card-front-logo-content h3").text(bob_value);
        jQuery(".bob-business-flip-card-back-logo-parent h3").text(bob_value);

    });

    jQuery("#bob-tagline").on('input', function () {
        let bob_value = jQuery(this).val();
        jQuery(".bob-business-flip-card-front-logo-content p").text(bob_value);
        jQuery(".bob-business-flip-card-back-logo-parent p").text(bob_value);
    });

    // Color custom code

    jQuery("#color-wheel").click(function () {
        jQuery(this).parent().next().toggleClass("bob-business-card-color-main-parent-display");
    });

    jQuery(document).on('input', "#bob-first-color-value", function () {
        let bob_value = jQuery(this).val();
        jQuery('.innerDiv').css('background-color', bob_value);
    });

    jQuery("#bob-second-color-value").on('input', function () {
        let bob_value = jQuery(this).val();
        jQuery(".bob-business-flip-card-front-logo-content h3, .bob-business-flip-card-front-logo-content h3").css("color", bob_value);
        jQuery("h2.bb-your-tagline strong").css("color", bob_value);
        jQuery('#default-colors').prop("checked", false);
    });

    // Image Upload

    // jQuery("#upload-image").click(function () {
    //     jQuery(this).parent().next().toggleClass("bob-business-card-upload-logo-parent-display");
    // });

    // function readURL(input) {
    //     if (input.files && input.files[0]) {
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             jQuery('.bob-business-flip-card-front-logo, .bob-business-flip-card-back-logo').css('background-image', 'url(' + e.target.result + ')');
    //             jQuery('.bob-business-flip-card-front-logo, .bob-business-flip-card-back-logo').hide();
    //             jQuery('.bob-business-flip-card-front-logo, .bob-business-flip-card-back-logo').fadeIn(650);
    //         }
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }
    // jQuery("#imageUpload").change(function () {
    //     readURL(this);
    // });

    jQuery("#upload-image").click(function () {
        jQuery(this).parent().next().toggleClass("bob-business-card-upload-logo-parent-display");
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                // for front side image
                console.log('aa')
                jQuery('.bob-card-front-side .bb-front-inner-content').append(
                    `<div data-class="bb-company-logo"
                    class="bob-business-flip-card-front-logo resizable draggable bob-business-flip-card-front-logo-back-position"
                    contenteditable="true" style="background-image : url( ` + e.target.result + ` )"></div>`);

                //for backside image
                jQuery('.bob-card-back-side .bb-back-inner-content').append(
                    `<div data-class="bb-company-logo"
                    class="bob-business-flip-card-front-logo resizable draggable bob-business-flip-card-front-logo-back-position"
                    contenteditable="true" style="background-image : url( ` + e.target.result + ` )"></div>`);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    jQuery("#imageUpload").change(function () {
        readURL(this);
    });


    //Spacific color

    jQuery(".bob-business-card-spacific-color-parent input").click(function () {
        let bob_value = jQuery(this).val();
        // jQuery(".innerDiv").css("background-color", bob_value);
        jQuery(".bob-card-front-side .bb-front-inner-content").css("background-color", bob_value);
        jQuery(".bob-card-back-side .bb-back-inner-content").css("background-color", bob_value);

    });

    // to remove
    jQuery(document).on('click', '.bob-append-input-field-area-child button', function () {
        var id = jQuery(this).data('id')
        jQuery('.bob-more-field-' + id).remove();
        jQuery('.bob-value-recieved-' + id).css("display", "none");
    })

    // Default Color add

    jQuery("#default-colors").click(function () {
        let default_color = "#2098D6";
        let default_second_color = "#2A2E31";
        jQuery(".bob-business-flip-card-back-logo-parent h3, .bob-business-flip-card-front-logo-content h3").css("color", default_color);
        jQuery("h2.bb-your-name strong").css("color", default_color);
    });


    //Background Image change

    jQuery(document).on('click', ".bb-add-business-card-bg-img", function () {
        jQuery('.bb__addCartButton').prop('disabled', false);
        var imgUrl = jQuery(this).find("img").attr("src");
        jQuery(".bob-card-front-side .bb-front-inner-content").css("background-image", 'url(' + imgUrl + ')');
        jQuery(".bob-business-flip-card-inner-rotate .bb-back-inner-content").css("background-image", 'url(' + imgUrl + ')');
    });

    jQuery(document).on('click', ".bb-remove-template", function () {
        jQuery(".bob-card-front-side .bb-front-inner-content").css("background-image", 'unset');
        jQuery(".bob-business-flip-card-inner-rotate .bb-back-inner-content").css("background-image", 'unset');
    });

    // Color Change

    jQuery(document).on("mousemove", ".bb-active-data", function () {
        jQuery('#bob-first-color-value').attr('data-class', 'bb-your-tagline');


        //show hid vertical horizontal line
        // jQuery('.bb-snapping-vertical-line').show();
        // jQuery('.bb-snapping-horizontal-line').show();

        // horizontal line move
        var activeDataTop = jQuery('.bb-active-data').position().top
        var fullDivHeight = jQuery('#bb_innerDiv').height();
        jQuery('.bb-snapping-horizontal-line').css('top', '50%')
        console.log(fullDivHeight)
        // vertical line move
        var activeDataLeft = jQuery('.bb-active-data').position().left
        var fullDivWidth = jQuery('#bb_innerDiv').width();
        jQuery('.bb-snapping-vertical-line').css('left', '50%')


        // var div = jQuery('#bb_innerDiv');

        // var divX = div.width() * 0.5;
        // var divY = div.height() * 0.5;
        // console.log("Parent div width get", divX)
        // console.log("Position get", jQuery('.bb-active-data').position().left + jQuery('.bb-active-data').width() * 0.5)
        //  console.log("Position get", jQuery('.bb-active-data').position())

        //New Code
        //  if(div.width() * 0.5 == jQuery('.bb-active-data').position().left + jQuery('.bb-active-data').width() * 0.5) {
        //     jQuery('.bb-snapping-vertical-line').show();
        // }



    });

    function percentFormat(dec) {
        return Math.round((dec * 100) / dec) + "%";
    }

    // Add Another fields
    let count = 1;
    jQuery(document).on("click", ".bob-add-input-field", function () {
        count++;
        jQuery(".bob-card-front-side .bb-front-inner-content").append(`<p data-class="bb-append-` + count + `" id="desc" class="resizable resizable-new-jQuery` + count + ` draggable bb-new-field-append bb-append-` + count + `" contenteditable="true">Write text</p>`);
        jQuery('.resizable-new-' + count).addClass('bb-active-data');

        jQuery(".bob-business-flip-card-inner-rotate .bb-back-inner-content").append(`<p data-class="bb-append-` + count + `" class="resizable resizable-new-jQuery` + count + ` draggable bb-new-field-append bb-append-` + count + `" contenteditable="true">Write text</p>`);
        jQuery('.resizable-new-' + count).addClass('bb-active-data');

    });

    // Start custom Draggable and resize

    var dragging = false,
        currentDragged;

    var resizeHandles =
        `
        <div class="resize nw" id="nw" draggable="false" contenteditable="false"></div>
        <div class="resize n" id="n" draggable="false" contenteditable="false"></div>
        <div class="resize ne" id="ne" draggable="false" contenteditable="false"></div>
        <div class="resize w" id="w" draggable="false" contenteditable="false"></div>
        <div class="resize e" id="e" draggable="false" contenteditable="false"></div>
        <div class="resize sw" id="sw" draggable="false" contenteditable="false"></div>
        <div class="resize s" id="s" draggable="false" contenteditable="false"></div>
        <div class="resize se" id="se" draggable="false" contenteditable="false"></div>`;

    var resizing = false,
        currentResizeHandle,
        sX,
        sY;

    var mousedownEventType = ((document.ontouchstart !== null) ? 'mousedown' : 'touchstart'),
        mousemoveEventType = ((document.ontouchmove !== null) ? 'mousemove' : 'touchmove'),
        mouseupEventType = ((document.ontouchmove !== null) ? 'mouseup' : 'touchend');

    jQuery(document).on(mousedownEventType, '.draggable', function (e) {


        if (!e.target.classList.contains("resize") && !resizing) {

            currentDragged = jQuery(this);
            dragging = true;
            sX = e.pageX;
            sY = e.pageY;
            let firstColor = jQuery(".bob-first-color-value").val();
            jQuery(this).css('color', firstColor);

            // console.log(jQuery(this))
            jQuery('.resizable ').removeClass('bb-active-data')
            jQuery(this).addClass('bb-active-data');

        }
    });

    jQuery(document).on('focus', '.resizable', function (e) {

            jQuery(".resize").hide();
            jQuery(this).html(jQuery(this).html() + resizeHandles);
            jQuery(".resize").on(mousedownEventType, function (e) {
                currentResizeHandle = jQuery(this);
                resizing = true;
                sX = e.pageX;
                sY = e.pageY;
            });
            bb_generate_card_image();
        })
        .blur(function (e) {
            jQuery(this).children(".resize").remove();
        });

    jQuery("body").on(mousemoveEventType, function (e) {
            var xChange = e.pageX - sX,
                yChange = e.pageY - sY;
            if (resizing) {
                e.preventDefault();


                var parent = currentResizeHandle.parent();

                switch (currentResizeHandle.attr('id')) {
                    case "nw":
                        var newWidth = parseFloat(parent.css('width')) - xChange,
                            newHeight = parseFloat(parent.css('height')) - yChange,
                            newLeft = parseFloat(parent.css('left')) + xChange,
                            newTop = parseFloat(parent.css('top')) + yChange;
                        break;
                    case "n":
                        var newWidth = parseFloat(parent.css('width')),
                            newHeight = parseFloat(parent.css('height')) - yChange,
                            newLeft = parseFloat(parent.css('left')),
                            newTop = parseFloat(parent.css('top')) + yChange;
                        break;
                    case "ne":
                        var newWidth = parseFloat(parent.css('width')) + xChange,
                            newHeight = parseFloat(parent.css('height')) - yChange,
                            newLeft = parseFloat(parent.css('left')),
                            newTop = parseFloat(parent.css('top')) + yChange;
                        break;
                    case "e":
                        var newWidth = parseFloat(parent.css('width')) + xChange,
                            newHeight = parseFloat(parent.css('height')),
                            newLeft = parseFloat(parent.css('left')),
                            newTop = parseFloat(parent.css('top'));
                        break;
                    case "w":
                        var newWidth = parseFloat(parent.css('width')) - xChange,
                            newHeight = parseFloat(parent.css('height')),
                            newLeft = parseFloat(parent.css('left')) + xChange,
                            newTop = parseFloat(parent.css('top'));
                        break;
                    case "sw":
                        var newWidth = parseFloat(parent.css('width')) - xChange,
                            newHeight = parseFloat(parent.css('height')) + yChange,
                            newLeft = parseFloat(parent.css('left')) + xChange,
                            newTop = parseFloat(parent.css('top'));
                        break;
                    case "s":
                        var newWidth = parseFloat(parent.css('width')),
                            newHeight = parseFloat(parent.css('height')) + yChange,
                            newLeft = parseFloat(parent.css('left')),
                            newTop = parseFloat(parent.css('top'));
                        break;
                    case "se":
                        var newWidth = parseFloat(parent.css('width')) + xChange,
                            newHeight = parseFloat(parent.css('height')) + yChange,
                            newLeft = parseFloat(parent.css('left')),
                            newTop = parseFloat(parent.css('top'));
                        break;
                }
                //Width
                var containerWidth = parseFloat(parent.parent().css("width"));

                if (newLeft < 0) {
                    newWidth += newLeft;
                    newLeft = 0;
                }
                if (newWidth < 0) {
                    newWidth = 0;
                    newLeft = parent.css("left");
                }
                if (newLeft + newWidth > containerWidth) {
                    newWidth = containerWidth - newLeft;
                }

                parent
                    .css('left', newLeft + "px")
                    .css('width', newWidth + "px");
                sX = e.pageX;

                //Height
                var containerHeight = parseFloat(parent.parent().css("height"));

                if (newTop < 0) {
                    newHeight += newTop;
                    newTop = 0;
                }
                if (newHeight < 0) {
                    newHeight = 0;
                    newTop = parent.css("top");
                }
                if (newTop + newHeight > containerHeight) {
                    newHeight = containerHeight - newTop;
                }

                parent
                    .css('top', newTop + "px")
                    .css('height', newHeight + "px");
                sY = e.pageY;

            } else if (dragging) {
                e.preventDefault();

                var div = jQuery('#bb_innerDiv');

                var divX = div.width() * 0.5;
                var divY = div.height() * 0.5;

                // console.log("Object position get", jQuery('.bb-active-data').position().left + jQuery('.bb-active-data').width() * 0.5)
                console.log('divx', divX)
                console.log('check dddddddddddddddddddddd', parseInt(jQuery('.bb-active-data').position().left + jQuery('.bb-active-data').width()))

                if (parseInt(jQuery('.bb-active-data').position().left + jQuery('.bb-active-data').width()) >= divX && parseInt(jQuery('.bb-active-data').position().left) <= divX) {
                    jQuery('.bb-snapping-vertical-line').show();
                } else {
                    jQuery('.bb-snapping-vertical-line').hide();
                }

                if (parseInt(jQuery('.bb-active-data').position().top + jQuery('.bb-active-data').height()) >= divY && parseInt(jQuery('.bb-active-data').position().top) <= divY) {
                    jQuery('.bb-snapping-horizontal-line').show();
                } else {
                    jQuery('.bb-snapping-horizontal-line').hide();
                }

                var draggedWidth = parseFloat(currentDragged.css("width")),
                    draggedHeight = parseFloat(currentDragged.css("height")),
                    containerWidth = parseFloat(currentDragged.parent().css("width")),
                    containerHeight = parseFloat(currentDragged.parent().css("height"));

                var newLeft = (parseFloat(currentDragged.css("left")) + xChange),
                    newTop = (parseFloat(currentDragged.css("top")) + yChange);

                if (newLeft < 0) {
                    newLeft = 0;
                }
                if (newTop < 0) {
                    newTop = 0;
                }
                if (newLeft + draggedWidth > containerWidth) {
                    newLeft = containerWidth - draggedWidth;
                }
                if (newTop + draggedHeight > containerHeight) {
                    newTop = containerHeight - draggedHeight;
                }

                currentDragged
                    .css("left", newLeft + "px")
                    .css("top", newTop + "px");
                sX = e.pageX;
                sY = e.pageY;

            }
        })
        .on(mouseupEventType, function (e) {
            dragging = false;
            resizing = false;
            // bb_generate_card_image();
        });

    // Edit menubar

    jQuery(document).on("click", ".resizable", function () {
        let attrValue = jQuery(this).attr("data-class");
        jQuery(".colorPicker").attr("data-type", attrValue);
    });

    jQuery(document).on("input", ".colorPicker", function () {
        var addColor = jQuery(this).attr("data-type");
        let colorVal = jQuery(".colorPicker").val();
        jQuery('.' + addColor).css("color", colorVal);
        // jQuery(".bb-edit-all-text-parent .bb__new-text-color-picker img").css("display", "none");
        jQuery(".bb-edit-all-text-parent .bb__new-text-color-picker").css("background-color", colorVal);


    })

    jQuery(document).on("input", ".bb_all_color", function () {
        let colorVal = jQuery(this).val();
        jQuery(this).parents(".bb-multiple-bg-color-child").css("background-color", colorVal);
        jQuery(this).parents(".bb-multiple-bg-color-child").find("label").css("background-image", "unset");

        jQuery(".bob-card-front-side .bb-front-inner-content").css("background-color", colorVal);
        jQuery(".bob-card-back-side .bb-back-inner-content").css("background-color", colorVal);
        jQuery('.bb__addCartButton').prop('disabled', false);
    })

    // Edit Font Weight
    jQuery(document).on("click", ".resizable", function () {
        let attrValue = jQuery(this).attr("data-class");
        jQuery(".bb__new-text-bold").attr("data-type", attrValue);
    });

    jQuery(document).on("click", ".bb__new-text-bold", function () {
        var addColor = jQuery(this).attr("data-type");
        // jQuery('.' + addColor).css("font-weight", "bold");
        jQuery('.' + addColor).toggleClass("bb__text__bold__undo");
    });

    // Edit Font Italic
    jQuery(document).on("click", ".resizable", function () {
        let attrValue = jQuery(this).attr("data-class");
        jQuery(".bb__new-text-italic").attr("data-type", attrValue);
    });

    jQuery(document).on("click", ".bb__new-text-italic", function () {
        var addColor = jQuery(this).attr("data-type");
        // jQuery('.' + addColor).css("font-style", "italic");
        jQuery('.' + addColor).toggleClass("bb__text__italic__undo");
    });

    jQuery(document).on("click", ".resizable", function () {
        let attrValue = jQuery(this).attr("data-class");
        jQuery(".bb-edit-text-size").attr("data-type", attrValue);
    });

    jQuery(document).on("input", ".bb-edit-text-size", function () {
        var addFontSize = jQuery(this).attr("data-type");
        let fontVal = jQuery(".bb-edit-text-size").val();
        jQuery('.' + addFontSize).css("font-size", fontVal + "px");
    })

    jQuery(document).on("click", ".resizable", function () {
        let attrValue = jQuery(this).attr("data-class");
        jQuery(".bb-get-font-weight-family").attr("data-type", attrValue);
    });

    jQuery(document).on("click", ".bb-get-font-weight-family", function (e) {
        e.preventDefault();
        var addFontFamily = jQuery(this).attr("data-type");
        // jQuery(".bb-get-font-weight-family").removeAttr("data-type");
        let getFontWeight = jQuery(this).attr("data-font-weight");
        let getFontFamily = jQuery(this).attr("data-font-family");
        jQuery('.' + addFontFamily).css("font-family", getFontFamily);
        jQuery('.' + addFontFamily).css("font-weight", getFontWeight);
        console.log(getFontWeight, getFontFamily)
    })


    jQuery('body').on("click", ".bb_contextmenu__delete", function () {
        // var deleted_this = jQuery(this).attr("data-type");
        jQuery('.bb-active-data').remove()

    })

    // Icon Rotate
    jQuery(document).on("click", ".bb_select_font_family-main-parent", function () {
        jQuery(".bb_select_font_family-main-parent .fa-chevron-down").toggleClass("fa-chevron");
    });

    // jQuery(document).on("click", ".resizable", function () {
    //     let attrValue = jQuery(this).attr("data-class");
    //     jQuery(".bb_contextmenu__delete").attr("data-type", attrValue);
    // });

    //Background Change

    jQuery(document).on("click", "#default-design", function () {
        jQuery(".bb-add-business-card-bg-parent").toggleClass("bb-add-business-card-bg-parent-display");
    });

    //Html to image convert

    // jQuery(document).on("click", ".bb-convert-to-image-btn", function() {
    //     html2canvas(document.querySelector(".bb-back-inner-content")).then(canvas => {
    //         document.querySelector(".bb-convert-view-image").appendChild(canvas);
    //     });
    //     html2canvas(document.querySelector(".bb-front-inner-content")).then(canvas => {
    //         document.querySelector(".bb-convert-view-image").appendChild(canvas);
    //     });
    // });

    function bb_generate_card_image() {
        html2canvas(document.querySelector(".bb-back-inner-content")).then(canvas => {
            jQuery('.bb-convert-front-image').html(canvas);
            jQuery('.bb-convert-front-image canvas').attr('id', 'bb-convert-front-id');
        });
        html2canvas(document.querySelector(".bb-front-inner-content")).then(canvas => {
            jQuery('.bb-convert-back-image').html(canvas);
            jQuery('.bb-convert-back-image canvas').attr('id', 'bb-convert-back-id');

        });

        setTimeout(function () {
            let canvas = document.querySelector('#bb-convert-front-id')
            console.log(canvas)
            const bbCardFront = canvas.toDataURL('image/png');
            jQuery('#show-img').attr('src', bbCardFront)

            let canvasback = document.querySelector('#bb-convert-back-id')
            const bbCardback = canvasback.toDataURL('image/png');
            jQuery('#show-img2').attr('src', bbCardback)
        }, 300);
    }

    // Parent click all text unselected

    // $('body').click((event) => {
    //     if (event.target.id == "px-acc001") {

    //         return;
    //     }
    //     jQuery('.bb-back-inner-content').find(".resizable").removeClass("bb-active-data");
    //     jQuery('.bb-back-inner-content').find(".resize").remove();
    //     bb_generate_card_image();
    //     jQuery("#bb_contextmenu").hide();
    //     jQuery("#bb_contextmenu_send").hide();

    //     //show hid vertical horizontal line
    //     jQuery('.bb-snapping-vertical-line').hide();
    //     jQuery('.bb-snapping-horizontal-line').hide();

    //     jQuery('.bb-front-inner-content').find(".resizable").removeClass("bb-active-data");
    //     jQuery('.bb-front-inner-content').find(".resize").remove();
    //     bb_generate_card_image();
    //     jQuery('.bb-front-inner-content').find("#bb_contextmenu").hide();
    //     jQuery("#bb_contextmenu").hide();
    //     jQuery("#bb_contextmenu_send").hide();

    //     //show hid vertical horizontal line
    //     jQuery('.bb-snapping-vertical-line').hide();
    //     jQuery('.bb-snapping-horizontal-line').hide();
    //  });

     jQuery("body").on('click', function (event) {
        if (jQuery(event.target).closest('.active').length || jQuery(event.target).closest('.bob-business-flip-card').length) {

        } else {
            // jQuery('.resizable').last().remove();
            jQuery('.bb-front-inner-content').find(".resizable").removeClass("bb-active-data");
            jQuery("#bb_contextmenu").hide();
            jQuery('.bb-front-inner-content').find(".resize").remove();
            bb_generate_card_image();
        }
    })

    

   



    jQuery(document, 'body').on("click", function (e) {

        var target = jQuery(e.target);
        if (target.is('.bb-front-inner-content')) {
            jQuery('.bb-front-inner-content').find(".resizable").removeClass("bb-active-data");
            jQuery('.bb-front-inner-content').find(".resize").remove();
            bb_generate_card_image();
            jQuery('.bb-front-inner-content').find("#bb_contextmenu").hide();
            jQuery("#bb_contextmenu").hide();
            jQuery("#bb_contextmenu_send").hide();

            //show hid vertical horizontal line
            jQuery('.bb-snapping-vertical-line').hide();
            jQuery('.bb-snapping-horizontal-line').hide();
        }

        if (target.is('.bb-back-inner-content')) {
            jQuery('.bb-back-inner-content').find(".resizable").removeClass("bb-active-data");
            jQuery('.bb-back-inner-content').find(".resize").remove();
            bb_generate_card_image();
            jQuery("#bb_contextmenu").hide();
            jQuery("#bb_contextmenu_send").hide();
            jQuery('.bb-snapping-vertical-line').hide();
            jQuery('.bb-snapping-horizontal-line').hide();
        }



    });

    jQuery(document).on("click", ".bb_contextmenu__deselect", function () {
        jQuery('.bb-front-inner-content').find(".resizable").removeClass("bb-active-data");
        jQuery('.bb-back-inner-content').find(".resizable").removeClass("bb-active-data");
        jQuery("#bb_contextmenu").hide();
        jQuery('.bb-front-inner-content').find(".resize").remove();
        jQuery('.bb-back-inner-content').find(".resize").remove();
        bb_generate_card_image();
        jQuery('.bb-snapping-vertical-line').hide();
        jQuery('.bb-snapping-horizontal-line').hide();
    })

    jQuery(document).on('click', ".resizable ", function (e) {
        jQuery("#bb_contextmenu").css({
            "top": e.pageY - 50 + "px",
            "left": e.pageX - 33 + "px",
            "display": "block"
        });
        e.preventDefault();
        console.log("Position Get", e)

    });
    jQuery(document).on('click', '.bb_contextmenu__delete', function () {
        jQuery("#bb_contextmenu").hide();
        jQuery('.bb-snapping-vertical-line').hide();
        jQuery('.bb-snapping-horizontal-line').hide();
    })

    jQuery(document).on('contextmenu', ".resizable ", function (e) {
        jQuery("#bb_contextmenu_send").css({
            "top": e.pageY + "px",
            "left": e.pageX + "px",
            "display": "block"
        });
        e.preventDefault();
    });

    jQuery(document, 'body').on("click", function () {
        jQuery("#bb_contextmenu_send").hide();
    })

    let sendIndex = 0;
    jQuery(document).on("click", ".bb-contextmenu-send-front", function () {
        jQuery('.resizable').css({
            "z-index": "0"
        });
        sendIndex++;
        jQuery('.bb-active-data').css({
            "z-index": sendIndex
        });
    });
    
    jQuery(document).on("click", ".bb-contextmenu-send-back", function () {
        jQuery('.resizable').css({
            "z-index": "1"
        });
        jQuery('.bb-active-data').css({
            "z-index": "0"
        });
    });

    let sendRotate = 0;
    jQuery(document).on("click", ".bb_contextmenu__rotate", function () {
        sendRotate += 45;
        jQuery('.bb-active-data').css({
            "transform": "rotate(" + sendRotate + "deg)"
        });
    });

    // Key Press code

    jQuery(document).on('keypress', function (e) {
        var zKey = 26;
        if (e.ctrlKey && e.which === zKey) {
            jQuery('.resizable').last().remove();
            jQuery('.bb-front-inner-content').find(".resizable").removeClass("bb-active-data");
            jQuery("#bb_contextmenu").hide();
            jQuery('.bb-front-inner-content').find(".resize").remove();
            bb_generate_card_image();
        }
    })

    jQuery(document).keydown(function (e) {
        if (e.which == 46) {
            jQuery('.resizable').remove();
            jQuery("#bb_contextmenu").hide();
            jQuery("#bb_contextmenu_send").hide();
        }
    });

    jQuery(document).keyup(function (e) {
        if (e.which == 27) {
            jQuery('.bb-front-inner-content').find(".resizable").removeClass("bb-active-data");
            jQuery("#bb_contextmenu").hide();
            jQuery('.bb-front-inner-content').find(".resize").remove();
            bb_generate_card_image();
        }
    });

    jQuery(document).on("click", ".bb-font-family-select-parent-with-main", function () {
        jQuery(this).find(".bb-font-family-select-child-toggle").toggleClass("bb-font-family-select-child-open");
    });
    jQuery('.bb-front-inner-content').on('DOMSubtreeModified', function () {
        jQuery('.bb__addCartButton').prop('disabled', false);
    });
    jQuery('.bb-back-inner-content').on('DOMSubtreeModified', function () {
        jQuery('.bb__addCartButton').prop('disabled', false);
    });
    jQuery(document).on('click', '#bb-business-card-cart', function () {
        let id = jQuery(this).attr('data-id')
        let img1 = jQuery('#show-img').attr('src')
        let img2 = jQuery('#show-img2').attr('src')
        jQuery.ajax({
            url: ajax_obj.ajaxurl,
            type: 'POST',
            data: {
                'action': 'add_to_cart',
                'id': id,
                'img1': img1,
                'img2': img2,
                'nonce': ajax_obj.nonce
            },
            success: function (result) {
                if (result.success) {
                    window.location.href = result.success
                } else {
                    jQuery('.bb-busniess-error').html(result.error)
                }
            },
            error: function (xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                alert('Error - ' + errorMessage);
            }
        });
    });

    jQuery(document).on('click', '.bob-business-flip-card-alternet-btn', function (event) {
        event.preventDefault();
        jQuery(this).toggleClass('bb-new-active-card');
        jQuery('.bb-snapping-vertical-line').hide();
        jQuery('.bb-snapping-horizontal-line').hide();
        jQuery('.bb-front-inner-content').find(".resizable").removeClass("bb-active-data");
        jQuery('.bb-back-inner-content').find(".resizable").removeClass("bb-active-data");
        jQuery("#bb_contextmenu").hide();
        jQuery('.bb-front-inner-content').find(".resize").remove();
        jQuery('.bb-back-inner-content').find(".resize").remove();
    });

    jQuery(document).on("click", ".bb-active-template-btn-child", function () {
        jQuery(".bb-active-template-btn-child").removeClass("bb-active-template");
        jQuery(this).addClass("bb-active-template");

        jQuery(".bb-add-business-card-bg-img").css({
            'display': 'none'
        });

        jQuery(".item-" + jQuery(this).attr('data-item')).css({
            'display': 'block'
        });

    });

    jQuery(document).on('click', '.bb__addCartButton', function (event) {
        event.preventDefault();
        jQuery(this).toggleClass('bb-new-active-card');
        jQuery('.bb-snapping-vertical-line').hide();
        jQuery('.bb-snapping-horizontal-line').hide();
        jQuery('.bb-front-inner-content').find(".resizable").removeClass("bb-active-data");
        jQuery('.bb-back-inner-content').find(".resizable").removeClass("bb-active-data");
        jQuery("#bb_contextmenu").hide();
        jQuery('.bb-front-inner-content').find(".resize").remove();
        jQuery('.bb-back-inner-content').find(".resize").remove();
        bb_generate_card_image();
    });

    // ddddddddddd
    var div = jQuery('#bb_innerDiv');

    var divX = div.width() * 0.5;
    var divY = div.height() * 0.5;

    // jQuery(document).mousedown(function () {
    //     console.log('SDFADS')
    //     console.log("Parent div width get", divX)
    //     console.log("Object position get", jQuery('.bb-active-data').position().left + jQuery('.bb-active-data').width() * 0.5)
    //     if (divX == jQuery('.bb-active-data').position().left + jQuery('.bb-active-data').width() * 0.5) {
    //         jQuery('.bb-snapping-vertical-line').show();
    //         console.log("ddddddddddddddddddddddddddddddddd")
    //     }
    // });



    const pxAccordion = (elementSelector) => {
        const selectedElements = document.querySelectorAll(elementSelector);
        selectedElements.forEach((item) => {
            pxAccordionInit(item);
        });
    };
    const pxAccordionInit = (element) => {
        const selectedElement = element;
        const accHeads = selectedElement.querySelectorAll(
            ".px-acc-item .px-acc-head"
        );
        accHeads.forEach((headItem) => {
            headItem.addEventListener("click", () => {
                const accItem = headItem.parentElement;
                const accBody = headItem.nextElementSibling;
                let accBodyHeight = accBody.scrollHeight;

                accBody.addEventListener("transitionend", () => {
                    if (accItem.classList.contains("active")) accBody.style.height = "auto";
                });
                accItem.classList.toggle("active");
                if (accItem.classList.contains("active")) {
                    accBody.style.height = accBodyHeight + "px";
                } else {
                    requestAnimationFrame(() => {
                        accBodyHeight = accBody.scrollHeight;
                        accBody.style.height = accBodyHeight + "px";
                        requestAnimationFrame(() => {
                            accBody.style.height = 0 + "px";
                        });
                    });
                }
            });
        });
    };
    pxAccordion("#px-acc001");

});


// HTml to Image convert link
// https://codepen.io/poojavpatel/pen/NLyWOm

// function bb__allowDrop(ev) {
//     ev.preventDefault();
// }

// function bb__drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function bb__drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     console.log(data)
//     ev.target.appendChild(document.getElementById(data));
// }