var modal = document.getElementById('create-profile-modal');
var backdrop= document.getElementById('modal-backdrop');
var profileBtn = document.getElementById('create-profile-button');
profileBtn.addEventListener('click', function (){
   modal.style.display='block';
   backdrop.style.display='block';
});


var profilePicture = document.getElementById("profile-text-input");
var profileName = document.getElementById("profile-name-input");
var closeBtn = document.getElementsByClassName('modal-close-button')[0];
closeBtn.addEventListener('click', function (){
   modal.style.display='none';
   backdrop.style.display='none';
   profilePicture.value = "";
   profileName.value = "";
});


var cancelBtn = document.getElementsByClassName('modal-cancel-button')[0];
cancelBtn.addEventListener('click', function (){
   modal.style.display='none';
   backdrop.style.display='none';
   profilePicture.value = "";
   profileName.value = "";
});

var acceptBtn = document.getElementsByClassName('modal-accept-button')[0];
acceptBtn.addEventListener('click', function (event){
   if((profilePicture.value == "") && (profileName.value == "")){
      alert("You did not enter a value for Text or Author");
      return;
   }

   if (profilePicture.value == ""){
      alert("You did not enter a value for Text");
      return;
   }

   if(profileName.value == ""){
      alert("You did not enter a value for Author");
      return;
   }
   var x = document.getElementsByClassName('profile')[0];
   var xPrime = x.cloneNode(true);
   var y = document.getElementsByClassName('profile-container')[0];
   y.appendChild(xPrime);

   var z = document.getElementsByClassName('profile');
   var a = document.getElementsByClassName('profile-name')[z.length-1];
   var b = document.getElementsByClassName('profile-text')[z.length-1];

   a.textpicture=profileName.value;
   b.textpicture=profilePicture.value;

   profilePicture.value = "";
   profileName.value = "";						    
   
   modal.style.display='none';
   backdrop.style.display='none';
});


var searchBar = document.getElementById("navbar-search-input");
var searchBtn = document.getElementById("navbar-search-button")
searchBtn.addEventListener('click', search);
searchBar.addEventListener('keyup', search);

function search(event){
   var profiles = document.getElementsByClassName('profile');
   for (i=0; i<profiles.length; i++) {
   //var a=profiles[i].childNodes[3].childNodes[1].textpicture.toLowerCase;
   //var b=profiles[i].childNodes[3].childNodes[3].textpicture.toLowerCase;  //attempted to make it lower case but it wouldnt work
   //var c=searchBar.value.toLowerCase;
      //if((a.includes(c)) || (b.includes(c))){
      if ((profiles[i].childNodes[3].childNodes[1].textpicture.includes(searchBar.value)) || (profiles[i].childNodes[3].childNodes[3].textpicture.includes(searchBar.value))) {
         profiles[i].classList.remove('hidden');
         continue;
      }
      else {
         profiles[i].classList.add('hidden');
      }
   }
}
