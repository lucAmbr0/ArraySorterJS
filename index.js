/* 
    Array Sorter - JavaScript Functions
    Made with <3 by @lucAmbr0 
*/

// ---------------  SERVICE WORKER  ---------------

serviceWorker();
function serviceWorker() {
  if ('serviceWorker' in navigator) {
    console.log('Service worker compatible');
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('https://lucambr0.github.io/ArraySorterJS/service_worker.js')
        .then(reg => {
          console.log('Service worker registered');
        })
        .catch(err => {
          console.log(err);
        })
    })
  }
}

// ---------------  NAVBAR  ---------------

const navbar = document.getElementById("navbar");
const navbarBtn = document.querySelectorAll(".navbarBtn");
const navbarIcon = document.querySelectorAll(".navbarIcon");
const navbarLabel = document.querySelectorAll(".navbarLabel");
const appTabs = document.querySelectorAll(".appTabs");

appTabs.forEach(appTab => appTab.classList.remove("appTabsShown"));
appTabs.forEach(appTab => appTab.classList.add("appTabsHidden"));

// This displays the last tab the user was in when closed the app (default is Now Tab)
let tab;
let currentTab = -1;
if (localStorage.getItem('tab')) {
  tab = parseInt(localStorage.getItem('tab'));
} else {
  tab = 0;
}

// Calls the function to display the right tab
navbarAction(tab);

function navbarAction(tab) {
  if (currentTab !== tab) {
    currentTab = tab;
    localStorage.setItem('tab', tab);
    navbarIcon.forEach(item => item.classList.remove("navbarIconActive"));
    navbarLabel.forEach(item => item.classList.remove("navbarLabelActive"));
    navbarIcon[tab].classList.add("navbarIconActive");
    navbarLabel[tab].classList.add("navbarLabelActive");
    appTabs.forEach(appTab => appTab.classList.remove("appTabsShown"));
    appTabs.forEach(appTab => appTab.classList.add("appTabsHidden"));
    appTabs[tab].classList.remove("appTabsHidden");
    appTabs[tab].classList.add("appTabsShown");
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }
}

function getStarted() {
  setTimeout(() => {
    navbarAction(1);
  }, 350)
}

// ---------------  CHECK IF THERE'S A NEW VERSION  ---------------

let deviceVersion;
let latestVersion;
checkVersion();
function checkVersion() {
  if (localStorage.getItem("ARRversion")) {
    deviceVersion = localStorage.getItem("ARRversion");
    latestVersion = document.getElementById("latestVersionDisplay").textContent;
    if (deviceVersion != latestVersion) {
      document.getElementById("prevVer").textContent = deviceVersion;
      document.getElementById("newVer").textContent = latestVersion;
      document.getElementById("blurOverlay").style.display = "block";
      document.getElementById("newVersionBox").style.display = "block";
    }
    else {
      document.getElementById("blurOverlay").display = "none";
      document.getElementById("newVersionBox").display = "none";
    }
  }
  else {
    localStorage.setItem('ARRversion', document.getElementById("latestVersionDisplay").textContent);
  }
  localStorage.setItem("ARRversion", latestVersion);
  deviceVersion = localStorage.getItem("ARRversion");
}

function closeUpdateNotice() {
  document.getElementById('blurOverlay').style.animation = 'settingContent 0.3s reverse';
  document.getElementById('newVersionBox').style.animation = 'settingContent 0.3s reverse';
  setTimeout(() => {
    document.getElementById('blurOverlay').style.display = 'none';
    document.getElementById('newVersionBox').style.display = 'none';
  }, 300);
}

// ---------------  H1DD3N F34TUR3S  ---------------
// I'll regret this when ill be famous.

let timesYouAnnoyedTheGitCat = 0;
function annoyGitCat() {
  timesYouAnnoyedTheGitCat += 1;
  if (timesYouAnnoyedTheGitCat % 5 == 0 && timesYouAnnoyedTheGitCat <= 50) {
    const sentenceNum = Math.floor(Math.random() * 20) + 1;
    switch (sentenceNum) {
      case 1:
        window.alert("Stop annoying the git cat. He tryna sleep.");
        break;
      case 2:
        window.alert("Bruh, chill with the cat clicks. It's vibing, not coding.");
        break;
      case 3:
        window.alert("Yo, the git cat is low-key done with your clicks. Give it a break.");
        break;
      case 4:
        window.alert("Bro, you're clicking like it's a TikTok video. Let the cat be.");
        break;
      case 5:
        window.alert("Stop spamming the cat, it's not a Snapchat streak.");
        break;
      case 6:
        window.alert("Dude, the git cat's patience level is reaching '404 not found'.");
        break;
      case 7:
        window.alert("Seriously, stop poking the cat icon. It's not a 'like' button.");
        break;
      case 8:
        window.alert("Hey, can you not? The git cat is about to yeet outta here.");
        break;
      case 9:
        window.alert("The git cat is this close to throwing shade at your clicking spree.");
        break;
      case 10:
        window.alert("Enough with the cat clicks, fam. It's time to give it some space.");
        break;
      case 11:
        window.alert("Chill with the cat clicks, it's disrupting its vibe.");
        break;
      case 12:
        window.alert("Quit bugging the git cat, it's low-key getting triggered.");
        break;
      case 13:
        window.alert("Bruh, stop spamming the cat icon, it's giving major side-eye.");
        break;
      case 14:
        window.alert("The git cat is fed up with your clicks, it's about to throw some shade.");
        break;
      case 15:
        window.alert("Enough with the cat taps, it's about to yeet outta here.");
        break;
      case 16:
        window.alert("Yo, lay off the cat clicks, it's not a fan of your energy.");
        break;
      case 17:
        window.alert("The git cat's patience is wearing thin, it's ready to ghost you.");
        break;
      case 18:
        window.alert("Quit poking the git cat, it's on the verge of a meltdown.");
        break;
      case 19:
        window.alert("Seriously, stop bothering the cat, it's gonna clap back.");
        break;
      case 20:
        window.alert("The git cat's giving you major 'stop it' vibes, take the hint.");
        break;

      default:
        window.alert("Stop annoying the git cat. He tryna sleep.");
        break;
    }
  }
  if (timesYouAnnoyedTheGitCat > 20) {
    document.getElementById("socialIcon").style.scale = "1.1";
  }
  if (timesYouAnnoyedTheGitCat > 30) {
    window.alert("NAH BRO YOU DONE IMMA LEAVE.");
    document.getElementById("socialIcon").style.transition = "2s all ease-in-out";
    document.getElementById("socialIcon").style.transform = "translateY(-100vh)";
    setTimeout(() => {
      document.getElementById("nowTab").style.display = "none";
      document.getElementById("timetablesTab").style.display = "none";
      document.getElementById("settingsTab").style.display = "none";
      document.getElementById("navbar").style.display = "none";
      document.querySelector(".topNotchContainer").style.display = "none";
      setTimeout(() => {
        var div = document.createElement('div');
        // Create div
        div.className = "annoyedCatDiv";
        // Create image element
        var image = document.createElement('img');
        image.src = "/icons/github-mark.svg";
        image.style.width = '25vh';
        image.style.height = '25vh';
        div.appendChild(image);
        // Create text element
        var text = document.createElement('h1');
        text.textContent = "The cat's got beef with you now, no turning back.";
        div.appendChild(text);
        // Append div to document body
        document.body.appendChild(div);
      }, 1500);
    }, 2500);
  }
}

// ---------------  CHANGE NUMBER OF ELEMENTS  ---------------
const rangeInput = document.getElementById('numOfElementsRange');
const displayValue = document.getElementById('arrayElementsDisplay');
let amountOfBars = rangeInput.value;

function changeElementsAmount() {
  displayValue.textContent = rangeInput.value;
  amountOfBars = rangeInput.value;
  setBarQuantity(amountOfBars)
}

let bars = document.querySelectorAll(".bar");
let barContainer = document.getElementById("barsBarContainer");

function setBarQuantity(qta) {
  barContainer.innerHTML = ``;
  for (let i = 0; i < qta; i++) {
    barContainer.innerHTML += `<div class="bar"></div>`;
  }
  randomizeBars();
}

let minBarValue = 0;
let maxBarValue = 100;

randomizeBars();
function randomizeBars() {
  bars = document.querySelectorAll(".bar");
  bars.forEach((bar) => {
    const width = (Math.floor(Math.random() * (maxBarValue - minBarValue)) + minBarValue); // generate a random width between 1 and 100
    bar.style.width = `${width}%`; // set the width of the bar
  });
}