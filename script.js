 window.onload = function () {
     home('open');
 }
 var pens = [
        ['img/pens/pen0.jpg', "Black uni-ball Pen 5NZD$", 5],
        ['img/pens/pen1.jpg', 'black ball pen 4NZD$', 4],
        ['img/pens/pen2.jpg', 'blue ball pen 2NZD$', 2],
        ['img/pens/pen3.jpg', 'blue uni-ball pen 5NZD$', 5],
        ['img/pens/pen4.jpg', 'fountain pen 5NZD$', 5],
        ['img/pens/pen5.jpg', 'uni+fine black pen bundle 6NZD$', 6],
        ['img/pens/pen6.jpg', 'black pen bundle 6NZD$', 6]
    ]; // [src, name]
 var artBoards = [
        ['img/artBoards/canvas-plain.jpg', 'Small Canvas 10NZD$', 10],
        ['img/artBoards/canvas-bundle.jpg', 'Small Canvas Bundle 45NZD$', 4],
        ['img/artBoards/canvas-medium-portrait.jpg', 'Medium Canvas 15NZD$', 15],
        ['img/artBoards/canvas-smol.jpeg', 'Small Canvas Stand 5NZD$', 5],
        ['img/artBoards/canvas-stand.jpg', 'large Canvas Stand 80NZD$', 80]
    ]; //
 var paints = [
        ['img/paint/black.jpg', 'Black Paint 9NZD$', 9],
        ['img/paint/white.jpg', 'White Paint 9NZD$', 9],
        ['img/paint/blue.jpg', 'Blue Paint 7NZD$', 7],
        ['img/paint/brown.jpg', 'Brown Paint 7NZD$', 7],
        ['img/paint/green.jpg', 'Green Paint 7NZD$', 7],
        ['img/paint/orange.jpg', 'Orange Paint 7NZD$', 7],
        ['img/paint/purple.jpg', 'Purple Paint 7NZD$', 7],
        ['img/paint/red.jpg', 'Red Paint 7NZD$', 7],
        ['img/paint/yellow.jpg', 'Yellow Paint 7NZD$', 7]
    ]; //
 var books = [
        ['img/books/leaf-english.jpg', 'Loose Leaf Refill 10NZD$', 10],
        ['img/books/line-smol.jpg', 'Rulerd line Book 10NZD$', 10],
        ['img/books/note-very-smol.jpg', 'Notebook 8NZD$', 8],
        ['img/books/math-smol.jpg', 'Square Math Book 10NZD$', 10],
        ['img/books/graph-smol.jpg', 'Graph Book 11NZD$', 11],
        ['img/books/blank-smol.jpg', 'Blank Book 8NZD$', 8],
        ['img/books/binder.jpg', 'Ring Binder 15NZD$', 15],
        ['img/books/divider.jpg', 'Binder Dividers 4NZD$', 4]
    ]; //
 var pencils = [
        ['img/pencils/all-hardness-pencils.jpg', 'All Pencils 20NZD$', 20],
        ['img/pencils/pencil-lead.jpg', 'HP Pencils 5NZD$', 5],
        ['img/pencils/pencil-box-large.jpg', 'Large HP Pencils 30NZD$', 30],
        ['img/pencils/colour-pencil-expert.jpg', 'Large Colouring Pencil Box 15NZD$', 15],
        ['img/pencils/colour-pencil-box.jpg', 'Small Colouring Pencil Box 7NZD$', 7],
        ['img/pencils/eraser-plain.jpg', 'Eraser 2NZD$', 2],
        ['img/pencils/eraser-eco.jpg', 'Eco Eraser 3NZD$', 3],
        ['img/pencils/eraser-box.jpg', 'Eraser Box 15NZD$', 15],
        ['img/pencils/eraser-attached.jpg', 'attachable Erasers 5NZD$', 5]
    ]; //
 var other = [
        ['img/other/calculator.jpg', 'Calculator 30NZD$', 30],
        ['img/other/glue.jpg', 'Glue 15NZD$', 15],
        ['img/other/glue-stick.jpg', 'Glue Stick 5NZD$', 5],
        ['img/other/highlighter.jpeg', 'Highlighter 10NZD$', 10],
        ['img/other/paperclips.png', 'Paperclips 5NZD$', 5],
        ['img/other/ruler.jpg', 'Ruler Set 10NZD$', 10],
        ['img/other/ruler-large.jpg', 'Large Ruler 5NZD$', 5],
        ['img/other/scissor.jpg', 'Scissor 10NZD$', 10],
        ['img/other/sharpener.jpg', 'Sharpener 5NZD$', 5],
        ['img/other/stapler.jpg', 'Stapler 20NZD$', 20]
    ]; //
 var cartDisplayArray = [];
 var cartOpen = false;
 var cartItems = [];
 var navopen = true;
 var catagoryOpen = false;

 function simplifyCart() {
     cartItems.sort(function (a, b) {
         let A = a[1].toUpperCase(); // ignore upper and lowercase
         let B = b[1].toUpperCase(); // ignore upper and lowercase
         if (A < B) {
             return -1;
         }
         if (A > B) {
             return 1;
         }
         return 0;
     });
     cartDisplayArray = [];
     let tempitem = cartItems[0];
     let counter = 1;
     for (let i = 1; i < cartItems.length; i++) {
         if (tempitem == cartItems[i]) {
             counter++;
         } else {
             cartDisplayArray.push([tempitem, counter]);
             tempitem = cartItems[i];
             counter = 1;
         }
     }
     cartDisplayArray.push([tempitem, counter]);
     cartDisplayArray.sort(function (a, b) {
         let A = a[0][1].toUpperCase(); // ignore upper and lowercase
         let B = b[0][1].toUpperCase(); // ignore upper and lowercase
         if (A < B) {
             return -1;
         }
         if (A > B) {
             return 1;
         }
         return 0;
     });
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
         buttonHighlight(true, "cartbutton");
         loadCartItems()
     } else {
         document.getElementById('cart-container').style.minHeight = '0';
         document.getElementById('cart-container').style.height = '0';
         buttonHighlight(false, "cartbutton");
         cartOpen = false;
     }
 }

 function shop(x) {
     if (x == 'open') {
         document.getElementById('items-container').style.height = 'auto';
         itemSelect(pens, "pens");
     } else {
         document.getElementById('items-container').style.height = '0';
         buttonHighlight(false, "shopbutton");
     }
 }

 function navButton(x) {
     if (x == 'home') {
         home("open");
         shop("close");
         cart("close");
         window.scrollTo(0, 0);
     }
     if (x == 'shop') {
         home("close");
         shop("open");
         cart("close");
         window.scrollTo(0, 0);
     }
     if (x == 'cart') {
         home("close");
         shop("close");
         cart("open");
         window.scrollTo(0, 0);
     }
 }


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

 function cartSum() {
     let s = 0;
     for (let i = 0; i < cartItems.length; i++) {
         s += cartItems[i][2];
     }
     return s;
 }

 function loadCartItems() {
     simplifyCart();
     if (cartItems.length == 0) {
         document.getElementById('cart-container').innerHTML = '<h1 style="font-size:4vw; ">Cart</h1> <h1 style="font-size:4vw; ">Your cart is empty!</h1>';
     } else {
         document.getElementById('cart-container').innerHTML = '<h1 style="font-size:4vw; ">Cart ' + cartSum() + 'nzd$</h1>';
         document.getElementById('cart-container').style.gridTemplateRows = 'repeat(' + cartDisplayArray.length + ',10vw) auto';
         for (let iii = 0; iii < cartDisplayArray.length; iii++) {
             let insert = '<div class="row-container" id="cartitem' + iii + '"> <img src="' + cartDisplayArray[iii][0][0] + '" id="img' + iii + '"> <h3>' + cartDisplayArray[iii][0][1] + '</h3> <h5 onclick="removeItem(' + "cartDisplayArray[" + iii + "][0]" + ')" class="removeButton">remove</h5> <h3>X ' + cartDisplayArray[iii][1] + ' </h3> </div>';
             document.getElementById('cart-container').innerHTML += insert;
         }
     }
 }

 function removeItem(x) {
     for (let ii = 0; ii < cartItems.length; ii++) {
         if (cartItems[ii] == x) {
             cartItems[ii] = 'null';
             break;
         }

     }
     cartItems = cartItems.filter(word => word != 'null');
     if (cartItems.length > 0) {
         loadCartItems();
     } else {
         document.getElementById('cart-container').innerHTML = '<h1 style="font-size:4vw; ">Cart</h1> <h1 style="font-size:4vw; ">Your cart is empty!</h1>';
     }
 }





 function itemSelect(item, x) {
     document.getElementById('items-container').innerHTML = '<h1>Shop</h1>';
     document.getElementById('items-container').style.height = 'auto';
     cart("close");
     home("close");
     buttonHighlight(true, "shopbutton");
     window.scrollTo(0, 0);

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
         document.getElementById('catagory-tab').scrollTo(0, 0);;
         setTimeout(() => {
             catagoryOpen = true;
         }, 300); //dope
     } else {
         catagoryOpen = false;
         document.getElementById('catagory-tab').style.height = "0";
         document.getElementById('catagory-tab').style.overflowY = "hidden";
         document.getElementById('catagory-tab').style.borderBottom = "none";
     }
 }

 function getCount(parent, getChildrensChildren) { //counts the amount of children in a parent
     let relevantChildren = 0;
     let children = parent.childNodes.length;
     for (let i = 0; i < children; i++) {
         if (parent.childNodes[i].nodeType != 3) {
             if (getChildrensChildren) //if true it will also count sub children eg.<parent> <child> <sub-child> </sub-child> </child> </parent>
                 relevantChildren += getCount(parent.childNodes[i], true);
             relevantChildren++;
         }
     }
     return relevantChildren;
 }
