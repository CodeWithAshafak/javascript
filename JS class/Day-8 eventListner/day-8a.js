/*
Program Explanation:

The provided HTML, CSS, and JavaScript code is a simple image gallery implementation. Here's a breakdown of the code:

HTML:

The HTML structure consists of a section element with two article elements inside.
The first article element contains six div elements, each with an img element inside. These images are the thumbnails of the gallery.
The second article element contains a single div element with a larger img element inside, which will display the selected image.
Each thumbnail img element has an onmouseenter event listener that calls a JavaScript function when the mouse enters the image area.
JavaScript:

There are six JavaScript functions: change_img_one, change_img_two, ..., change_img_six. Each function is called when the corresponding thumbnail image is hovered over.
Inside each function, the code selects the larger img element with the class largeimg using document.querySelector.
The src attribute of the selected img element is then updated to the corresponding image URL (e.g., /image/d-1.jpg for change_img_one).
How it works:

When the user hovers over a thumbnail image, the corresponding JavaScript function is called (e.g., change_img_one when hovering over the first thumbnail).
The function updates the src attribute of the larger img element with the class largeimg to the URL of the corresponding image.
The larger img element is updated with the new image, displaying the selected image in the gallery.

================================================================================
Notes for an interview:

Here are some potential questions and notes that may be asked in an interview based on this code:

1>What is the purpose of the onmouseenter event listener?
Answer: The onmouseenter event listener is used to trigger a JavaScript function when the user hovers over a thumbnail image.

2> How does the code update the larger image when a thumbnail is hovered over?
Answer: The code uses document.querySelector to select the larger img element with the class largeimg, and then updates its src attribute with the URL of the corresponding image.
3> Why are there six separate JavaScript functions for updating the larger image?
Answer: This implementation uses a separate function for each thumbnail image, which can be improved by using a more dynamic approach, such as using a single function with a parameter to determine which image to display.

4> How could you improve the code to make it more efficient or scalable?
Answer: One way to improve the code is to use a single function with a parameter to determine which image to display, rather than having six separate functions. This would make the code more concise and easier to maintain.

5> What is the role of the alt attribute in the img element?
Answer: The alt attribute provides alternative text for the image, which is useful for accessibility purposes, such as for screen readers or when the image cannot be loaded.


*/



function change_img_one(){
    let selectimg = document.querySelector('.largeimg')
    selectimg.src = "/image/d-1.jpg"
}
function change_img_two(){ 
    let selectimg = document.querySelector('.largeimg')
    selectimg.src = "/image/d-2.jpg"
}
function change_img_three(){
    let selectimg = document.querySelector('.largeimg')
    selectimg.src = "/image/d-3.jpg"
}
function change_img_four(){
    let selectimg = document.querySelector('.largeimg')
    selectimg.src = "/image/d-4.jpg"
}
function change_img_five(){
    let selectimg = document.querySelector('.largeimg')
    selectimg.src = "/image/d-5.jpg"
}
function change_img_six(){
    let selectimg = document.querySelector('.largeimg')
    selectimg.src="/image/d-6.jpg"
}