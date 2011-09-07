// ==UserScript==
// @name           Rainbownator
// @namespace      d.lidell@gmail.com
// @description    Makes the web a brighter* place.
// @include        *
// ==/UserScript==

cssheader = document.createElement('link');
cssheader.setAttribute('rel','stylesheet');
cssheader.setAttribute('type','text/css');
cssheader.setAttribute('href','http://www.uberphear.eclipse.co.uk/rainbows.css');
document.getElementsByTagName('body')[0].appendChild(cssheader);

tags = ['p','hr','table','a','img','hr','strong','em','h1','h2','h3','pre','div'];

for (i = 0; i < tags.length; i++)
{
	elements = document.getElementsByTagName(tags[i]);
	for (j = 0; j < elements.length; j++)
	{	
		if (!elements[j].hasAttribute('class')) { elements[j].setAttribute('class','catchadream'); }
	}
}