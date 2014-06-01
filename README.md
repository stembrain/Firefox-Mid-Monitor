Firefox-Mid-Monitor
===================

## Overview
This is a Firefox XPI extension that adds extra height to the window so content can be scrolled to the middle of your monitor.

To build the project, [install the cfx tool][1] first. Then run 'cfx xpi' from the root of this repo.

The file structure of this project is a modified version of the sample extension created by 'cfx init'. I changed the lib/main.js file to use the PageMods API instead of the Tabs API.

Tested on Firefox 26.

## References
* [Firefox Add-ons Tutorial: Getting Started][2]
* [Firefox Add-ons Tutorial: Modifying the Page Hosted by a Tab][3]
* [Firefox Add-ons API: page-mod][4]
* [Firefox Add-ons SDK][5]

[1]: https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation
[2]: https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_started
[3]: https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Modifying_the_Page_Hosted_by_a_Tab
[4]: https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod
[5]: https://developer.mozilla.org/en-US/Add-ons/SDK

