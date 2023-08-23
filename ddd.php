<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       https://bigobyte.com/
 * @since      1.0.0
 *
 * @package    Business_Card_Generator
 * @subpackage Business_Card_Generator/public/partials
 */
get_header();
?>
<!-- This file should primarily consist of HTML with a little bit of PHP. -->
<div class="bob-business-card-main-parent">
    <div class="bob-business-card-default-design">
        <!--======== New Accordion ==========-->
        <div id="px-acc001" class="px-app px-acc bb-left-accordion-margin-auto">
            <div class="px-acc-item">
                <div class="px-acc-head">
                    <span class="px-acc-title">
                        <img src="<?php echo plugin_dir_url(__FILE__) ?>../images/text-icon.png" alt="">
                        Text
                    </span>
                    <span class="px-acc-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <div class="px-acc-body">
                    <div class="px-acc-content bb-px-acc-content-text">

                        <div class="bb_select_font_family-main-parent">
                            <ul id="menu">
                                <li class="bb-font-family-select-parent bb-font-family-select-parent-with-main"><a href="#">Choose Fonts

                                    </a>
                                    <ul class="bb-font-family-select-child bb-font-family-select-child-toggle">
                                        <li class="bb-font-family-select-parent bb-font-family-select-parent-without-main">
                                            <a href="#" style="font-family: 'Roboto', sans-serif; font-weight: 900;">Roboto<span class="bb-font-family-select-expand" style="margin-top: 2px;">
                                                    <span class="px-acc-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </span></a>
                                            <ul class="bb-font-family-select-child">
                                                <li><a class="bb-get-font-weight-family" data-font-weight="900" data-font-family="'Roboto', sans-serif" href="#" style="font-family: 'Roboto', sans-serif; font-weight: 900;">Roboto</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="800" data-font-family="'Roboto', sans-serif" href="#" style="font-family: 'Roboto', sans-serif; font-weight: 800;">Roboto</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="700" data-font-family="'Roboto', sans-serif" href="#" style="font-family: 'Roboto', sans-serif; font-weight: 700;">Roboto</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="500" data-font-family="'Roboto', sans-serif" href="#" style="font-family: 'Roboto', sans-serif; font-weight: 500;">Roboto</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="400" data-font-family="'Roboto', sans-serif" href="#" style="font-family: 'Roboto', sans-serif; font-weight: 400;">Roboto</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Roboto', sans-serif" href="#" style="font-family: 'Roboto', sans-serif; font-weight: 300;">Roboto</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="100" data-font-family="'Roboto', sans-serif" href="#" style="font-family: 'Roboto', sans-serif; font-weight: 100;">Roboto</a>
                                                </li>
                                            </ul>

                                        </li>
                                        <li class="bb-font-family-select-parent bb-font-family-select-parent-without-main">
                                            <a href="#" style="font-family: 'Montserrat', sans-serif; font-weight: 900;">Montserrat<span class="bb-font-family-select-expand" style="margin-top: 2px;">
                                                    <span class="px-acc-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </span></a>
                                            <ul class="bb-font-family-select-child">
                                                <li><a class="bb-get-font-weight-family" data-font-weight="900" data-font-family="'Montserrat', sans-serif" href="#" style="font-family: 'Montserrat', sans-serif; font-weight: 900;">Montserrat</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="800" data-font-family="'Montserrat', sans-serif" href="#" style="font-family: 'Montserrat', sans-serif; font-weight: 800;">Montserrat</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="700" data-font-family="'Montserrat', sans-serif" href="#" style="font-family: 'Montserrat', sans-serif; font-weight: 700;">Montserrat</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="500" data-font-family="'Montserrat', sans-serif" href="#" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Montserrat</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="400" data-font-family="'Montserrat', sans-serif" href="#" style="font-family: 'Montserrat', sans-serif; font-weight: 500;">Montserrat</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Montserrat', sans-serif" href="#" style="font-family: 'Montserrat', sans-serif; font-weight: 400;">Montserrat</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Montserrat', sans-serif" href="#" style="font-family: 'Montserrat', sans-serif; font-weight: 300;">Montserrat</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Montserrat', sans-serif" href="#" style="font-family: 'Montserrat', sans-serif; font-weight: 200;">Montserrat</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="100" data-font-family="'Montserrat', sans-serif" href="#" style="font-family: 'Montserrat', sans-serif; font-weight: 100;">Montserrat</a>
                                                </li>
                                            </ul>

                                        </li>
                                        <li class="bb-font-family-select-parent bb-font-family-select-parent-without-main">
                                            <a href="#" style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 700;">IBM
                                                Plex Sans<span class="bb-font-family-select-expand" style="margin-top: 2px;">
                                                    <span class="px-acc-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </span></a>
                                            <ul class="bb-font-family-select-child">
                                                <li><a class="bb-get-font-weight-family" data-font-weight="700" data-font-family="'IBM Plex Sans', sans-serif" href="#" style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 700;">IBM
                                                        Plex Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="500" data-font-family="'IBM Plex Sans', sans-serif" href="#" style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 600;">IBM
                                                        Plex Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="400" data-font-family="'IBM Plex Sans', sans-serif" href="#" style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 500;">IBM
                                                        Plex Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'IBM Plex Sans', sans-serif" href="#" style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 400;">IBM
                                                        Plex Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'IBM Plex Sans', sans-serif" href="#" style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 300;">IBM
                                                        Plex Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'IBM Plex Sans', sans-serif" href="#" style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 200;">IBM
                                                        Plex Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="100" data-font-family="'IBM Plex Sans', sans-serif" href="#" style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 100;">IBM
                                                        Plex Sans</a>
                                                </li>
                                            </ul>

                                        </li>
                                        <li class="bb-font-family-select-parent bb-font-family-select-parent-without-main">
                                            <a href="#" style="font-family: 'Alkatra', cursive; font-weight: 700;">Alkatra cursive <span class="bb-font-family-select-expand" style="margin-top: 2px;">
                                                    <span class="px-acc-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </span></a>
                                            <ul class="bb-font-family-select-child">
                                                <li><a class="bb-get-font-weight-family" data-font-weight="700" data-font-family="'Alkatra', cursive" href="#" style="font-family: 'Alkatra', cursive; font-weight: 700;">Alkatra cursive</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="500" data-font-family="'Alkatra', cursive" href="#" style="font-family: 'Alkatra', cursive; font-weight: 600;">Alkatra cursive</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="400" data-font-family="'Alkatra', cursive" href="#" style="font-family: 'Alkatra', cursive; font-weight: 500;">Alkatra cursive</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Alkatra', cursive" href="#" style="font-family: 'Alkatra', cursive; font-weight: 400;">Alkatra cursive</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li class="bb-font-family-select-parent bb-font-family-select-parent-without-main">
                                            <a href="#" style="font-family: 'Delicious Handrawn', cursive; font-weight: 700;">Delicious Handrawn cursive<span class="bb-font-family-select-expand" style="margin-top: 2px;">
                                                    <span class="px-acc-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </span></a>
                                            <ul class="bb-font-family-select-child">

                                                <li><a class="bb-get-font-weight-family" data-font-weight="700" data-font-family="'Delicious Handrawn', cursive" href="#" style="font-family: 'Delicious Handrawn', cursive; font-weight: 700;">Delicious Handrawn cursive</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="500" data-font-family="'Delicious Handrawn', cursive" href="#" style="font-family: 'Delicious Handrawn', cursive; font-weight: 600;">Delicious Handrawn cursive</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="400" data-font-family="'Delicious Handrawn', cursive" href="#" style="font-family: 'Delicious Handrawn', cursive; font-weight: 500;">Delicious Handrawn cursive</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Delicious Handrawn', cursive" href="#" style="font-family: 'Delicious Handrawn', cursive; font-weight: 400;">Delicious Handrawn cursive</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li class="bb-font-family-select-parent bb-font-family-select-parent-without-main">
                                            <a href="#" style="font-family: 'Edu NSW ACT Foundation', cursive; font-weight: 700;">Foundation cursive<span class="bb-font-family-select-expand" style="margin-top: 2px;">
                                                    <span class="px-acc-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </span></a>
                                            <ul class="bb-font-family-select-child">
                                                <li><a class="bb-get-font-weight-family" data-font-weight="700" data-font-family="'Edu NSW ACT Foundation', cursive" href="#" style="font-family: 'Edu NSW ACT Foundation', cursive; font-weight: 700;">Foundation cursive</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="500" data-font-family="'Edu NSW ACT Foundation', cursive" href="#" style="font-family: 'Edu NSW ACT Foundation', cursive; font-weight: 600;">Foundation cursive</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="400" data-font-family="'Edu NSW ACT Foundation', cursive" href="#" style="font-family: 'Edu NSW ACT Foundation', cursive; font-weight: 500;">Foundation cursive</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Edu NSW ACT Foundation', cursive" href="#" style="font-family: 'Edu NSW ACT Foundation', cursive; font-weight: 400;">Foundation cursive</a>
                                                </li>

                                            </ul>

                                        </li>

                                        <li class="bb-font-family-select-parent bb-font-family-select-parent-without-main">
                                            <a href="#" style="font-family: 'Josefin Sans', sans-serif; font-weight: 900;">Josefin Sans<span class="bb-font-family-select-expand" style="margin-top: 2px;">
                                                    <span class="px-acc-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </span></a>
                                            <ul class="bb-font-family-select-child">
                                                <li><a class="bb-get-font-weight-family" data-font-weight="900" data-font-family="'Josefin Sans', sans-serif" href="#" style="font-family: 'Josefin Sans', sans-serif; font-weight: 900;">Josefin Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="800" data-font-family="'Josefin Sans', sans-serif" href="#" style="font-family: 'Josefin Sans', sans-serif; font-weight: 800;">Josefin Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="700" data-font-family="'Josefin Sans', sans-serif" href="#" style="font-family: 'Josefin Sans', sans-serif; font-weight: 700;">Josefin Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="500" data-font-family="'Josefin Sans', sans-serif" href="#" style="font-family: 'Josefin Sans', sans-serif; font-weight: 600;">Josefin Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="400" data-font-family="'Josefin Sans', sans-serif" href="#" style="font-family: 'Josefin Sans', sans-serif; font-weight: 500;">Josefin Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Josefin Sans', sans-serif" href="#" style="font-family: 'Josefin Sans', sans-serif; font-weight: 400;">Josefin Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Josefin Sans', sans-serif" href="#" style="font-family: 'Josefin Sans', sans-serif; font-weight: 300;">Josefin Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Josefin Sans', sans-serif" href="#" style="font-family: 'Josefin Sans', sans-serif; font-weight: 200;">Josefin Sans</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="100" data-font-family="'Josefin Sans', sans-serif" href="#" style="font-family: 'Josefin Sans', sans-serif; font-weight: 100;">Josefin Sans</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li class="bb-font-family-select-parent bb-font-family-select-parent-without-main">
                                            <a href="#" style="font-family: 'Merriweather', serif; font-weight: 900;">Merriweather<span class="bb-font-family-select-expand" style="margin-top: 2px;">
                                                    <span class="px-acc-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </span></a>
                                            <ul class="bb-font-family-select-child">
                                                <li><a class="bb-get-font-weight-family" data-font-weight="900" data-font-family="'Merriweather', serif" href="#" style="font-family: 'Merriweather', serif; font-weight: 900;">Merriweather</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="700" data-font-family="'Merriweather', serif" href="#" style="font-family: 'Merriweather', serif; font-weight: 700;">Merriweather</a>
                                                </li>

                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Merriweather', serif" href="#" style="font-family: 'Merriweather', serif; font-weight: 400;">Merriweather</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Merriweather', serif" href="#" style="font-family: 'Merriweather', serif; font-weight: 300;">Merriweather</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li class="bb-font-family-select-parent bb-font-family-select-parent-without-main">
                                            <a href="#" style="font-family: 'Oswald', sans-serif; font-weight: 700;">Oswald<span class="bb-font-family-select-expand" style="margin-top: 2px;">
                                                    <span class="px-acc-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </span></a>
                                            <ul class="bb-font-family-select-child">
                                                <li><a class="bb-get-font-weight-family" data-font-weight="700" data-font-family="'Oswald', sans-serif" href="#" style="font-family: 'Oswald', sans-serif; font-weight: 700;">Oswald</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="500" data-font-family="'Oswald', sans-serif" href="#" style="font-family: 'Oswald', sans-serif; font-weight: 600;">Oswald</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="400" data-font-family="'Oswald', sans-serif" href="#" style="font-family: 'Oswald', sans-serif; font-weight: 500;">Oswald</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Oswald', sans-serif" href="#" style="font-family: 'Oswald', sans-serif; font-weight: 400;">Oswald</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Oswald', sans-serif" href="#" style="font-family: 'Oswald', sans-serif; font-weight: 300;">Oswald</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Oswald', sans-serif" href="#" style="font-family: 'Oswald', sans-serif; font-weight: 200;">Oswald</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li class="bb-font-family-select-parent bb-font-family-select-parent-without-main">
                                            <a href="#" style="font-family: 'Raleway', sans-serif; font-weight: 900;">Raleway<span class="bb-font-family-select-expand" style="margin-top: 2px;">
                                                    <span class="px-acc-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </span></a>
                                            <ul class="bb-font-family-select-child">
                                                <li><a class="bb-get-font-weight-family" data-font-weight="900" data-font-family="'Raleway', sans-serif" href="#" style="font-family: 'Raleway', sans-serif; font-weight: 900;">Raleway</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="800" data-font-family="'Raleway', sans-serif" href="#" style="font-family: 'Raleway', sans-serif; font-weight: 800;">Raleway</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="700" data-font-family="'Raleway', sans-serif" href="#" style="font-family: 'Raleway', sans-serif; font-weight: 700;">Raleway</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="500" data-font-family="'Raleway', sans-serif" href="#" style="font-family: 'Raleway', sans-serif; font-weight: 600;">Raleway</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="400" data-font-family="'Raleway', sans-serif" href="#" style="font-family: 'Raleway', sans-serif; font-weight: 500;">Raleway</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Raleway', sans-serif" href="#" style="font-family: 'Raleway', sans-serif; font-weight: 400;">Raleway</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Raleway', sans-serif" href="#" style="font-family: 'Raleway', sans-serif; font-weight: 300;">Raleway</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Raleway', sans-serif" href="#" style="font-family: 'Raleway', sans-serif; font-weight: 200;">Raleway</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="100" data-font-family="'Raleway', sans-serif" href="#" style="font-family: 'Raleway', sans-serif; font-weight: 100;">Raleway</a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li class="bb-font-family-select-parent bb-font-family-select-parent-without-main">
                                            <a href="#" style="font-family: 'Ubuntu', sans-serif; font-weight: 700;">Ubuntu<span class="bb-font-family-select-expand" style="margin-top: 2px;">
                                                    <span class="px-acc-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </span></a>
                                            <ul class="bb-font-family-select-child">
                                                <li><a class="bb-get-font-weight-family" data-font-weight="700" data-font-family="'Ubuntu', sans-serif" href="#" style="font-family: 'Ubuntu', sans-serif; font-weight: 700;">Ubuntu</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="400" data-font-family="'Ubuntu', sans-serif" href="#" style="font-family: 'Ubuntu', sans-serif; font-weight: 500;">Ubuntu</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Ubuntu', sans-serif" href="#" style="font-family: 'Ubuntu', sans-serif; font-weight: 400;">Ubuntu</a>
                                                </li>
                                                <li><a class="bb-get-font-weight-family" data-font-weight="300" data-font-family="'Ubuntu', sans-serif" href="#" style="font-family: 'Ubuntu', sans-serif; font-weight: 300;">Ubuntu</a>
                                                </li>
                                            </ul>

                                        </li>

                                    </ul>
                                </li>
                            </ul>

                        </div>
                        <div class="bb-edit-all-text-parent">
                            <label class="bb__new-text-color-picker">
                                <input type="color" class="colorPicker" value="Color">
                            </label>
                            <div class="bb__new-text-bold">
                                <img src="<?php echo plugin_dir_url(__FILE__) ?>../images/boldTextButton.png" alt="">
                            </div>
                            <div class="bb__new-text-italic">
                                <img src="<?php echo plugin_dir_url(__FILE__) ?>../images/italicButton.png" alt="">
                            </div>
                            <input class="bb__new-text-size bb-edit-text-size" type="number" value="14">
                        </div>
                        <button type="button" class="bob-add-input-field" draggable="true" ondragstart="bb_drag(event)">
                            New Textbox</button>
                    </div>
                </div>
            </div>
            <div class="px-acc-item">
                <div class="px-acc-head">
                    <span class="px-acc-title">
                        <img src="<?php echo plugin_dir_url(__FILE__) ?>../images/tamplate-icon.png" alt="">
                        Templates
                    </span>
                    <span class="px-acc-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                            <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <div class="px-acc-body">
                    <button type="button" class="bb-remove-template">Remove Template</button>
                    <div class="bb-active-template-btns">
                        <?php
                        $card_cats = get_terms(array(
                            'taxonomy'   => 'card-category',
                            'hide_empty' => true,
                        ));
                        foreach ($card_cats as $key => $card_cat) {
                        ?>
                            <button class="bb-active-template-btn-child" type="button" data-item="<?php echo $card_cat->term_id; ?>"><?php echo $card_cat->name; ?></button>
                        <?php
                        }
                        ?>
                    </div>
                    <div class="px-acc-content">
                        <div class="bb-add-business-card-bg-parent">
                            <?php
                            foreach ($card_cats as $key => $card_cat) {
                                $query = new WP_Query(array(
                                    'post_type' => 'card-template',
                                    'posts_per_page' => -1,
                                    'tax_query' => array(
                                        array(
                                            'taxonomy' => 'card-category',
                                            'field' => 'id',
                                            'terms' => $card_cat->term_id,
                                        )
                                    ),
                                ));
                                $i = 1;
                                if ($query->have_posts()) :
                                    while ($query->have_posts()) : $query->the_post();
                                        if ($i == 1) {
                            ?>
                                            <div class="bb-add-business-card-bg-child">
                                            <?php
                                        }
                                            ?>
                                            <div class="bb-add-business-card-bg-img item-<?php echo $card_cat->term_id; ?>" data-type="<?php echo 'item-' . $card_cat->term_id; ?>">
                                                <?php
                                                $imgsrc = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), "full");
                                                ?>
                                                <img src="<?php echo $imgsrc[0] ?>" alt="">
                                            </div>
                                            <?php
                                            if ($i == 2) {
                                            ?>
                                            </div>
                                    <?php
                                                $i = 0;
                                            }
                                            $i++;
                                        endwhile;
                                        wp_reset_postdata();
                                    endif;
                                    if ($i != 1) {
                                    ?>
                        </div>
                <?php
                                    }
                                }
                ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="bob-business-card-parent">
    <div class="bob-business-flip-card">
        <div class="bob-business-flip-card-inner bob-card-front-side">

            <div class="bob-business-flip-card-front">
                <div id="bb_innerDiv" class="innerDiv bb-front-inner-content">
                    <div class="bb-snapping-vertical-line"></div>
                    <div class="bb-snapping-horizontal-line"></div>
                </div>
            </div>

            <div class="bob-business-flip-card-back">
                <div id="container" class="innerDiv bb-back-inner-content">
					<div class="bb-snapping-vertical-line"></div>
                    <div class="bb-snapping-horizontal-line"></div>
                </div>
            </div>

        </div>
    </div>
    <div style="color:#E4584C;text-align: center;margin-top: 10px;" class="bb-busniess-error"></div>
    <div class="bb__bottom-two-btn-parent">
        <button type="button" class="bob-business-flip-card-alternet-btn">
            <!-- <div class="toggle-label toggle-label-off">Front</div>
                    <div class="toggle-switch"></div>
                    <div class="toggle-label toggle-label-on">Back</div> -->
            <img src="<?php echo plugin_dir_url(__FILE__) ?>../images/flipCardButton.png" alt="">
        </button>
        <button type="button" id="bb-business-card-cart" class="bb__addCartButton" data-id="<?php echo $post->ID; ?>">
            <img src="<?php echo plugin_dir_url(__FILE__) ?>../images/addCartButton.png" alt="">
        </button>
    </div>


    <div class="bb-convert-view-image">
        <div class="bb-convert-front-image"></div>
        <div class="bb-convert-back-image"></div>
    </div>
    <img src="" id="show-img" alt="">
    <img src="" id="show-img2" alt="">
</div>

<div class="bob-business-card-custom-design">


    <div id="px-acc001" class="px-app px-acc bb-margin-px-acc001">
        <div class="bob-business-card-upload-logo-paren">
            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label for="imageUpload">
                <img src="<?php echo plugin_dir_url(__FILE__) ?>../images/upload-icon.png" alt="">
                Upload Image</label>
        </div>
        <div class="px-acc-item">
            <div class="px-acc-head">
                <span class="px-acc-title">
                    <img src="<?php echo plugin_dir_url(__FILE__) ?>../images/bg-color-icon.png" alt="">
                    Background
                </span>
                <span class="px-acc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                        <path d="m32 38-17-17a1 1 90 0 0-3 3l19 19a1.4 1.4 90 0 0 2 0l19-19a1 1 90 0 0-3-3z" fill="currentColor"></path>
                    </svg>
                </span>
            </div>
            <div class="px-acc-body">
                <div class="bb-multiple-bg-color-parent">
                    <div class="bb-multiple-bg-color-child">
                        <label>
                            <input type="color" value="#fff" class="bb_all_color">
                        </label>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</div>

<!-- New Code -->

<div id="bb_contextmenu">
    <ul>
        <li class="bb_contextmenu__delete"><i class="fa-regular fa-trash-can"></i></li>
        <li class="bb_contextmenu__rotate"><i class="fa-solid fa-rotate"></i></li>
        <li class="bb_contextmenu__deselect"><i class="fa-solid fa-xmark"></i></li>
    </ul>
</div>

<div id="bb_contextmenu_send">
    <ul>
        <li class="bb-contextmenu-send-back"> <img src="<?php echo plugin_dir_url(__FILE__) ?>../images/front.png" alt=""> Send to back</li>
        <li class="bb-contextmenu-send-front"> <img src="<?php echo plugin_dir_url(__FILE__) ?>../images/back.png" alt=""> Bring to front</li>
    </ul>
</div>
<?php get_footer(); ?>