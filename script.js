// Navbar Show and Hide
var navbarIcon = document.getElementById('navbar-icon');
navbarIcon.addEventListener("click",showHideNavBar);
var overlay = document.getElementById('overlay');
overlay.addEventListener("click",closeNavbar);

var navbar = document.getElementById('navbar');

function showHideNavBar() {
  navbar.classList.toggle("active");
  navbarIcon.classList.toggle("active");
  overlay.classList.toggle("overlay");
}

function closeNavbar() {
  navbar.classList.toggle("active");
  navbarIcon.classList.toggle("active");
  overlay.classList.toggle("overlay");
}


// Contact Us Validation
var username = document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message');

username.addEventListener("input",usernameCheck);
email.addEventListener("input",emailCheck);
message.addEventListener("input",messageCheck);

var nameValid = false;
var emailValid = false;
var messageValid = false;

function usernameCheck() {

  let filter = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;

  if(username.value == "") {
    nameValid = false;
    showErrorFor('name','Name should not be Empty');
  }
  else if(!filter.test(username.value)) {
    nameValid = false;
    showErrorFor('name','Name should be Valid');
  }
  else {
    nameValid = true;
    setSuccessFor('name');
  }
}

function emailCheck() {

  let filter = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+\@(([a-zA-Z0-9\-]{3,6})+\.)+([a-zA-Z0-9]{3,4})+$/;

  if(email.value == "") {
    emailValid = false;
    showErrorFor('email','Email should not be Empty');
  }
  else if(!filter.test(email.value)) {
    emailValid = false;
    showErrorFor('email','Email should be Valid');
  }
  else {
    emailValid = true;
    setSuccessFor('email');
  }
}

function messageCheck() {

  if(message.value == "") {
    messageValid = false;
    showErrorFor('message','Message should not be Empty');
  }
  else {
    messageValid = true;
    setSuccessFor('message');
  }
}

function showErrorFor(input, message) {
  var errorInput = document.querySelector('.'+input);
  errorInput.style.visibility = "visible";
  errorInput.innerHTML = message;
  checkAllValid();
}

function setSuccessFor(input) {
  var successInput = document.querySelector('.'+input);
  successInput.style.visibility = "hidden";
  checkAllValid();
}

function checkAllValid() {
  if(nameValid === true && emailValid === true && messageValid === true) {
    submitBtn.disabled = false;
  }
  else {
    submitBtn.disabled = true;
  }
}

var submitBtn = document.getElementById('submit');
submitBtn.addEventListener("click",submit);

// Popup
var popup = document.querySelector('.popup');
var popupClose = document.querySelector('.close');
var body = document.querySelector('body');

var responseContainer = document.querySelector('.userResonseData');
// console.log(responseContainer);

popup.addEventListener('click',closePopup);
popupClose.addEventListener('click',closePopup);

function closePopup() {
  popup.classList.remove('popup-active');
  body.classList.remove('overlay-body');
}

function viewResponseData() {
  responseContainer.children[0].innerHTML = "Name : " + username.value;
  responseContainer.children[1].innerHTML = "Email : " + email.value;
  responseContainer.children[2].innerHTML = message.value;
}


function submit() {
  popup.classList.add('popup-active');
  body.classList.add('overlay-body');
  viewResponseData();
}


// Scroll Animation

var animationElements = document.querySelectorAll('.animation-init');
var navLinks = document.querySelectorAll('.nav-link');

var blockSections = document.querySelectorAll('.block-section');

window.addEventListener('scroll', function () {

  animationElements.forEach(items => {
    if(isVisible(items)) {
      items.classList.add('animate');
    }
    else {
      items.classList.remove('animate');
    }
  });

  // NavLinks Highlight
  blockSections.forEach(sections => {
    if(isVisible(sections)) {
      idValue = sections.getAttribute('id');
      isSectionVisible();     
    }
  });

}, false);

// Element fully visible in Viewport
function isInViewPort(element) {
  var bounding = element.getBoundingClientRect();
  if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
      return true;
  } else {
      return false;
  }
}

// Element partially visible in Viewport
function isVisible (ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);

  if (
    (top > 0 || bottom > 0) &&
    top < vHeight
  ) {
    return true;
  }
  else {
    return false;
  }
}

function isSectionVisible() {

  if(idValue=='home') {
    navLinks[0].classList.add('nav-active');
  }
  else {
    navLinks[0].classList.remove('nav-active');        
  }

  if(idValue=='aboutUs') {
    navLinks[1].classList.add('nav-active');
  }
  else {
    navLinks[1].classList.remove('nav-active');        
  }

  if(idValue=='services') {
    navLinks[2].classList.add('nav-active');
  }
  else {
    navLinks[2].classList.remove('nav-active');        
  }

  if(idValue=='jobs') {
    navLinks[3].classList.add('nav-active');
  }
  else {
    navLinks[3].classList.remove('nav-active');        
  }

  if(idValue=='contactUs') {
    navLinks[4].classList.add('nav-active');
  }
  else {
    navLinks[4].classList.remove('nav-active');        
  }
  
}


// Timeline

var timelineUl = document.getElementById('time-ul');

var timelineData1 = document.getElementById('timeline-data1');
var timelineData2 = document.getElementById('timeline-data2');
var timelineData3 = document.getElementById('timeline-data3');

// Timeline slide Animation

var timelineContentWrapper = document.querySelector('.timeline-content-wrapper');
// console.log(timelineContentWrapper);

timelineData1.addEventListener('click',function () {
  timelineContentChange(0);
  removeActiveTimelineCss(0);
}, false);

timelineData2.addEventListener('click',function (){
  timelineContentChange(1);
  addActiveTimelineCss(1);
  removeActiveTimelineCss(1);
}, false);

timelineData3.addEventListener('click',function (){
  timelineContentChange(2);
  addActiveTimelineCss(2);
  removeActiveTimelineCss(2);
}, false);

var progressCss;
var totalTimelineChildren = timelineUl.children.length;

function addActiveTimelineCss(elementCount) {
  for(let i=1; i<=elementCount; i++) {
    timelineUl.children[i].classList.add('timeline-active');
    progressCss = 'ul-progress'+i;
    timelineUl.classList.add(progressCss);
  }
}

function removeActiveTimelineCss(elementCount) {
  for(let i=elementCount+1; i<totalTimelineChildren; i++) {
    timelineUl.children[i].classList.remove('timeline-active');
    progressCss = 'ul-progress'+i;
    timelineUl.classList.remove(progressCss);
  }
}

function timelineContentChange(elementCount) {
  for(let i=0; i< timelineContentWrapper.children.length;i++) {
    if(i == elementCount) {
      timelineContentWrapper.children[i].classList.add('timeline-content-active');
    }
    else {
      timelineContentWrapper.children[i].classList.remove('timeline-content-active');
    }
  }
}