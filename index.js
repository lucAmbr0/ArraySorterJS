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
      document.getElementById("arrayTab").style.display = "none";
      document.getElementById("resultsTab").style.display = "none";
      document.getElementById("customizeTab").style.display = "none";
      document.getElementById("navbar").style.display = "none";
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
const arrayContentDisplay = document.getElementById("arrayContentDisplay");
let amountOfBars = rangeInput.value;

function changeElementsAmount() {
  displayValue.textContent = rangeInput.value;
  amountOfBars = rangeInput.value;
  localStorage.setItem("barsAmount", amountOfBars);
  setBarQuantity(amountOfBars)
}

let bars = document.querySelectorAll(".bar");
let arr = [];
let barContainer = document.getElementById("barsBarContainer");

function setBarQuantity(qta) {
  barContainer.innerHTML = ``;
  for (let i = 0; i < qta; i++)
    barContainer.innerHTML += `<div class="bar"></div>`;
  randomizeBars();
}

let minBarValue = 0;
let maxBarValue = 100;

async function randomizeBars() {
  arr = [];
  bars = document.querySelectorAll(".bar");
  arrayContentDisplay.textContent = "";
  for (let i = 0; i < amountOfBars; i++) {
    await delay(10 / amountOfBars);
    let randomNumber = Math.floor(Math.random() * (maxBarValue - minBarValue + 1) + minBarValue);
    arrayContentDisplay.textContent += `${randomNumber} `;
    arr[i] = randomNumber;
    let percentage = ((randomNumber - minBarValue) / (maxBarValue - minBarValue)) * 100;
    if (percentage < 0.5) percentage == 0.5;
    bars[i].style.width = `${percentage}%`; // set the width of the bar
  }
}

const toggleSlowMoSwitch = document.getElementById("visualizeDelaySwitch"); // reference to the switch <input> item which actually is a checkbox type
let slowMoState = "1";

function findSlowMoStateAtLoad() {
  if (localStorage.getItem('slowMoState')) {
    slowMoState = localStorage.getItem('slowMoState');
    if (slowMoState == "1") {
      toggleSlowMoSwitch.checked = true;
    }
  }
  else slowMoState = "0";
  localStorage.setItem('slowMoState', slowMoState);
}

function toggleSlowMoSort() { // triggered when the switch is clicked
  if (toggleSlowMoSwitch.checked) {
    slowMoState = "1";
  }
  else if (!toggleSlowMoSwitch.checked) {
    slowMoState = "0";
  }
  localStorage.setItem('slowMoState', slowMoState);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    createBarsOnAppLoad();
    checkSelectedMethodOnAppLoad();
    findSlowMoStateAtLoad();
  }, 10);
});
function createBarsOnAppLoad() {
  if (!localStorage.getItem("barsAmount"))
    localStorage.setItem("barsAmount", 25);
  amountOfBars = parseInt(localStorage.getItem("barsAmount"));
  rangeInput.value = amountOfBars;
  displayValue.textContent = rangeInput.value;
  setBarQuantity(amountOfBars);
}

function delay(ms, ignoreOption) {
  if (slowMoState == "0" && !ignoreOption) return;
  else
    return new Promise(resolve => setTimeout(resolve, ms));
}

const sortMethodSelection = document.getElementById("sortMethodSelection");
const runSelectedMethodBtn = document.getElementById("runSelectedMethodBtn");
let selectedSortMethod = 0;

function checkSelectedMethodOnAppLoad() {
  if (!localStorage.getItem("selectedSortMethod"))
    localStorage.setItem("selectedSortMethod", 0);
  selectedSortMethod = parseInt(localStorage.getItem("selectedSortMethod"));
  sortMethodSelection.value = selectedSortMethod;
  console.log("AA");
}

sortMethodSelection.addEventListener("change", (e) => {
  e.stopPropagation();
  selectedSortMethod = sortMethodSelection.value;
  localStorage.setItem("selectedSortMethod", selectedSortMethod);
});

// Stop event propagation when clicking on the select element
sortMethodSelection.addEventListener("click", (e) => {
  e.stopPropagation();
});

runSelectedMethodBtn.addEventListener("click", (e) => {
  // Check if the click was directly on the select element, if so do nothing
  if (e.target === sortMethodSelection) {
    return;
  }
  runSelected();
});

let selMemAccesses = 0;
let selSwaps = 0;
let totMemAccesses = 0;
let totSwaps = 0;
let checkIfSortedTimes = 0;
let time = 0;
let executionTime = 0;
let totalTime = 0;

async function showChanges(idx1, idx2) {
  bars = document.querySelectorAll(".bar");
  bars[idx2].classList.add("active");
  await delay(300 / amountOfBars);
  bars[idx1].classList.add("active");
  bars[idx1].classList.remove("active");
  bars[idx2].classList.remove("active");
}

function checkIfSorted(inAscending) {
  checkIfSortedTimes++;
  for (let i = 0; i < arr.length - 1; i++) {
    selMemAccesses++;
    if (inAscending && arr[i] > arr[i + 1]) {
      return false;
    }
    else if (!inAscending && arr[i] < arr[i + 1]) {
      return false;
    }
  }
  return true;
}

async function bubbleSort() {
  bars = document.querySelectorAll(".bar");
  bars.forEach(bar => bar.style.transition = "none");
  let tmp = 0;
  selSwaps = 0;
  selMemAccesses = 0;
  checkIfSortedTimes = 0;
  time = 0
  let sortingTime = 0;
  const startTime = performance.now(); // Record start time in microseconds
  do {
    let sortingStartTime = performance.now(); // Record start time for sorting phase
    for (let i = 0; i < arr.length - 1; i++) {
      selMemAccesses++;
      if (arr[i] > arr[i + 1]) {
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        selSwaps++;
        let sortingEndTime = performance.now(); // Record end time for sorting phase
        sortingTime = (sortingEndTime - sortingStartTime);
        time += sortingTime; // Accumulate sorting phase time
        if (slowMoState == "1") {
          showChanges(i, i + 1);
          // Add a delay for visualization purposes (if needed)
          await delay(300 / amountOfBars); // Adjust the delay time as needed
        }
      }
    }
    // Visualize the changes after each complete pass
    if (slowMoState == "1") {
      arrayContentDisplay.textContent = "";
      for (let j = 0; j < arr.length; j++) {
        let percentage = ((arr[j] - minBarValue) / (maxBarValue - minBarValue)) * 100;
        if (percentage < 0.5) percentage = 0.5;
        bars[j].style.width = percentage + "%"; // set the width of the bar
        arrayContentDisplay.textContent += `${arr[j]} `;
        makeSingleReport("Bubble sort");
      }
    }

  } while (!checkIfSorted(true));
  arrayContentDisplay.textContent = "";
  for (let j = 0; j < arr.length; j++) {
    let percentage = ((arr[j] - minBarValue) / (maxBarValue - minBarValue)) * 100;
    if (percentage < 0.5) percentage = 0.5;
    bars[j].style.width = percentage + "%"; // set the width of the bar
    arrayContentDisplay.textContent += `${arr[j]} `;
  }
  const endTime = performance.now(); // Record end time in microseconds
  totalTime = (endTime - startTime) / 1000;
  executionTime = time / 1000000;
  makeSingleReport("Bubble sort");

  for (let j = 0; j < arr.length; j++) {
    bars[j].classList.add("active");
    await delay(500 / amountOfBars);
  }
  bars.forEach(bar => {
    bar.style.transition = "0.25s width ease-in-out"
  });
  await delay(1000, true);
  bars.forEach(bar =>
    bar.classList.remove("active"));
}


function makeSingleReport(sortMethod) {
  const sortMethodDisplay = document.getElementById("sort_method_display");
  const numElementsDisplay = document.getElementById("num_elements");
  const rangeValuesDisplay = document.getElementById("range_values");
  const calcTimeDisplay = document.getElementById("calc_time");
  const totalTimeDisplay = document.getElementById("total_time");
  const memoryAccessesDisplay = document.getElementById("memory_accesses");
  const swapsDisplay = document.getElementById("swaps");
  sortMethodDisplay.textContent = sortMethod;
  numElementsDisplay.textContent = amountOfBars;
  rangeValuesDisplay.textContent = `${minBarValue}-${maxBarValue}`
  calcTimeDisplay.textContent = `${executionTime.toFixed(5)} ms`; // Update calcTimeDisplay
  totalTimeDisplay.textContent = `${totalTime.toFixed(3)} sec`; // Update totalTimeDisplay
  memoryAccessesDisplay.textContent = selMemAccesses;
  swapsDisplay.textContent = selSwaps;
}

function runSelected() {
  switch (selectedSortMethod) {
    case 0:
      bubbleSort();
      break;
    default:
      break;
  }
}

function copyArrayContent() {
  // Convert array to JSON string
  const arrayString = JSON.stringify(arr);

  // Create a temporary textarea element to hold the string
  const textarea = document.createElement("textarea");
  textarea.value = arrayString;
  document.body.appendChild(textarea);

  // Select the text inside the textarea
  textarea.select();
  textarea.setSelectionRange(0, arrayString.length);

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea element
  document.body.removeChild(textarea);

  window.alert("Copied array to your clipboard");
}