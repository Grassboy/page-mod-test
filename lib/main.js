var pageMod = require("sdk/page-mod");
pageMod.PageMod({
	include: "*",
	contentScript: 'document.title="Page Mod Test"'
});
