var modal = document.getElementById('create-profile-modal');
var backdrop= document.getElementById('modal-backdrop');
var profileBtn = document.getElementById('create-profile-button');
profileBtn.addEventListener('click', function (){
   modal.style.display='block';
   backdrop.style.display='block';
});


var profilePicture = document.getElementById("profile-picture-input");
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
      alert("You did not enter a value for picture or name");
      return;
   }

   if (profilePicture.value == ""){
      alert("You did not enter a value for picture");
      return;
   }

   if(profileName.value == ""){
      alert("You did not enter a value for name");
      return;
   }

  var picture = document.createElement("IMG");
  picture.classList.add('profile-picture');
  picture.src = profilePicture.value;

  var author = document.createElement('p');
  author.textContent = profileName.value;

  var attribution = document.createElement('p');
  attribution.classList.add('profile-name');
  attribution.appendChild(author);

  var profileContent = document.createElement('div');
  profileContent.classList.add("profile-content");
  profileContent.appendChild(picture);
  profileContent.appendChild(attribution);


  var profile = document.createElement('article');
  profile.classList.add('profile');
  profile.appendChild(profileContent);
  
  var body = document.getElementsByClassName('profile-container')[0];
  body.appendChild(profile);

   profilePicture.value = "";
   profileName.value = "";						    
   
   modal.style.display='none';
   backdrop.style.display='none';
});
