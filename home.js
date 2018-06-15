var modal = document.getElementById('create-twit-modal');
var backdrop= document.getElementById('modal-backdrop');
var twitBtn = document.getElementById('create-twit-button');
twitBtn.addEventListener('click', function (){
   modal.style.display='block';
   backdrop.style.display='block';
});


var twitText = document.getElementById("twit-text-input");
var twitAuthor = document.getElementById("twit-attribution-input");
var closeBtn = document.getElementsByClassName('modal-close-button')[0];
closeBtn.addEventListener('click', function (){
   modal.style.display='none';
   backdrop.style.display='none';
   twitText.value = "";
   twitAuthor.value = "";
});


var cancelBtn = document.getElementsByClassName('modal-cancel-button')[0];
cancelBtn.addEventListener('click', function (){
   modal.style.display='none';
   backdrop.style.display='none';
   twitText.value = "";
   twitAuthor.value = "";
});

var acceptBtn = document.getElementsByClassName('modal-accept-button')[0];
acceptBtn.addEventListener('click', function (event){
   if((twitText.value == "") && (twitAuthor.value == "")){
      alert("You did not enter a value for Text or Author");
      return;
   }

   if (twitText.value == ""){
      alert("You did not enter a value for Text");
      return;
   }

   if(twitAuthor.value == ""){
      alert("You did not enter a value for Author");
      return;
   }
   var x = document.getElementsByClassName('twit')[0];
   var xPrime = x.cloneNode(true);
   var y = document.getElementsByClassName('twit-container')[0];
   y.appendChild(xPrime);

   var z = document.getElementsByClassName('twit');
   var a = document.getElementsByClassName('twit-attribution')[z.length-1];
   var b = document.getElementsByClassName('twit-text')[z.length-1];

   a.textContent=twitAuthor.value;
   b.textContent=twitText.value;

   twitText.value = "";
   twitAuthor.value = "";						    
   
   modal.style.display='none';
   backdrop.style.display='none';
});


var searchBar = document.getElementById("navbar-search-input");
var searchBtn = document.getElementById("navbar-search-button")
searchBtn.addEventListener('click', search);
searchBar.addEventListener('keyup', search);

function search(event){
   var twits = document.getElementsByClassName('twit');
   for (i=0; i<twits.length; i++) {
   //var a=twits[i].childNodes[3].childNodes[1].textContent.toLowerCase;
   //var b=twits[i].childNodes[3].childNodes[3].textContent.toLowerCase;  //attempted to make it lower case but it wouldnt work
   //var c=searchBar.value.toLowerCase;
      //if((a.includes(c)) || (b.includes(c))){
      if ((twits[i].childNodes[3].childNodes[1].textContent.includes(searchBar.value)) || (twits[i].childNodes[3].childNodes[3].textContent.includes(searchBar.value))) {
         twits[i].classList.remove('hidden');
         continue;
      }
      else {
         twits[i].classList.add('hidden');
      }
   }
}
