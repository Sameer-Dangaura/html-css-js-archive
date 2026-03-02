# JavaScript HTML DOM Node Lists

> Do visit: w3schools .


## The HTML DOM NodeList Object

- A NodeList object is a list (collection) of nodes extracted from a document.

- A NodeList object is almost the same as an HTMLCollection object encountered in `js-93_DOM_collections`.

> - Most browsers return a NodeList object for the method querySelectorAll().





## The Difference Between an HTMLCollection and a NodeList

- An HTMLCollection is always a `live collection`. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

- A NodeList is most often a `static collection`. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

- The `getElementsByClassName()` and `getElementsByTagName()` methods return a live HTMLCollection.

- The `querySelectorAll()` method returns a static NodeList.

- The `childNodes` property returns a live NodeList (if you don't know about `childNodes`, do visit: `DOM Navigation` - by w3schools ).

