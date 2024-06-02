* Worked on this project for: <a href="https://wakatime.com/badge/github/lucAmbr0/ArraySorterJS"><img src="https://wakatime.com/badge/github/lucAmbr0/ArraySorterJS.svg?style=flat" alt="wakatime"></a>
# Introduction
> This project is in early stage, many things may change often.
* **Array Sorting Simulator** is a web-based tool offering interactive simulations of various array sorting methods like bubble sort, quick sort, and more. Designed with a clean UI and extensive customization options, it serves as an educational resource for understanding sorting algorithms.

## :ledger: Index

* [About](#beginner-about)
* [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
* [Development](#wrench-development)
  - [Pre-Requisites](#notebook-pre-requisites)
  - [File Structure](#file_folder-file-structure)
* [Community](#cherry_blossom-community)
  - [Contribution](#fire-contribution)
  - [Branches](#cactus-branches)
  - [Guideline](#exclamation-guideline)  
* [FAQ](#question-faq)
* [Gallery](#camera-gallery)
* [Credit/Acknowledgment](#star2-creditacknowledgment)
* [License](#lock-license)

##  :beginner: About
This repository houses a web application designed to facilitate interactive exploration of various array sorting algorithms. With a focus on educational utility, users can simulate sorting methods such as bubble sort, quick sort, and more, gaining both technical insight and visual comprehension. The interface is carefully crafted for ease of use, providing a pleasant user experience. Notably, the application is highly customizable, allowing users to tweak parameters of both arrays and sorting methods. Built exclusively with vanilla HTML, CSS, and JavaScript, the absence of frameworks ensures simplicity and accessibility, making it an ideal resource for those seeking to delve into the intricacies of sorting algorithms without unnecessary complexity. Whether accessed through a browser or installed as a Progressive Web App (PWA) on Android devices, this repository offers a valuable tool for understanding and experimenting with array sorting techniques.

## :zap: Usage
Upon opening the app, users are greeted with a navigation bar featuring three primary buttons:
* **Simulate**: The main hub where users can interactively simulate various array sorting methods, enabling exploration and comprehension.
* **Results**: Displays the result of the last sorting session full of useful statistics and the whole content of the array easily downloadable as image or copy to clipboard.
* **Settings**: Allows users to tweak some settings such as theme color, range of values and order ascending/descending.
* **About**: This section provides a useful and brief description of each sorting method available in the app.

###  :electric_plug: Installation
You can get this app in many ways.
* Since this app now follows the guidelines to be installed as PWA (Progressive Web App) you can open this app from the github pages link (on top of this page) and then accept the prompt to install or if it doesn't appear for any reason click the three dots on the top-right of your browser and tap "Install App" to get the WebApp available in your Android smartphone. This way usually offers a better experience. You will automatically get most of the updates remotely and you won't need to be connected to the internet to use it normally.
* Otherwise you can always use the link to connect to github pages. Your data is saved in the browser's local storage, so it will always stay on your phone.
* I also plan to make an actual apk application for android using a PWA builder service in the future.

##  :wrench: Development

### :notebook: Pre-Requisites
There are no special prerequisites for this project other than the following:
* A **chromium browser** like Google Chrome, Brave, Edge, Opera... (Not optimised for Safari and Firefox, which may not be compatible with some CSS rules)
* An internet connection (not always required if you install the WebApp)
* Compatibility with browser's local storage functionality

###  :file_folder: File Structure
I will try to keep the repository structure as clean as possible to make maintenance and community contributions clearer

```
.
│   index.html
│   index.js
│   LICENSE
│   manifest.json
│   README.md
│   service_worker.js
│   style.css
│
├───.idx
│       dev.nix
│
├───Fonts
│   ├───Material_Symbols
│   │       MaterialSymbolsOutlined-VariableFont_FILL,GRAD,opsz,wght.ttf
│   │       MaterialSymbolsRounded-VariableFont_FILL,GRAD,opsz,wght.ttf
│   │       MaterialSymbolsSharp-VariableFont_FILL,GRAD,opsz,wght.ttf
│   │
│   ├───Noto_Sans
│   │       NotoSans-Italic-VariableFont_wdth,wght.ttf
│   │       NotoSans-VariableFont_wdth,wght.ttf
│   │
│   └───Rubik
│           Rubik-VariableFont_wght.ttf
│
├───icons
│       github-mark.svg
│       icon-any-192x192.png
│       icon-any-512x512.png
│       icon-maskable-192x192.png
│       icon-maskable-512x512.png
│
└───screenshots
```

## :cherry_blossom: Community

Teamwork is important! If you want to contribute and help in this project, fixing bugs, adding features or changing the look and feel of the page feel free to contribute!

 ###  :fire: Contribution

Feel free to contribute as much as you'd like!

 1. **Report a bug** <br>
 If you think you have encountered a bug, and I should know about it, feel free to report it and I will take care of it.

 2. **Request a feature** <br>
 You can also request for a feature and if it will viable, it will be picked for development.  

 3. **Create a pull request** <br>
 It can't get better then this, your pull request will be appreciated by the community. You can get started by picking up any open issues and make a pull request.

 > If you are new to open-source, make sure to check read more about it [here](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and learn more about creating a pull request [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).


 ### :cactus: Branches

1. **`stage`** is the development branch.

2. **`master`** is the production branch.

3. No other permanent branches should be created in the main repository, you can create feature branches but they should get merged with the master.

**Steps to work with feature branch**

1. To start working on a new feature, create a new branch prefixed with `feat` and followed by feature name. (ie. `feat-FEATURE-NAME`)
2. Once you are done with your changes, you can raise PR.

### :exclamation: Guideline
There are no particular guidelines to follow to contribute to the project.
<br>
Feel free to change whatever you want however you want, but try to keep the code tidy and readable.


## :question: FAQ
* **What's this thing?** <br>
Array Sorting Simulator is a web tool designed to facilitate interactive simulations of array sorting methods, aiding users in understanding how various sorting algorithms function.

* **What can I do with it?** <br>
Whether you're a student, developer, or simply curious about sorting algorithms, this tool provides a hands-on experience for exploring and visualizing sorting methods like bubble sort, quick sort, and more.

* **How do I configure this?** <br>
Configuring the simulator is straightforward. Users can adjust array parameters and select sorting methods directly within the app's interface. For personalized experiences, users can customize settings such as theme preferences and interface options. Additionally, the app supports data export and import functionality, ensuring seamless transitions between devices.

* **Can I contribute to this?** <br>
Yes, absolutely! Contributions are always well-accepted! To know more, go to the contribution section of this readme

##  :camera: Gallery
Not ready yet :D
<div style="display: flex">
<!-- <img src="https://github.com/lucAmbr0/SchoolTimetable/blob/master/screenshots/mobile-screenshot1.png?raw=true" width="200" /> -->
<!-- <img src="https://github.com/lucAmbr0/SchoolTimetable/blob/master/screenshots/mobile-screenshot2.png?raw=true" width="200" /> -->
<!-- <img src="https://github.com/lucAmbr0/SchoolTimetable/blob/master/screenshots/mobile-screenshot3.png?raw=true" width="200" /> -->
</div>


## :star2: Credit/Acknowledgment
I'm the only one that worked on this as of now :')

##  :lock: License
This project is licensed with MIT License. You can practically do anything with this code and also reuse it for commerical purposes. Read the full License file for more specific details.
