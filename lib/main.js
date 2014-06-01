var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScript: "console.log('adding extra height to the document');i=document.createElement('p');i.style.height='500px';document.getElementsByTagName('body')[0].appendChild(i);"
});