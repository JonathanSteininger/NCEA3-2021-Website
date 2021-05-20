 window.onload = function() {
   // device detection
   if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
     /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
     isMobile = true;
     // console.log("phone");
   }
   preLoad(pens);
   preLoad(artBoards);
   preLoad(paints);
   preLoad(books);
   preLoad(pencils);
   preLoad(other);
   navButton('home');
 }

 function preLoad(array) {
   for (var i = 0; i < array.length; ++i) {
     var img = new Image();
     img.src = array[i][0];
   }
 }
 var isMobile = false; //initiate as false

 var pens = [
   ['img/pens/pen0.jpg', "Black uni-ball Pen 5NZ$", 5],
   ['img/pens/pen1.jpg', 'Black ball pen 4NZ$', 4],
   ['img/pens/pen2.jpg', 'Blue ball pen 2NZ$', 2],
   ['img/pens/pen3.jpg', 'Blue uni-ball pen 5NZ$', 5],
   ['img/pens/pen4.jpg', 'Fountain pen 5NZ$', 5],
   ['img/pens/pen5.jpg', 'Uni+fine black pen bundle 6NZ$', 6],
   ['img/pens/pen6.jpg', 'Black pen bundle 6NZ$', 6]
 ]; // [src, name, value for math]
 var artBoards = [
   ['img/artBoards/canvas-plain.jpg', 'Small Canvas 10NZ$', 10],
   ['img/artBoards/canvas-bundle.jpg', 'Small Canvas Bundle 45NZ$', 4],
   ['img/artBoards/canvas-medium-portrait.jpg', 'Medium Canvas 15NZ$', 15],
   ['img/artBoards/canvas-smol.jpeg', 'Small Canvas Stand 5NZ$', 5],
   ['img/artBoards/canvas-stand.jpg', 'large Canvas Stand 80NZ$', 80]
 ]; //
 var paints = [
   ['img/paint/black.jpg', 'Black Paint 9NZ$', 9],
   ['img/paint/white.jpg', 'White Paint 9NZ$', 9],
   ['img/paint/blue.jpg', 'Blue Paint 7NZ$', 7],
   ['img/paint/brown.jpg', 'Brown Paint 7NZ$', 7],
   ['img/paint/green.jpg', 'Green Paint 7NZ$', 7],
   ['img/paint/orange.jpg', 'Orange Paint 7NZ$', 7],
   ['img/paint/purple.jpg', 'Purple Paint 7NZ$', 7],
   ['img/paint/red.jpg', 'Red Paint 7NZ$', 7],
   ['img/paint/yellow.jpg', 'Yellow Paint 7NZ$', 7]
 ]; //
 var books = [
   ['img/books/leaf-english.jpg', 'Loose Leaf Refill 10NZ$', 10],
   ['img/books/line-smol.jpg', 'Rulerd line Book 10NZ$', 10],
   ['img/books/note-very-smol.jpg', 'Notebook 8NZ$', 8],
   ['img/books/math-smol.jpg', 'Square Math Book 10NZ$', 10],
   ['img/books/graph-smol.jpg', 'Graph Book 11NZ$', 11],
   ['img/books/blank-smol.jpg', 'Blank Book 8NZ$', 8],
   ['img/books/binder.jpg', 'Ring Binder 15NZ$', 15],
   ['img/books/divider.jpg', 'Binder Dividers 4NZ$', 4]
 ]; //
 var pencils = [
   ['img/pencils/all-hardness-pencils.jpg', 'All Pencils 20NZ$', 20],
   ['img/pencils/pencil-lead.jpg', 'HP Pencils 5NZ$', 5],
   ['img/pencils/pencil-box-large.jpg', 'Large HP Pencils 30NZ$', 30],
   ['img/pencils/colour-pencil-expert.jpg', 'Large Colouring Pencil Box 15NZ$', 15],
   ['img/pencils/colour-pencil-box.jpg', 'Small Colouring Pencil Box 7NZ$', 7],
   ['img/pencils/eraser-plain.jpg', 'Eraser 2NZ$', 2],
   ['img/pencils/eraser-eco.jpg', 'Eco Eraser 3NZ$', 3],
   ['img/pencils/eraser-box.jpg', 'Eraser Box 15NZ$', 15],
   ['img/pencils/eraser-attached.jpg', 'attachable Erasers 5NZ$', 5]
 ]; //
 var other = [
   ['img/other/calculator.jpg', 'Calculator 30NZ$', 30],
   ['img/other/glue.jpg', 'Glue 15NZ$', 15],
   ['img/other/glue-stick.jpg', 'Glue Stick 5NZ$', 5],
   ['img/other/highlighter.jpeg', 'Highlighter 10NZ$', 10],
   ['img/other/paperclips.png', 'Paperclips 5NZ$', 5],
   ['img/other/ruler.jpg', 'Ruler Set 10NZ$', 10],
   ['img/other/ruler-large.jpg', 'Large Ruler 5NZ$', 5],
   ['img/other/scissor.jpg', 'Scissor 10NZ$', 10],
   ['img/other/sharpener.jpg', 'Sharpener 5NZ$', 5],
   ['img/other/stapler.jpg', 'Stapler 20NZ$', 20]
 ]; //
 var cartDisplayArray = [];
 var cartOpen = false;
 var cartItems = [];
 var navopen = true;
 var catagoryOpen = false;

 function buttonHighlight(open, button) {
   if (isMobile) {
     document.getElementById(button).style.fontSize = '6vw';
   }
   if (open) {
     document.getElementById(button).style.backgroundColor = 'rgb(100,100,100,1)';
   } else {
     document.getElementById(button).style.backgroundColor = 'rgb(1,1,1,0)';
   }
 }

 function home(x) {
   if (isMobile) {
     document.getElementById('home-container').style.width = '95vw';
     document.getElementById('home-text-main').style.fontSize = '3vw';
   } else {
     document.getElementById('home-container').style.width = '70vw';
     document.getElementById('home-text-main').style.fontSize = '2vw';
   }
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

 function cart(x) { //do this
   // if (isMobile) {
   //     document.getElementById('cart-container').style.width = '95vw';
   // } else {
   //     document.getElementById('cart-container').style.width = '70vw';
   // }
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
 var shopOpen = false;

 function shop(x) {
   // if (isMobile) {
   //     document.getElementById('items-container').style.width = '95vw';
   // } else {
   //     document.getElementById('items-container').style.width = '70vw';
   // }
   if (x == 'open') {
     document.getElementById('items-container').style.height = 'auto';
     itemSelect(pens, "pens");
   } else {
     document.getElementById('items-container').style.height = '0';
     buttonHighlight(false, "shopbutton");
     shopOpen = false;
   }
 }

 function navButton(x) {
   if (x == 'home') {
     home("open");
     shop("close");
     cart("close");
     navtab();
     window.scrollTo(0, 0);
   }
   if (x == 'shop') {
     home("close");
     shop("open");
     cart("close");
     navtab();
     window.scrollTo(0, 0);
   }
   if (x == 'cart') {
     home("close");
     shop("close");
     cart("open");
     navtab();
     window.scrollTo(0, 0);
   }
 }

 function cartDisplay() {
   if (cartOpen) {
     home("close");
     shop("open");
     cart("close");
     if(navopen){
       navtab();
     }
   } else {
     home("close");
     shop("close");
     cart("open");
     if(navopen){
       navtab();
     }
   }
 }

 function cartSum() {
   let s = 0;
   for (let i = 0; i < cartItems.length; i++) {
     s += cartItems[i][2];
   }
   return s;
 }

 function simplifyCart() {
   cartItems.sort(function(a, b) {
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
   cartDisplayArray.sort(function(a, b) {
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

 function loadCartItems() {
   simplifyCart();
   if (cartItems.length == 0) {
     document.getElementById('cart-container').innerHTML = '<h1 style="font-size:4vw; ">Cart</h1> <h1 style="font-size:4vw; ">Your cart is empty!</h1>';
     document.getElementById('cart-container').style.gridTemplateRows = '10vw 10vw auto';
   } else {
     if (isMobile) { //phone
       document.getElementById('cart-container').innerHTML = '<h1 style="font-size:4vw; ">Cart ' + cartSum() + 'NZ$</h1>';
       document.getElementById('cart-container').style.gridTemplateRows = 'repeat(' + cartDisplayArray.length + ',25vw) auto';
       for (let iii = 0; iii < cartDisplayArray.length; iii++) {
         let insert = '<div class="row-container-phone" id="cartitem' + iii + '"> <img src="' + cartDisplayArray[iii][0][0] + '" id="img' + iii + '"> <h3>' + cartDisplayArray[iii][0][1] + '</h3> <h5 onclick="removeItem(' + "cartDisplayArray[" + iii + "][0]" + ')" class="removeButton">remove</h5> <h3>X ' + cartDisplayArray[iii][1] + ' </h3> </div>';
         document.getElementById('cart-container').innerHTML += insert;
       }
     } else { //comp
       document.getElementById('cart-container').innerHTML = '<h1 style="font-size:4vw; ">Cart ' + cartSum() + 'NZ$</h1>';
       document.getElementById('cart-container').style.gridTemplateRows = 'repeat(' + cartDisplayArray.length + ',10vw) auto';
       for (let iii = 0; iii < cartDisplayArray.length; iii++) {
         let insert = '<div class="row-container-comp" id="cartitem' + iii + '"> <img src="' + cartDisplayArray[iii][0][0] + '" id="img' + iii + '"> <h3>' + cartDisplayArray[iii][0][1] + '</h3> <h5 onclick="removeItem(' + "cartDisplayArray[" + iii + "][0]" + ')" class="removeButton">remove</h5> <h3>X ' + cartDisplayArray[iii][1] + ' </h3> </div>';
         document.getElementById('cart-container').innerHTML += insert;
       }
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
     document.getElementById('cart-container').style.gridTemplateRows = '10vw 10vw auto';
   }
 }

 function itemSelect(item, x) {
   shopOpen = true;
   document.getElementById('items-container').innerHTML = '<h1>Shop</h1>';
   document.getElementById('items-container').style.height = 'auto';
   cart("close");
   home("close");
   buttonHighlight(true, "shopbutton");
   window.scrollTo(0, 0);

   for (let i = 0; i < item.length; i++) {
     let insert = '<div class="item" id="item' + i + '"> <img src="' + item[i][0] + '" id="img' + i + '"> <h3>' + item[i][1] + '</h3> <h5 onclick="additem(' + x + "[" + i + "]" + ')">add to cart</h5> </div>';
     document.getElementById('items-container').innerHTML += insert;
     if (isMobile) {
       if (navopen == false) {
         let pictureid = "img" + i;
         let itemid = "item" + i;
         document.getElementById(pictureid).style.maxWidth = 30 * 1.25 + 'vw';
         document.getElementById(pictureid).style.maxHeight = 20 * 1.25 + 'vw';
         document.getElementById(itemid).style.maxWidth = 30 * 1.25 + 'vw';
         document.getElementById(itemid).style.width = 30 * 1.25 + 'vw';
         document.getElementById(itemid).style.height = 40 * 1.25 + 'vw';
       } else {
         let pictureid = "img" + i;
         let itemid = "item" + i;
         document.getElementById(pictureid).style.maxWidth = 30 + 'vw';
         document.getElementById(pictureid).style.maxHeight = 20 + 'vw';
         document.getElementById(itemid).style.maxWidth = 30 + 'vw';
         document.getElementById(itemid).style.width = 30 + 'vw';
         document.getElementById(itemid).style.height = 40 + 'vw';
       }
     } else {
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
   // setTimeout(() => {
   //   for (let i = 0; i < item.length; i++) {
   //     let calculatemargin = (((Math.floor(window.innerWidth * 0.2) - document.getElementById("img" + i).clientHeight) / 2) / window.innerWidth) * 100;
   //     document.getElementById("img" + i).style.marginTop = calculatemargin + "vw";
   //     document.getElementById("img" + i).style.marginBottom = calculatemargin + "vw";
   //   }
   // }, 1000);
 }

 function additem(x) {
   cartItems.push(x);
 }

 function navtab() {
   if (navopen == true) { //close the nav tab
     document.getElementById("navbox").style.transition = 'width 0.5s';
     document.getElementById("navbox").style.width = '0px';
     document.getElementById("button").innerHTML = '>>';
     setTimeout(() => {
       // document.getElementById("navbox").style.position = 'relative';//here

     }, 400);
     if (shopOpen) {
       if (isMobile) {
         setTimeout(() => {
           document.getElementById("items-container").style.gridTemplateColumns = '1fr 1fr';
         }, 400);
         let count = getCount(document.getElementById("items-container"), false) - 1;
         for (let ii = 0; ii < count; ii++) {
           setTimeout(() => {
             let pictureid = "img" + ii;
             let itemid = "item" + ii;
             document.getElementById(pictureid).style.maxWidth = 30 * 1.25 + 'vw';
             document.getElementById(pictureid).style.maxHeight = 20 * 1.25 + 'vw';
             document.getElementById(itemid).style.maxWidth = 30 * 1.25 + 'vw';
             document.getElementById(itemid).style.width = 30 * 1.25 + 'vw';
             document.getElementById(itemid).style.height = 40 * 1.25 + 'vw';
           }, 400);
         } //30,20

       } else {
         setTimeout(() => {
           document.getElementById("items-container").style.gridTemplateColumns = '1fr 1fr 1fr';
         }, 400);
         let count = getCount(document.getElementById("items-container"), false) - 1;
         for (let ii = 0; ii < count; ii++) {
           setTimeout(() => {
             let pictureid = "img" + ii;
             let itemid = "item" + ii;
             document.getElementById(pictureid).style.maxWidth = '25vw';
             document.getElementById(itemid).style.maxWidth = '25vw';
           }, 400);
         }
       }
     }
     navopen = false;
   } else { //open the nav tab
     if (isMobile) {
       document.getElementById("navbox").style.width = '50vw';
       // document.getElementById("navbox").style.position = 'absolute';
     } else {
       document.getElementById("navbox").style.width = '15vw';
     }
     // document.getElementById("navbox").style.width = '15vw';
     document.getElementById("button").innerHTML = '<<';
     if (shopOpen) {
       if (isMobile) {
         setTimeout(() => {
           document.getElementById("items-container").style.gridTemplateColumns = '1fr';
         }, 50);
         let count = getCount(document.getElementById("items-container"), false) - 1;
         for (let ii = 0; ii < count; ii++) {
           setTimeout(() => {
             let pictureid = "img" + ii;
             let itemid = "item" + ii;
             document.getElementById(pictureid).style.maxWidth = 30 + 'vw';
             document.getElementById(pictureid).style.maxHeight = 20 + 'vw';
             document.getElementById(itemid).style.maxWidth = 30 + 'vw';
             document.getElementById(itemid).style.width = 30 + 'vw';
             document.getElementById(itemid).style.height = 40 + 'vw';
           }, 50);
         }
         setTimeout(() => {
           document.getElementById("navbox").style.transition = 'none';
         }, 500); //dope
       } else {
         setTimeout(() => {
           document.getElementById("items-container").style.gridTemplateColumns = '1fr 1fr';
         }, 50);
         let count = getCount(document.getElementById("items-container"), false) - 1;
         for (let ii = 0; ii < count; ii++) {
           setTimeout(() => {
             let pictureid = "img" + ii;
             let itemid = "item" + ii;
             document.getElementById(pictureid).style.maxWidth = '30vw';
             document.getElementById(itemid).style.maxWidth = '30vw';
           }, 50);
         }
         setTimeout(() => {
           document.getElementById("navbox").style.transition = 'none';
         }, 500); //dope
       }
     } //if shopopen end
     navopen = true;
   } //if navopen else end
 } //func end

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
