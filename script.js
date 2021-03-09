 window.onload = function () {
     home('open');
 }

 function buttonHighlight(open, button) {
     if (open) {
         document.getElementById(button).style.backgroundColor = 'black';
     } else {
         document.getElementById(button).style.backgroundColor = 'rgb(1,1,1,0)';
     }
 }

 function home(x) {
     if (x == 'open') {
         document.getElementById('home-container').style.height = 'auto';
         document.getElementById('home-container').style.border = 'solid rgb(50, 50, 50, 1) 0.7vw';
         buttonHighlight(true, "homebutton");
     } else {
         document.getElementById('home-container').style.height = '0';
         document.getElementById('home-container').style.border = 'none';
         buttonHighlight(false, "homebutton");
     }
 }
 function cart(x) {
     if (x == 'open') {
         document.getElementById('cart-container').style.minHeight = '40vw';
         document.getElementById('cart-container').style.height = 'auto';
         cartOpen = true;
         buttonHighlight(true,"cartbutton");
         loadCartItems()
     } else {
         document.getElementById('cart-container').style.minHeight = '0';
         document.getElementById('cart-container').style.height = '0';
         buttonHighlight(false,"cartbutton");
         cartOpen = false;
     }
 }

 function shop(x) {
     if (x == 'open') {
         document.getElementById('items-container').style.height = 'auto';
         itemSelect(pens, "pens");
     } else {
         document.getElementById('items-container').style.height = '0';
         buttonHighlight(false,"shopbutton");
     }
 }

 function navButton(x) {
     if (x == 'home') {
         home("open");
         shop("close");
         cart("close");
     }
     if (x == 'shop') {
         home("close");
         shop("open");
         cart("close");
     }
     if (x == 'cart') {
         home("close");
         shop("close");
         cart("open");
     }
 }
 var cartOpen = false;

 function cartDisplay() {
     if (cartOpen) {
         home("close");
         shop("open");
         cart("close");
     } else {
         home("close");
         shop("close");
         cart("open");
     }
 }

 function loadCartItems() {
     document.getElementById('cart-container').innerHTML = '';
     document.getElementById('cart-container').style.gridTemplateRows = 'repeat(' + cartItems.length + ',10vw) auto';
     for (let iii = 0; iii < cartItems.length; iii++) {
         let insert = '<div class="row-container" id="cartitem' + iii + '"> <img src="' + cartItems[iii][0] + '" id="img' + iii + '"> <h3>' + cartItems[iii][1] + '</h3> <h5 onclick="removeItem(' + iii + ')">remove</h5> </div>';
         document.getElementById('cart-container').innerHTML += insert;
     }
 }

 function removeItem(x) {
     cartItems[x] = 'empty';
     cartItems = cartItems.filter(word => word != 'empty');
     loadCartItems();
 }

 var pens = [
        ['img/pens/pen0.jpg', "Black uni-ball Pen"],
        ['img/pens/pen1.jpg', 'black ball pen'],
        ['img/pens/pen2.jpg', 'blue ball pen'],
        ['img/pens/pen3.jpg', 'blue uni-ball pen'],
        ['img/pens/pen4.jpg', 'fountain pen'],
        ['img/pens/pen5.jpg', 'uni+fine black pen bundle'],
        ['img/pens/pen6.jpg', 'black pen bundle']
    ]; // [src, name]
 var artBoards = [
        ['img/artBoards/canvas-plain.jpg', 'Small Canvas'],
        ['img/artBoards/canvas-bundle.jpg', 'Small Canvas Bundle'],
        ['img/artBoards/canvas-medium-portrait.jpg', 'Medium Canvas'],
        ['img/artBoards/canvas-smol.jpeg', 'Small Canvas Stand'],
        ['img/artBoards/canvas-stand.jpg', 'large Canvas Stand']
    ]; //
 var paints = [
        ['img/paint/black.jpg', 'Black Paint'],
        ['img/paint/white.jpg', 'White Paint'],
        ['img/paint/blue.jpg', 'Blue Paint'],
        ['img/paint/brown.jpg', 'Brown Paint'],
        ['img/paint/green.jpg', 'Green Paint'],
        ['img/paint/orange.jpg', 'Orange Paint'],
        ['img/paint/purple.jpg', 'Purple Paint'],
        ['img/paint/red.jpg', 'Red Paint'],
        ['img/paint/yellow.jpg', 'Yellow Paint']
    ]; //
 var books = [
        ['img/books/leaf-english.jpg', 'Loose Leaf Refill'],
        ['img/books/line-smol.jpg', 'Rulerd line Book'],
        ['img/books/note-very-smol.jpg', 'Notebook'],
        ['img/books/math-smol.jpg', 'Square Math Book'],
        ['img/books/graph-smol.jpg', 'Graph Book'],
        ['img/books/blank-smol.jpg', 'Blank Book'],
        ['img/books/binder.jpg', 'Ring Binder'],
        ['img/books/divider.jpg', 'Binder Dividers']
    ]; //
 var pencils = [
        ['img/pencils/all-hardness-pencils.jpg', 'All Pencils'],
        ['img/pencils/pencil-lead.jpg', 'HP Pencils'],
        ['img/pencils/pencil-box-large.jpg', 'Large HP Pencils'],
        ['img/pencils/colour-pencil-expert.jpg', 'Large Colouring Pencil Box'],
        ['img/pencils/colour-pencil-box.jpg', 'Small Colouring Pencil Box'],
        ['img/pencils/eraser-plain.jpg', 'Eraser'],
        ['img/pencils/eraser-eco.jpg', 'Eco Eraser'],
        ['img/pencils/eraser-box.jpg', 'Eraser Box'],
        ['img/pencils/eraser-attached.jpg', 'attachable Erasers']
    ]; //
 var other = [
        ['img/other/calculator.jpg', 'Calculator'],
        ['img/other/glue.jpg', 'Glue'],
        ['img/other/glue-stick.jpg', 'Glue Stick'],
        ['img/other/highlighter.jpeg', 'Highlighter'],
        ['img/other/paperclips.png', 'Paperclips'],
        ['img/other/ruler.jpg', 'Ruler Set'],
        ['img/other/ruler-large.jpg', 'Large Ruler'],
        ['img/other/scissor.jpg', 'Scissor'],
        ['img/other/sharpener.jpg', 'Sharpener'],
        ['img/other/stapler.jpg', 'Stapler']
    ]; //

 var cartItems = [];

 function itemSelect(item, x) {
     document.getElementById('items-container').innerHTML = '';
     document.getElementById('items-container').style.height = 'auto';
     cart("close");
     home("close");
     buttonHighlight(true,"shopbutton");

     for (let i = 0; i < item.length; i++) {
         let insert = '<div class="item" id="item' + i + '"> <img src="' + item[i][0] + '" id="img' + i + '"> <h3>' + item[i][1] + '</h3> <h5 onclick="additem(' + x + "[" + i + "]" + ')">add to cart</h5> </div>';
         document.getElementById('items-container').innerHTML += insert;
         if (navopen == false) {
             let pictureid = "img" + i;
             let itemid = "item" + i;
             document.getElementById(pictureid).style.maxWidth = '25vw';
             document.getElementById(itemid).style.maxWidth = '25vw';
         } else {
             let pictureid = "img" + i;
             let itemid = "item" + i;
             document.getElementById(pictureid).style.maxWidth = '30vw';
             document.getElementById(itemid).style.maxWidth = '30vw';
         }
     }
 }

 function additem(x) {
     cartItems.push(x);
 }

 var navopen = true;

 function navtab() {
     if (navopen == true) {
         document.getElementById("navbox").style.transition = 'width 0.5s';
         document.getElementById("navbox").style.width = '0px';
         document.getElementById("button").innerHTML = '>>';
         setTimeout(() => {
             document.getElementById("items-container").style.gridTemplateColumns = '1fr 1fr 1fr';
         }, 400);
         let count = getCount(document.getElementById("items-container"), false);
         for (let ii = 0; ii < count; ii++) {
             setTimeout(() => {
                 let pictureid = "img" + ii;
                 let itemid = "item" + ii;
                 document.getElementById(pictureid).style.maxWidth = '25vw';
                 document.getElementById(itemid).style.maxWidth = '25vw';
             }, 400);
         }
         navopen = false;
     } else {
         document.getElementById("navbox").style.width = '15vw';
         document.getElementById("button").innerHTML = '<<';
         setTimeout(() => {
             document.getElementById("items-container").style.gridTemplateColumns = '1fr 1fr';
         }, 50);
         let count = getCount(document.getElementById("items-container"), false);
         for (let ii = 0; ii < count; ii++) {
             setTimeout(() => {
                 let pictureid = "img" + ii;
                 let itemid = "item" + ii;
                 document.getElementById(pictureid).style.maxWidth = '30vw';
                 document.getElementById(itemid).style.maxWidth = '30vw';
             }, 50);
         }
         navopen = true;
         setTimeout(() => {
             document.getElementById("navbox").style.transition = 'none';
         }, 500); //dope
     }
 }

 var catagoryOpen = false;

 function closetab() {
     if (catagoryOpen == true) {
         catagoryOpen = false;
         document.getElementById('catagory-tab').style.height = "0";
         document.getElementById('catagory-tab').style.overflowY = "hidden";
         document.getElementById('catagory-tab').style.borderBottom = "none";
     }
 }

 function catagoryTab() {
     if (catagoryOpen == false) {
         document.getElementById('catagory-tab').style.height = "30vh";
         document.getElementById('catagory-tab').style.overflowY = "scroll";
         document.getElementById('catagory-tab').style.borderBottom = "solid black 2px";
         setTimeout(() => {
             catagoryOpen = true;
         }, 1000); //dope
     } else {
         catagoryOpen = false;
         document.getElementById('catagory-tab').style.height = "0";
         document.getElementById('catagory-tab').style.overflowY = "hidden";
         document.getElementById('catagory-tab').style.borderBottom = "none";
     }
 }

 function getCount(parent, getChildrensChildren) { //counts the amount of children in a parent
     var relevantChildren = 0;
     var children = parent.childNodes.length;
     for (var i = 0; i < children; i++) {
         if (parent.childNodes[i].nodeType != 3) {
             if (getChildrensChildren) //if true it will also count sub children eg.<parent> <child> <sub-child> </sub-child> </child> </parent>
                 relevantChildren += getCount(parent.childNodes[i], true);
             relevantChildren++;
         }
     }
     return relevantChildren;
 }
