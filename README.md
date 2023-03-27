# D.I.E.G.O.
Welcome to Project DIEGO! **(Dialect Inerpretation Engine Generating Outputs)**
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="img/500px/2.png">
  <source media="(prefers-color-scheme: light)" srcset="img/500px/2.png">
  <img style="height:256px;width:256px;" alt="dark mode light mode icon" src="img/500px/2.png">
</picture>

## Requirements
You need an [OpenAI API Key](https://platform.openai.com/account/api-keys) in order to run this program as intended. You do not need to install any packages
as all of the requests taking place are via ```fetch()```.

## Usage

To use the app, open the ```main.js``` file in a code editor, and edit line 2, ```const TOKEN = 'YOUR_API_KEY'```, to contain your 
[OpenAI API Key](https://platform.openai.com/account/api-keys). Then simply navigate to the `index.html` file in your web browser and allow the app to access your
microphone when prompted, click the send message icon, start speaking, then end the message by clicking the spinning icon. <br><br>
Your words will be transcribed into text by the [OpenAI Whisper API](https://platform.openai.com/docs/models/whisper) and then sent to the
[GPT 3.5 Turbo Endpoint](https://platform.openai.com/docs/models/gpt-3-5), resulting in a response that is visible on screen, and
read off by built-in Text-To-Speech voices on your machine! <br><br>
It is important to note that this site uses ```localStorage``` to keep your conversation history accessible to you. If you do need to clear your cache, I
suggest excluding the localhost URL you run this site on from that process. 


## Contributing
If you would like to contribute to this project, please feel free to submit a pull request. We welcome any suggestions for improvements or bug fixes.

## Use In Other Projects
Please feel free to fork this code for any project you find it useful for! A citation to my GitHub would be nice if you do (-:

### Notes:
- The Whisper API can transcripte 97 languages (as of now)
- On Windows machines, there are TTS voices supporting 10+ languages
- You can continue to send more messages while TTS is still going
- I am aware of the TTS being slow and not having an off button, working on this
