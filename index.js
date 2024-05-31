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

// ---------------  BASIC GUI FUNCTIONS  ---------------

function updateGraph() {
  for (let i = 0; i < arr.length; i++)
    setBarWidth(i, isVerticalState, ((arr[i] - minBarValue) / (maxBarValue - minBarValue)) * 100);
}

let isVerticalState = false;

function setBarWidth(idx, isVertical, widthPercentage) {
  bars = document.querySelectorAll(".bar");
  if (isVertical) {
    bars[idx].style.height = widthPercentage + "%";
    bars[idx].style.width = "100%";
  }
  else {
    bars[idx].style.height = "100%";
    bars[idx].style.width = widthPercentage + "%";
  }
}

// ---------------  CHANGE NUMBER OF ELEMENTS  ---------------

const rangeInput = document.getElementById('numOfElementsRange');
const displayValue = document.getElementById('arrayElementsDisplay');
const arrayContentDisplay = document.getElementById("arrayContentDisplay");
let amountOfBars = rangeInput.value;

// Function to map the slider value to the desired output value
function mapSliderValue(value) {
  // Map the slider's value (0-100) to the desired output (0, 20, 100, 500, 1000)
  if (value <= 10) {
    return 5 + (value / 10) * 15; // 5 to 20
  } else if (value <= 25) {
    return 21 + ((value - 10) / 15) * 49; // 21 to 70
  } else if (value <= 40) {
    return 71 + ((value - 25) / 15) * 49; // 71 to 120
  } else if (value <= 60) {
    return 121 + ((value - 40) / 20) * 129; // 121 to 250
  } else if (value <= 80) {
    return 251 + ((value - 60) / 20) * 299; // 251 to 550
  } else {
    return 551 + ((value - 80) / 20) * 449; // 551 to 1000
  }
}

// Reverse mapping function
function reverseMapSliderValue(mappedValue) {
  if (mappedValue <= 20) {
    return ((mappedValue - 5) / 15) * 10; // 5 to 20
  } else if (mappedValue <= 70) {
    return 10 + ((mappedValue - 21) / 49) * 15; // 21 to 70
  } else if (mappedValue <= 120) {
    return 25 + ((mappedValue - 71) / 49) * 15; // 71 to 120
  } else if (mappedValue <= 250) {
    return 40 + ((mappedValue - 121) / 129) * 20; // 121 to 250
  } else if (mappedValue <= 550) {
    return 60 + ((mappedValue - 251) / 299) * 20; // 251 to 550
  } else {
    return 80 + ((mappedValue - 551) / 449) * 20; // 551 to 1000
  }
}

function changeElementsAmount() {
  const value = parseInt(rangeInput.value, 10);
  const mappedValue = mapSliderValue(value).toFixed(0);
  displayValue.textContent = mappedValue;
  amountOfBars = mappedValue;
  localStorage.setItem("barsAmount", amountOfBars);
  setBarQuantity(amountOfBars)
}

let bars = document.querySelectorAll(".bar");
let arr = [];
let barContainer = document.getElementById("barsBarContainer");

function setBarQuantity(qta) {
  if (qta > 1000) qta = 1;
  else if (qta > 500) {
    document.getElementById("delayToVisualizeLabel").style.opacity = 0.5;
    document.getElementById("delayToVisualizeOpSwitch").style.opacity = 0.5;
  }
  else {
    document.getElementById("delayToVisualizeLabel").style.opacity = 1;
    document.getElementById("delayToVisualizeOpSwitch").style.opacity = 1;
  }
  barContainer.innerHTML = ``;
  for (let i = 0; i < qta; i++)
    barContainer.innerHTML += `<div class="bar"></div>`;
  randomizeBars();
}

let minBarValue = 0;
let maxBarValue = 1000;

async function randomizeBars() {
  arr = [];
  bars = document.querySelectorAll(".bar");
  arrayContentDisplay.textContent = "";
  for (let i = 0; i < amountOfBars; i++) {
    let randomNumber = Math.floor(Math.random() * (maxBarValue - minBarValue + 1) + minBarValue);
    arrayContentDisplay.textContent += `${randomNumber} `;
    arr[i] = randomNumber;
    let percentage = ((randomNumber - minBarValue) / (maxBarValue - minBarValue)) * 100;
    if (percentage < 0.5) percentage == 0.5;
    setBarWidth(i, isVerticalState, percentage);
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
    checkSelectedMethodOnAppLoad();
    findSlowMoStateAtLoad();
    getRotateStateAtLoad();
    createBarsOnAppLoad();
  }, 10);
});
function createBarsOnAppLoad() {
  if (!localStorage.getItem("barsAmount"))
    localStorage.setItem("barsAmount", 25);
  amountOfBars = parseInt(localStorage.getItem("barsAmount"));
  rangeInput.value = reverseMapSliderValue(amountOfBars).toFixed(0);
  displayValue.textContent = amountOfBars;
  setBarQuantity(amountOfBars);
}

function delay(ms, ignoreOption) {
  if (slowMoState == "0" && !ignoreOption) return;
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
let totalTime = 0;

async function showChanges(idx1, idx2) {
  bars = document.querySelectorAll(".bar");
  bars[idx2].classList.add("active");
  await delay(100 / amountOfBars);
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
        selMemAccesses++;
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        selSwaps++;
        time += sortingTime; // Accumulate sorting phase time
        if (slowMoState == "1" && amountOfBars < 500) {
          showChanges(i, i + 1);
          // Add a delay for visualization purposes (if needed)
          await delay(100 / amountOfBars); // Adjust the delay time as needed
        }
      }
    }
    // Visualize the changes after each complete pass
    if (slowMoState == "1" && amountOfBars < 500) {
      arrayContentDisplay.textContent = "";
      for (let j = 0; j < arr.length; j++) {
        let percentage = ((arr[j] - minBarValue) / (maxBarValue - minBarValue)) * 100;
        if (percentage < 0.5) percentage = 0.5;
        setBarWidth(j, isVerticalState, percentage);
        arrayContentDisplay.textContent += `${arr[j]} `;
        makeSingleReport("Bubble sort");
      }
    }

  } while (!checkIfSorted(true));
  arrayContentDisplay.textContent = "";
  for (let j = 0; j < arr.length; j++) {
    let percentage = ((arr[j] - minBarValue) / (maxBarValue - minBarValue)) * 100;
    if (percentage < 0.5) percentage = 0.5;
    setBarWidth(j, isVerticalState, percentage);
    arrayContentDisplay.textContent += `${arr[j]} `;
  }
  const endTime = performance.now(); // Record end time in microseconds
  totalTime = (endTime - startTime) / 1000;
  makeSingleReport("Bubble sort");

  for (let j = 0; j < arr.length; j++) {
    bars[j].classList.add("active");
    await delay(500 / amountOfBars);
  }
  bars.forEach(bar => {
    bar.style.transition = "0.25s all ease-in-out"
  });
  await delay(1000, true);
  bars.forEach(bar =>
    bar.classList.remove("active"));
}

async function selectionSort() {
  bars = document.querySelectorAll(".bar");
  bars.forEach(bar => bar.style.transition = "none");
  let tmp = 0;
  selSwaps = 0;
  selMemAccesses = 0;
  checkIfSortedTimes = 0;
  time = 0
  let sortingTime = 0;
  const startTime = performance.now(); // Record start time in microseconds
  let sortingStartTime = performance.now(); // Record start time for sorting phase
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    selMemAccesses++;
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      selMemAccesses++;
      if (arr[j] < arr[minIndex]) {
        selMemAccesses++;
        minIndex = j;
        if (slowMoState == "1" && amountOfBars < 500) {
          showChanges(minIndex, j);
          // Add a delay for visualization purposes (if needed)
          await delay(100 / amountOfBars); // Adjust the delay time as needed
        }
      }
    }
    if (minIndex != i) {
      tmp = arr[i];
      selSwaps++;
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
      selMemAccesses++;
      time += sortingTime; // Accumulate sorting phase time
      if (slowMoState == "1" && amountOfBars < 500) {
        showChanges(i, minIndex + 1);
        // Add a delay for visualization purposes (if needed)
        await delay(100 / amountOfBars); // Adjust the delay time as needed
      }
    }
    if (slowMoState == "1" && amountOfBars < 500) {
      arrayContentDisplay.textContent = "";
      for (let j = 0; j < arr.length; j++) {
        let percentage = ((arr[j] - minBarValue) / (maxBarValue - minBarValue)) * 100;
        if (percentage < 0.5) percentage = 0.5;
        setBarWidth(j, isVerticalState, percentage);
        arrayContentDisplay.textContent += `${arr[j]} `;
        makeSingleReport("Selection sort");
      }
    }
  }
  arrayContentDisplay.textContent = "";
  for (let j = 0; j < arr.length; j++) {
    let percentage = ((arr[j] - minBarValue) / (maxBarValue - minBarValue)) * 100;
    if (percentage < 0.5) percentage = 0.5;
    setBarWidth(j, isVerticalState, percentage);
    arrayContentDisplay.textContent += `${arr[j]} `;
  }
  const endTime = performance.now(); // Record end time in microseconds
  totalTime = (endTime - startTime) / 1000;
  makeSingleReport("Selection sort");

  for (let j = 0; j < arr.length; j++) {
    bars[j].classList.add("active");
    await delay(500 / amountOfBars);
  }
  bars.forEach(bar => {
    bar.style.transition = "0.25s all ease-in-out"
  });
  await delay(1000, true);
  bars.forEach(bar =>
    bar.classList.remove("active"));
}

async function insertionSort() {
  bars = document.querySelectorAll(".bar");
  bars.forEach(bar => bar.style.transition = "none");
  let tmp = 0;
  selSwaps = 0;
  selMemAccesses = 0;
  checkIfSortedTimes = 0;
  time = 0
  let sortingTime = 0;
  const startTime = performance.now(); // Record start time in microseconds
  let sortingStartTime = performance.now(); // Record start time for sorting phase
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    selMemAccesses++;
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      selMemAccesses++;
      tmp = arr[j];
      arr[j + 1] = tmp;
      j = j - 1;
      selSwaps++;
      time += sortingTime; // Accumulate sorting phase time
      if (slowMoState == "1" && amountOfBars < 500 && j >= 0) {
        showChanges(i, j);
        // Add a delay for visualization purposes (if needed)
        await delay(100 / amountOfBars); // Adjust the delay time as needed
      }
    }
    arr[j + 1] = key;
    if (slowMoState == "1" && amountOfBars < 500) {
      arrayContentDisplay.textContent = "";
      for (let j = 0; j < arr.length; j++) {
        let percentage = ((arr[j] - minBarValue) / (maxBarValue - minBarValue)) * 100;
        if (percentage < 0.5) percentage = 0.5;
        setBarWidth(j, isVerticalState, percentage);
        arrayContentDisplay.textContent += `${arr[j]} `;
        makeSingleReport("Insertion sort");
      }
    }
  }
  const endTime = performance.now(); // Record end time in microseconds
  totalTime = (endTime - startTime) / 1000;
  arrayContentDisplay.textContent = "";
  for (let j = 0; j < arr.length; j++) {
    let percentage = ((arr[j] - minBarValue) / (maxBarValue - minBarValue)) * 100;
    if (percentage < 0.5) percentage = 0.5;
    setBarWidth(j, isVerticalState, percentage);
    arrayContentDisplay.textContent += `${arr[j]} `;
  }
  makeSingleReport("Insertion sort");

  for (let j = 0; j < arr.length; j++) {
    bars[j].classList.add("active");
    await delay(500 / amountOfBars);
  }
  bars.forEach(bar => {
    bar.style.transition = "0.25s all ease-in-out"
  });
  await delay(1000, true);
  bars.forEach(bar =>
    bar.classList.remove("active"));
}

async function bogoSort() {
  if (!confirm("Bogo sort is a very unefficient method which may require up to thousands of years to sort an array. Do you want to continue?")) {
    makeSingleReport("Bogo sort");
    return;
  }
  bars = document.querySelectorAll(".bar");
  bars.forEach(bar => bar.style.transition = "none");
  let tmp = 0;
  selSwaps = 0;
  selMemAccesses = 0;
  checkIfSortedTimes = 0;
  time = 0
  const startTime = performance.now(); // Record start time in microseconds
  do {
    checkIfSortedTimes++;
    let randIdx1 = Math.floor(Math.random() * arr.length);
    selMemAccesses++;
    let randIdx2 = Math.floor(Math.random() * arr.length);
    selMemAccesses++;
    tmp = arr[randIdx1];
    arr[randIdx1] = arr[randIdx2];
    arr[randIdx2] = tmp;
    selSwaps++;
    if (slowMoState == "1" && amountOfBars < 500) {
      showChanges(randIdx1, randIdx2);
      // Add a delay for visualization purposes (if needed)
      await delay(100 / amountOfBars); // Adjust the delay time as needed
      arrayContentDisplay.textContent = "";
      for (let j = 0; j < arr.length; j++) {
        let percentage = ((arr[j] - minBarValue) / (maxBarValue - minBarValue)) * 100;
        if (percentage < 0.5) percentage = 0.5;
        setBarWidth(j, isVerticalState, percentage);
        arrayContentDisplay.textContent += `${arr[j]} `;
        makeSingleReport("Selection sort");
      }
    }
    makeSingleReport("Bogo sort");
  } while (!checkIfSorted(true) && checkIfSortedTimes <= 5000);
  if (checkIfSortedTimes > 5000) {
    alert("Bogo sort failed after 5000 attempts.");
  }
  arrayContentDisplay.textContent = "";
  for (let j = 0; j < arr.length; j++) {
    let percentage = ((arr[j] - minBarValue) / (maxBarValue - minBarValue)) * 100;
    if (percentage < 0.5) percentage = 0.5;
    setBarWidth(j, isVerticalState, percentage);
    arrayContentDisplay.textContent += `${arr[j]} `;
  }
  const endTime = performance.now(); // Record end time in microseconds
  totalTime = (endTime - startTime) / 1000;
  makeSingleReport("Bogo sort");

  for (let j = 0; j < arr.length; j++) {
    bars[j].classList.add("active");
    await delay(500 / amountOfBars);
  }
  bars.forEach(bar => {
    bar.style.transition = "0.25s all ease-in-out"
  });
  await delay(1000, true);
  bars.forEach(bar =>
    bar.classList.remove("active"));
}

function calculateTolerance(num1, num2) {
  const difference = Math.abs(num1 - num2);
  const base = Math.max(num1, num2);
  return (difference / base) * 100;
}


const sortMethodDisplay = document.getElementById("sort_method_display");
const totalTimeDisplay = document.getElementById("total_time");
function makeSingleReport(sortMethod) {
  const numElementsDisplay = document.getElementById("num_elements");
  const rangeValuesDisplay = document.getElementById("range_values");
  const averageExpDisplay = document.getElementById("average_expected");
  const averageValDisplay = document.getElementById("average_values");
  const averageTolDisplay = document.getElementById("average_tolerance");
  const calcTimeDisplay = document.getElementById("calc_time");
  const memoryAccessesDisplay = document.getElementById("memory_accesses");
  const swapsDisplay = document.getElementById("swaps");
  sortMethodDisplay.textContent = sortMethod;
  numElementsDisplay.textContent = amountOfBars;
  rangeValuesDisplay.textContent = `${minBarValue}-${maxBarValue}`
  averageExpDisplay.textContent = ((maxBarValue + minBarValue) / 2).toFixed(2);
  let avg = 0;
  arr.forEach(val => avg += val);
  averageValDisplay.textContent = (avg / arr.length).toFixed(2);
  averageTolDisplay.textContent = calculateTolerance(averageExpDisplay.textContent, averageValDisplay.textContent).toFixed(2) + "%";
  if (slowMoState == "0") totalTime *= 1000;
  totalTimeDisplay.textContent = `${totalTime.toFixed(3)}`; // Update totalTimeDisplay
  if (slowMoState == "0") totalTimeDisplay.textContent += " ms";
  else totalTimeDisplay.textContent += " sec";
  memoryAccessesDisplay.textContent = selMemAccesses;
  swapsDisplay.textContent = selSwaps;
}

function runSelected() {
  switch (selectedSortMethod) {
    case 0:
    case '0':
    case "0":
      bubbleSort();
      break;
    case 1:
    case '1':
    case "1":
      selectionSort();
      break;
    case 2:
    case '2':
    case "2":
      insertionSort();
      break;
    case 3:
    case '3':
    case "3":
      bogoSort();
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

function setFullScreen(enable) {
  if (enable) {
    barContainer.classList.add("expandedArrayView");
  } else {
    barContainer.classList.remove("expandedArrayView");
  }
}

function getRotateStateAtLoad() {
  if (localStorage.getItem("verticalState") && localStorage.getItem("verticalState") == "true") {
    isVerticalState = true;
    barContainer.classList.add("verticalBarsContainer");
  }
  else {
    isVerticalState = false;
    barContainer.classList.remove("verticalBarsContainer");
    bars.forEach(bar => bar.classList.remove("verticalBars"));
  }
  localStorage.setItem("verticalState", isVerticalState);
}

function changeRotateArray() {
  if (isVerticalState) {
    isVerticalState = false;
    barContainer.classList.remove("verticalBarsContainer");
    bars.forEach(bar => bar.classList.remove("verticalBars"));
  }
  else {
    isVerticalState = true;
    barContainer.classList.add("verticalBarsContainer");
  }
  localStorage.setItem("verticalState", isVerticalState);
  updateGraph();
}

function saveArrayImage() {
  document.body.style.overflow = "scroll !important";
  setTimeout(() => {
    downloadImage("barsBarContainer", `(ArraySize:${amountOfBars})(Range:${minBarValue}-${maxBarValue})`, () => {
      window.location.reload();
    });
  }, 1);
}

function downloadReport() {
  if (totalTimeDisplay.textContent != "0.000 sec" && totalTimeDisplay.textContent != "") {
    document.body.style.overflow = "scroll !important";
    document.getElementById("downloadReportBtn").style.display = "none";
    document.getElementById("copyArrayContentBtn").style.display = "none";
    document.getElementById("keyboard_arrow_upSummary").style.display = "none";
    document.getElementById("arrayValuesDetails").open = true;
    setTimeout(() => {
      downloadImage("downloadReportContainer", `(ArraySortReport)(Method:${sortMethodDisplay.textContent})(ArraySize:${amountOfBars})(Range:${minBarValue}-${maxBarValue})`, () => {
        window.location.reload();
      });
    }, 1);
  }
}

function downloadImage(divId, fileName, callback) {
  return new Promise(function (resolve, reject) {
    // Get the div element
    var divElement = document.getElementById(divId);

    // Apply inline styles to the div and its children

    // Use dom-to-image to render the div to an image
    domtoimage.toBlob(divElement)
      .then(function (blob) {
        // Create a link element
        var link = document.createElement('a');

        // Create a URL for the blob object
        var url = URL.createObjectURL(blob);

        // Set the href and download attributes of the link
        link.href = url;
        link.download = fileName;

        // Append the link to the document body
        document.body.appendChild(link);

        // Trigger a click event on the link to initiate download
        link.click();

        // Remove the link from the document body
        document.body.removeChild(link);

        // Revoke the URL to release memory
        URL.revokeObjectURL(url);

        // Resolve the Promise

        // Call the callback function
        if (callback && typeof callback === 'function') {
          callback();
        }
      })
      .catch(function (error) {
        console.error('Error rendering image:', error);
      });
    resolve();
  });
}

function applyInlineStyles(element) {
  // Apply inline styles to the element
  element.style.fontFamily = 'Calibri, Arial, sans-serif'; // Example font family
  element.style.backgroundColor = "rgb(229, 229, 229)";
  // Add more styles as needed

  // Apply inline styles to the children of the element recursively
  var children = element.children;
  for (var i = 0; i < children.length; i++) {
    applyInlineStyles(children[i]);
  }
}