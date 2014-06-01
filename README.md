Firefox-Mid-Monitor
===================

This is a Firefox XPI extension that adds extra height to the window so content can be scrolled to the middle of your monitor.

To build the project, [install the cfx tool](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation) first. Then run 'cfx xpi' from the root of this repo.

The file structure of this project is a modified version of the sample extension created by 'cfx init'. I changed the lib/main.js file to use the PageMods API instead of the Tabs API.

Tested on Firefox 26.


References:
https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_started
https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Modifying_the_Page_Hosted_by_a_Tab
https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod
https://developer.mozilla.org/en-US/Add-ons/SDK


