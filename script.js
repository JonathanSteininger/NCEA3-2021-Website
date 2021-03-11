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
        ['img/pens/pen0.jpg', "Black uni-ball Pen 5NZD$"],
        ['img/pens/pen1.jpg', 'black ball pen 4NZD$'],
        ['img/pens/pen2.jpg', 'blue ball pen 2NZD$'],
        ['img/pens/pen3.jpg', 'blue uni-ball pen 5NZD$'],
        ['img/pens/pen4.jpg', 'fountain pen 5NZD$'],
        ['img/pens/pen5.jpg', 'uni+fine black pen bundle 6NZD$'],
        ['img/pens/pen6.jpg', 'black pen bundle 6NZD$']
    ]; // [src, name]
 var artBoards = [
        ['img/artBoards/canvas-plain.jpg', 'Small Canvas 10NZD$'],
        ['img/artBoards/canvas-bundle.jpg', 'Small Canvas Bundle 45NZD$'],
        ['img/artBoards/canvas-medium-portrait.jpg', 'Medium Canvas 15NZD$'],
        ['img/artBoards/canvas-smol.jpeg', 'Small Canvas Stand 5NZD$'],
        ['img/artBoards/canvas-stand.jpg', 'large Canvas Stand 80NZD$']
    ]; //
 var paints = [
        ['img/paint/black.jpg', 'Black Paint 9NZD$'],
        ['img/paint/white.jpg', 'White Paint 9NZD$'],
        ['img/paint/blue.jpg', 'Blue Paint 7NZD$'],
        ['img/paint/brown.jpg', 'Brown Paint 7NZD$'],
        ['img/paint/green.jpg', 'Green Paint 7NZD$'],
        ['img/paint/orange.jpg', 'Orange Paint 7NZD$'],
        ['img/paint/purple.jpg', 'Purple Paint 7NZD$'],
        ['img/paint/red.jpg', 'Red Paint 7NZD$'],
        ['img/paint/yellow.jpg', 'Yellow Paint 7NZD$']
    ]; //
 var books = [
        ['img/books/leaf-english.jpg', 'Loose Leaf Refill 10NZD$'],
        ['img/books/line-smol.jpg', 'Rulerd line Book 10NZD$'],
        ['img/books/note-very-smol.jpg', 'Notebook 8NZD$'],
        ['img/books/math-smol.jpg', 'Square Math Book 10NZD$'],
        ['img/books/graph-smol.jpg', 'Graph Book 11NZD$'],
        ['img/books/blank-smol.jpg', 'Blank Book 8NZD$'],
        ['img/books/binder.jpg', 'Ring Binder 15NZD$'],
        ['img/books/divider.jpg', 'Binder Dividers 4NZD$']
    ]; //
 var pencils = [
        ['img/pencils/all-hardness-pencils.jpg', 'All Pencils 20NZD$'],
        ['img/pencils/pencil-lead.jpg', 'HP Pencils 5NZD$'],
        ['img/pencils/pencil-box-large.jpg', 'Large HP Pencils 30NZD$'],
        ['img/pencils/colour-pencil-expert.jpg', 'Large Colouring Pencil Box 15NZD$'],
        ['img/pencils/colour-pencil-box.jpg', 'Small Colouring Pencil Box 7NZD$'],
        ['img/pencils/eraser-plain.jpg', 'Eraser 2NZD$'],
        ['img/pencils/eraser-eco.jpg', 'Eco Eraser 3NZD$'],
        ['img/pencils/eraser-box.jpg', 'Eraser Box 15NZD$'],
        ['img/pencils/eraser-attached.jpg', 'attachable Erasers 5NZD$']
    ]; //
 var other = [
        ['img/other/calculator.jpg', 'Calculator 30NZD$'],
        ['img/other/glue.jpg', 'Glue 15NZD$'],
        ['img/other/glue-stick.jpg', 'Glue Stick 5NZD$'],
        ['img/other/highlighter.jpeg', 'Highlighter 10NZD$'],
        ['img/other/paperclips.png', 'Paperclips 5NZD$'],
        ['img/other/ruler.jpg', 'Ruler Set 10NZD$'],
        ['img/other/ruler-large.jpg', 'Large Ruler 5NZD$'],
        ['img/other/scissor.jpg', 'Scissor 10NZD$'],
        ['img/other/sharpener.jpg', 'Sharpener 5NZD$'],
        ['img/other/stapler.jpg', 'Stapler 20NZD$']
    ]; //

 var cartItems = [];

 function itemSelect(item, x) {
     document.getElementById('items-container').innerHTML = '';
     document.getElementById('items-container').style.height = 'auto';
     cart("close");
     home("close");
     buttonHighlight(true,"shopbutton");
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
         document.getElementById('catagory-tab').scrollTo(0, 0);;
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
