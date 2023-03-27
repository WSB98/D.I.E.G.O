// YOUR OPENAI API KEY
const TOKEN = 'YOUR_API_KEY';


/*  --> make sure to refresh the page after accepting microphone permissions

    Hello! This template for the personal AI chatbot DIEGO was created by
    BKR_studio 

    This is the bare minimum for  a personal AI. there is a long road ahead for 
    these kinds of things, but the acccessibility of this technology is years
    beyond where i thought we would be. So on that note - i hope you enjoy this creation
    and find ways to use it that i would have never thought to do (:

*/



/* theme selector JS */
//event listener to show the color pickers
document.getElementById('themeSelector').addEventListener('click', async () => {
    document.getElementById('themeSelectionContainer').classList.add('expandColorPicker');
  });
  
  //get style from page, get the default styles 
  var styles = getComputedStyle(document.body);
  var currBG = styles.getPropertyValue('--background').trim();
  var currFG = styles.getPropertyValue('--foreground').trim();
  
  
  //check if user has set colors before and change BG and FG accordingly 
  if(localStorage.getItem('currBGcolor')){
    document.documentElement.style.setProperty('--background',localStorage.getItem('currBGcolor'))
    currBG = localStorage.getItem('currBGcolor')
  }
  if(localStorage.getItem('currFGcolor')){
    document.documentElement.style.setProperty('--foreground',localStorage.getItem('currFGcolor'))
    currFG = localStorage.getItem('currFGcolor')
  }
  
  //set the variables to input elements
  const colorSelectedBG = document.getElementById('BGcolor');
  const colorSelectedFG = document.getElementById('FGcolor');
  
  //set the value of the inputs to the currently selected colors
  colorSelectedBG.value = currBG;
  colorSelectedFG.value = currFG;
  
  colorSelectedBG.addEventListener('change', async (e) => {
    document.documentElement.style.setProperty('--background',e.target.value)
    await localStorage.setItem('currBGcolor',e.target.value)
  
      //load into header with the custom colors
      document.getElementById('headerLogo').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" zoomAndPan="magnify" viewBox="0 0 768 767.999994" height="48" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="c6d8ebe72f"><path d="M 384 0 C 171.921875 0 0 171.921875 0 384 C 0 596.078125 171.921875 768 384 768 C 596.078125 768 768 596.078125 768 384 C 768 171.921875 596.078125 0 384 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#c6d8ebe72f)"><rect x="-76.8" width="921.6" fill="${localStorage.getItem('currFGcolor')}" y="-76.799999" height="921.599993" fill-opacity="1"/></g><path fill="${localStorage.getItem('currBGcolor')}" d="M 492.203125 184.746094 C 470.871094 199.953125 459.042969 226.777344 450.808594 250.855469 C 447.429688 260.570312 454.398438 272.820312 465.167969 273.03125 C 482.699219 273.453125 500.226562 273.664062 517.542969 273.875 C 533.171875 274.300781 554.082031 277.46875 568.230469 270.074219 C 576.679688 265.640625 576.890625 254.867188 569.707031 249.164062 C 556.613281 239.027344 534.015625 239.660156 518.179688 239.027344 C 499.804688 238.394531 481.429688 238.605469 463.269531 240.082031 C 469.605469 247.265625 475.941406 254.65625 482.0625 261.835938 C 487.765625 238.394531 499.59375 217.484375 506.5625 194.460938 C 509.519531 185.378906 499.382812 179.679688 492.203125 184.746094 Z M 492.203125 184.746094 " fill-opacity="1" fill-rule="nonzero"/><path fill="${localStorage.getItem('currBGcolor')}" d="M 89.246094 420.875 C 108.253906 465.230469 146.691406 496.699219 188.085938 519.511719 C 234.125 544.855469 284.808594 561.75 336.765625 569.355469 C 437.503906 583.929688 543.730469 557.105469 615.960938 483.183594 C 651.652344 446.644531 679.738281 398.699219 682.0625 346.742188 C 682.695312 333.648438 664.113281 329.425781 659.464844 342.097656 C 645.527344 379.902344 626.519531 415.386719 598.855469 445.164062 C 571.398438 474.523438 538.242188 496.910156 500.859375 511.90625 C 412.160156 547.601562 306.984375 535.5625 221.03125 497.96875 C 176.046875 477.902344 136.976562 447.699219 104.242188 410.949219 C 97.058594 403.136719 85.234375 411.582031 89.246094 420.875 Z M 89.246094 420.875 " fill-opacity="1" fill-rule="nonzero"/><path fill="${localStorage.getItem('currBGcolor')}" d="M 233.914062 209.035156 C 221.664062 236.28125 219.761719 271.976562 229.054688 300.488281 C 233.066406 312.527344 253.976562 314.640625 253.765625 299.011719 C 253.765625 284.015625 252.074219 269.019531 251.230469 254.023438 C 250.386719 239.238281 250.175781 224.664062 248.484375 210.09375 C 247.640625 202.066406 236.660156 202.910156 233.914062 209.035156 Z M 233.914062 209.035156 " fill-opacity="1" fill-rule="nonzero"/></svg>
    `
  });
  colorSelectedFG.addEventListener('change', async (e) => {
    document.documentElement.style.setProperty('--foreground',e.target.value)
    await localStorage.setItem('currFGcolor',e.target.value)
  
      //load into header with the custom colors
      document.getElementById('headerLogo').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" zoomAndPan="magnify" viewBox="0 0 768 767.999994" height="48" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="c6d8ebe72f"><path d="M 384 0 C 171.921875 0 0 171.921875 0 384 C 0 596.078125 171.921875 768 384 768 C 596.078125 768 768 596.078125 768 384 C 768 171.921875 596.078125 0 384 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#c6d8ebe72f)"><rect x="-76.8" width="921.6" fill="${localStorage.getItem('currFGcolor')}" y="-76.799999" height="921.599993" fill-opacity="1"/></g><path fill="${localStorage.getItem('currBGcolor')}" d="M 492.203125 184.746094 C 470.871094 199.953125 459.042969 226.777344 450.808594 250.855469 C 447.429688 260.570312 454.398438 272.820312 465.167969 273.03125 C 482.699219 273.453125 500.226562 273.664062 517.542969 273.875 C 533.171875 274.300781 554.082031 277.46875 568.230469 270.074219 C 576.679688 265.640625 576.890625 254.867188 569.707031 249.164062 C 556.613281 239.027344 534.015625 239.660156 518.179688 239.027344 C 499.804688 238.394531 481.429688 238.605469 463.269531 240.082031 C 469.605469 247.265625 475.941406 254.65625 482.0625 261.835938 C 487.765625 238.394531 499.59375 217.484375 506.5625 194.460938 C 509.519531 185.378906 499.382812 179.679688 492.203125 184.746094 Z M 492.203125 184.746094 " fill-opacity="1" fill-rule="nonzero"/><path fill="${localStorage.getItem('currBGcolor')}" d="M 89.246094 420.875 C 108.253906 465.230469 146.691406 496.699219 188.085938 519.511719 C 234.125 544.855469 284.808594 561.75 336.765625 569.355469 C 437.503906 583.929688 543.730469 557.105469 615.960938 483.183594 C 651.652344 446.644531 679.738281 398.699219 682.0625 346.742188 C 682.695312 333.648438 664.113281 329.425781 659.464844 342.097656 C 645.527344 379.902344 626.519531 415.386719 598.855469 445.164062 C 571.398438 474.523438 538.242188 496.910156 500.859375 511.90625 C 412.160156 547.601562 306.984375 535.5625 221.03125 497.96875 C 176.046875 477.902344 136.976562 447.699219 104.242188 410.949219 C 97.058594 403.136719 85.234375 411.582031 89.246094 420.875 Z M 89.246094 420.875 " fill-opacity="1" fill-rule="nonzero"/><path fill="${localStorage.getItem('currBGcolor')}" d="M 233.914062 209.035156 C 221.664062 236.28125 219.761719 271.976562 229.054688 300.488281 C 233.066406 312.527344 253.976562 314.640625 253.765625 299.011719 C 253.765625 284.015625 252.074219 269.019531 251.230469 254.023438 C 250.386719 239.238281 250.175781 224.664062 248.484375 210.09375 C 247.640625 202.066406 236.660156 202.910156 233.914062 209.035156 Z M 233.914062 209.035156 " fill-opacity="1" fill-rule="nonzero"/></svg>
    `
  });

  /* checkbox close on clicking outside of it */
const colorPicker = document.getElementById('themeSelectionContainer');
const inputsColors = document.getElementById('colorSelectors');

document.addEventListener('click', function(event) {
  if (!colorPicker.contains(event.target)) {
    if(inputsColors.style.display !== 'none'){
      colorPicker.classList.remove('expandColorPicker')
    }
  }
});

/* swap colors in the theme editor */
var swapper = document.getElementById('themeSwapperIcon')
swapper.addEventListener('click', async () => {
  
  currBG = localStorage.getItem('currFGcolor');
  currFG = localStorage.getItem('currBGcolor');

  localStorage.setItem('currBGcolor', currBG);
  localStorage.setItem('currFGcolor', currFG);

  colorSelectedBG.value = currBG;
  colorSelectedFG.value = currFG;

  setTimeout(window.location.reload(),1000);

});


// STORAGE MOD TO STORE CONVERSATION 
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
// REQUEST ACCESS TO MIC AND RECORD 

// WILL ADD STOPPING RECORDING ON PAUSE LATER

const recordButton = document.querySelector('#record');
const stopButton = document.querySelector('#stop');
const audio = document.querySelector('audio');
const deviceSelect = document.querySelector('#deviceSelect');
const conversationText = document.querySelector('#activeConversation')
const closeHistory = document.querySelector('#closeHistory')
const historyTable_data = document.getElementById('historyTableData')
const historyMenuBtn = document.querySelector('#historyBtn')
const historyMenu = document.getElementById('historyTable');
const container = document.querySelector('#container')
var voiceList = document.querySelector('#voiceSelect')
var currUserMessages = [];
let mediaRecorder;
let chunks = [];
var conversationHTML;
var tempID = makeid(6)
var messageCount = 0;


deviceSelect.addEventListener('change', async (e) => {
    console.log(e.target.value)
    localStorage.setItem('currInput',e.target.value)
});


//check for devices and request access
async function devices(){
    const recognition = new webkitSpeechRecognition();
    recognition.start()
    recognition.onstart = function (){
        
        localStorage.setItem('micAccessGranted', 'true')
        if(localStorage.getItem('micAccessGranted') !== 'true') {
            window.location.reload()
        }
    }
    
    
    
    //setTimeout(window.location.reload(), 2000)
}

async function checkLocalStorage(){
    if(localStorage.getItem('currInput')){
        var index = await localStorage.getItem('currInput')
        deviceSelect.value = index

        console.log(deviceSelect.value)
    }
    else{
        devices()
    }

}
setTimeout( async function () {
    checkLocalStorage()
}, 100);
//check for locally saved stuff



recordButton.onclick = async () => {
    recordButton.classList.add('hidden')
    stopButton.classList.remove('hidden')
  const devices = await navigator.mediaDevices.enumerateDevices();
  const audioDevices = devices.filter(device => device.kind === 'audioinput');
  if (audioDevices.length === 0) {
    console.error('No audio input devices found.');
    return;
  }
  const selectedDevice = audioDevices[deviceSelect.selectedIndex];
  const constraints = { audio: { deviceId: selectedDevice.deviceId } };

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    console.log(`Recording started using device "${selectedDevice.label}"...`);
    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/mpeg' });
      chunks = [];
      const audioURL = URL.createObjectURL(blob);
      audio.src = audioURL;
    };
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

stopButton.onclick = () => {
    stopButton.classList.add('hidden')
    recordButton.classList.remove('hidden')
    mediaRecorder.stop();
    console.log("Recording stopped...");
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/mpeg' });
      chunks = [];
      const audioURL = URL.createObjectURL(blob);
      audio.src = audioURL;
      sendData(blob); // send the recorded audio to the API for transcription
    };
  }
  

navigator.mediaDevices.enumerateDevices()
  .then(devices => {
    const audioDevices = devices.filter(device => device.kind === 'audioinput');
    if (audioDevices.length === 0) {
      console.error('No audio input devices found.');
      return;
    }
    audioDevices.forEach(device => {
      const option = document.createElement('option');
      option.value = device.deviceId;
      option.text = device.label;
      deviceSelect.appendChild(option);
    });
  })
  .catch(err => console.error(`Error: ${err}`));



// SEND THE AUDIO TO WHISPER    

async function sendData(data) {
   
    const file = data; // assuming you have the audio blob stored in a variable named 'audioBlob'
    const model = 'whisper-1';

    const formData = new FormData();
    formData.append('file', file, 'audio.mp3');
    formData.append('model', model);

    await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    },
    body: formData
    })
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
    })
    .then(async data => {
    console.log(data);
    // show the user message in the chatbox
    //user message
    messageCount+=1
    conversationText.innerHTML += `<div class='userMessage align-left'>${data['text']}</div> <br>`;
    conversationHTML += `<div class='userMessage align-left'>${data['text']}</div> <br>`;
    //scroll to the bottom with every message
    container.scrollTo(0,2000 * messageCount);
    // collects all messages in the history and 
    currUserMessages.push({"role":"user","content":data['text']});
    await sendToGPT(currUserMessages)
    })
    .catch(error => {
    console.error('Error:', error);
    });

  }

  // SEND TEXT TO GPT-3.5-TURBO
async function sendToGPT(currUserMessages){
    let txt;
    //call openai api
    await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",           // LIST OF MODELS (format changes slightly for each)
            "messages": currUserMessages,       //      gpt-3.5-turbo = chatGPT (as of 3/26/2023)
            "temperature": 0.35,
            "max_tokens": 500,
            "top_p": 1,
            "frequency_penalty": 0.0,
            "presence_penalty": 0.0
        })
        }
    ).then(response => response.json())
    .then(data => {
        //replace /n with <br> for HTML rendering 
        //replace backticks with code tags
        // make any HTML code non-renderable
        txt = data['choices'][0]['message']['content'].replace(/<(.+?)>/g, "&lt$1&gt") //replaces all tags 
        txt = txt.replace(/(?:\r\n|\r|\n)/g, '<br>') //replaces all new lines 
        txt = txt.replace(/```(.+?)```/g, "<pre><code>$1</code></pre>") //repalces backticks to be pre/code

        //RAW
        //txt = data['choices'][0]['message']['content']
    })
    .catch(error => console.error(error))

    messageCount+=1
    currUserMessages.push({'role':'assistant','content':`${txt}`})
    conversationText.innerHTML += `<div id='${tempID}' class='chatResponse align-left'>${txt}</div> <br>`
    conversationHTML += `<div class='chatResponse align-left'>${txt}</div> <br>`
    container.scrollTo(0,2000 * messageCount);
    tts(txt.replace(/<[^>]*>/g, ''));
    
    //  typewriter animation, doesnt work with rendering coding questions
    /* for (var j = 0; j < txt.length; j++) {
        (function(j) {
            setTimeout(function() {
            document.getElementById(`${tempID}`).innerHTML += txt.charAt(j);
          }, j*50);
        })(j);
      } */


      // set the current convo to our current messages 
      currConversation = currUserMessages;

      //if we are on the first response add the HTML to the history table
    if(messageCount === 2){
        historyTable_data.innerHTML+=   `<tr id="history${tempID}" class="trow">
                                            <td id='topic${tempID}' class="tdata">${txt.slice(0,40) + '...'}</td>
                                            <td id='data${tempID}' class="hidden_column">${currConversation}</td>
                                        </tr>`
    }
    else{
        document.getElementById(`data${tempID}`).innerHTML = currConversation; // after the first we keep updating the hiddne column with the ongoing conversation
    }

      localStorage.setItem(`conversationHTML-${tempID}`, conversationHTML)
      localStorage.setObj(`currMessages-${tempID}`, currUserMessages)
      localStorage.setItem(`history`,historyTable_data.innerHTML)
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


// TTS SECTION

async function tts(text){
    let utternance = new SpeechSynthesisUtterance(text);
    for(let voice of speechSynthesis.getVoices()){
        if(voice.name === voiceList.value){
            utternance.voice = voice
        }
    }

    speechSynthesis.speak(utternance);

    let r = setInterval(() => {
        if(!speechSynthesis.speaking){
            clearInterval(r)
        }
        else {
            speechSynthesis.pause();
            speechSynthesis.resume();
        }
    }, 14000)
}

let synth = speechSynthesis
async function voice(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === "Google UK English Male" ? "Selected" : "";
        let option = `<option value="${voice.name}"${selected}>${voice.name} (${voice.lang})<option`
        voiceList.insertAdjacentHTML("beforeend", option);
    };
}
voice()
synth.addEventListener('voiceschanged', voice);


// view and close history 
//open history
historyMenuBtn.addEventListener('click', async (e) => {
    historyMenu.style.transform = 'translate(0px,1050px)';
    historyMenuBtn.style.transform = 'translate(0px,-1000px)';
});

//close history
closeHistory.addEventListener('click', async (e) => {
    historyMenu.style.transform = 'translate(0px,-1000px)';
    historyMenuBtn.style.transform = 'translate(0px,0px)';
});

//change the converation to one from local history
historyTable_data.addEventListener('click', async (e) => {
    //if we click the head, do nothing
    if(e.target.className === 'thead IBM-monospace'){
        //do nothing
    }
    else{
        // get the ID generated for that converastion
        var target = e.target.id.split('topic')[1];
        // get the stored object of the conversation history
        var storedConversation = localStorage.getObj(`currMessages-${target}`);

        //set the current converastions messages to the stored one under the given ID
        currUserMessages = storedConversation;

        //set the ID to the target so history does not get messed up when continuing the conversation
        tempID = target;

        //set the innerHTML of dialogueBOX to the messages from localHistory
        conversationText.innerHTML = localStorage.getItem(`conversationHTML-${target}`)

        conversationHTML = localStorage.getItem(`conversationHTML-${target}`)

        messageCount=2;
    }
});


//if there are chats in the history of this device, add them to the log
if(localStorage.getItem('history')){
    historyTable_data.innerHTML = localStorage.getItem('history')
}