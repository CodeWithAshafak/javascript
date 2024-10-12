
function check(){
    window.alert("welcome")
    window.confirm("this is confirm window");
    window.prompt("enter your marks this is prompt")
}

/*

BOM (Browser Object Model) and DOM (Document Object Model) in JavaScrip
******************************************

BOM (Browser Object Model):-

The Browser Object Model (BOM) is a set of objects that provide information about the browser and allow you to interact with it. The BOM is not part of the JavaScript language itself, but rather a set of objects that are exposed by the browser.

Key BOM objects:-
************************************************************************************

window: The global object that represents the browser window.

document: The document object that represents the HTML document.

navigator: Provides information about the browser and its capabilities.

screen: Provides information about the screen and its dimensions.

location: Provides information about the current URL and allows you to navigate to a new URL.

history: Provides information about the browser's history and allows you to navigate back and forth.

DOM (Document Object Model):-
************************************************************************************

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes, where each node represents an element, attribute, or piece of text.

Key DOM concepts:

Elements: Represent HTML elements, such as <div>, <p>, <img>, etc.
Nodes: Represent individual components of the document, such as elements, attributes, and text.
Tree structure: The DOM represents the document as a tree of nodes, where each node has a parent and child nodes.
Traversal: The process of navigating through the DOM tree to access specific nodes.
DOM methods and properties:

getElementById(): Returns an element with the specified ID.
getElementsByTagName(): Returns a collection of elements with the specified tag name.
querySelector(): Returns the first element that matches the specified selector.
innerHTML: Sets or gets the HTML content of an element.
appendChild(): Adds a new child node to an element.
removeChild(): Removes a child node from an element.
Relationship between BOM and DOM:

The BOM and DOM are closely related, as the DOM is a part of the BOM. The window object, which is part of the BOM, has a document property that points to the DOM.

Interview questions:

Here are some potential interview questions related to BOM and DOM:

What is the difference between the BOM and DOM?
Answer: The BOM provides information about the browser, while the DOM represents the structure of an HTML document.
How do you access the DOM from JavaScript?
Answer: You can access the DOM through the document object, which is part of the BOM.
What is the purpose of the window object in JavaScript?
Answer: The window object represents the browser window and provides access to the BOM and DOM.
How do you traverse the DOM tree in JavaScript?
Answer: You can traverse the DOM tree using methods such as getElementById(), getElementsByTagName(), and querySelector().
What is the difference between innerHTML and outerHTML?
Answer: innerHTML sets or gets the HTML content of an element, while outerHTML sets or gets the HTML content of an element, including the element itself.
*/