// ---------------------Remove residual elements and navigate to another page / Add animation effect ---------------------//

// When btnword is clicked
document.getElementById("btnword").addEventListener("click", () => {
  const languageModal = document.getElementById("languageModal");

  // Hide modal
  if (languageModal) {
    languageModal.style.display = "none";
  }
  // Open Word.html file
  window.location.href = "word.html";
});

// When btnmain is clicked
document.getElementById("btnmain").addEventListener("click", () => {
  const languageModal = document.getElementById("languageModal");

  // Hide modal
  if (languageModal) {
    languageModal.style.display = "none";
  }

  // Open index.html file
  window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const languageModal = document.getElementById("languageModal");

  // Hide modal when the page loads
  if (languageModal) {
    languageModal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in"); // Apply fade-in animation after the page loads
});

//----------------------Language change -------------------------//
// Translation data by language
const translations = {
  ko: {
    welcomeMessage: "안녕하세요! 무엇을 도와드릴까요?",
    btnsend: "전송",
    instructionText:
      "저장하고 싶은 대화를 선택하고 하단에 제목을 입력해주세요. 우측의 확인 버튼을 클릭 시 응답이 저장됩니다.",
    confirmBtnText: "확인",
  },
  en: {
    welcomeMessage: "Hello! How can I assist you?",
    btnsend: "Send",
    instructionText:
      "Select the conversation you want to save and enter a title below. Clicking the confirm button on the right will save the response.",
    confirmBtnText: "OK",
  },
  hi: {
    welcomeMessage: "नमस्ते! मैं आपकी किस प्रकार मदद कर सकता हूँ?",
    btnsend: "भेजना",
    instructionText:
      "आप जिस बातचीत को सहेजना चाहते हैं, उसे चुनें और नीचे एक शीर्षक दर्ज करें। दाहिने ओर पुष्टि बटन पर क्लिक करने से प्रतिक्रिया सहेज ली जाएगी।",
    confirmBtnText: "ठीक है",
  },
  vi: {
    welcomeMessage: "Xin chào! Tôi có thể giúp gì cho bạn?",
    btnsend: "Gửi",
    instructionText:
      "Chọn cuộc trò chuyện bạn muốn lưu và nhập tiêu đề bên dưới. Bấm nút xác nhận bên phải để lưu phản hồi.",
    confirmBtnText: "Xác nhận",
  },
  ru: {
    welcomeMessage: "Здравствуйте! Как я могу помочь вам?",
    btnsend: "Отправить",
    instructionText:
      "Выберите беседу, которую хотите сохранить, и введите заголовок ниже. Нажатие кнопки подтверждения справа сохранит ответ.",
    confirmBtnText: "ОК",
  },
  zh: {
    welcomeMessage: "你好！我能为你做些什么？",
    btnsend: "发送",
    instructionText:
      "选择您要保存的对话并在下方输入标题。点击右侧的确认按钮将保存响应。",
    confirmBtnText: "确定",
  },
  th: {
    welcomeMessage: "สวัสดี! ฉันช่วยอะไรคุณได้บ้าง?",
    btnsend: "ส่ง",
    instructionText:
      "เลือกการสนทนาที่คุณต้องการบันทึกและกรอกหัวข้อด้านล่าง การคลิกปุ่มยืนยันที่ด้านขวาจะบันทึกการตอบกลับ",
    confirmBtnText: "ตกลง",
  },
  uz: {
    welcomeMessage: "Salom! Qanday yordam bera olaman?",
    btnsend: "Yuborish",
    instructionText:
      "Saqlamoqchi bo'lgan suhbatni tanlang va quyida sarlavha kiriting. O'ngdagi tasdiqlash tugmasini bosish javobni saqlaydi.",
    confirmBtnText: "OK",
  },
  tl: {
    welcomeMessage: "Kamusta! Paano kita matutulungan?",
    btnsend: "Ipadala",
    instructionText:
      "Piliin ang pag-uusap na nais mong i-save at maglagay ng pamagat sa ibaba. I-click ang confirm na button sa kanan upang i-save ang sagot.",
    confirmBtnText: "OK",
  },
  ja: {
    welcomeMessage: "こんにちは！どのようにお手伝いできますか？",
    btnsend: "送信",
    instructionText:
      "保存したい会話を選択し、下にタイトルを入力してください。右側の確認ボタンをクリックすると、返信が保存されます。",
    confirmBtnText: "確認",
  },
};

// ---------------------------Current Language--------------------//
let currentLanguage = "ko"; // Default language is set to Korean

// Get DOM elements related to the language modal
const languageModal = document.getElementById("languageModal");
const closeModalButton = document.getElementById("closeModal");
const langgeButton = document.getElementById("lang-btn");
const languageList = document.getElementById("languageList");

// Initialize modal on page load (set to hidden state)
languageModal.style.display = "none"; // Hide the modal by default

// Event to open the modal
langgeButton.addEventListener("click", () => {
  if (languageModal) {
    languageModal.style.display = "flex"; // Display the modal
  } else {
    console.error("Modal element not found.");
  }
});

// Event to close the modal
closeModalButton.addEventListener("click", () => {
  if (languageModal) {
    languageModal.style.display = "none"; // Hide the modal
  } else {
    console.error("Modal element not found.");
  }
});

// Event for selecting a language
languageList.addEventListener("click", (event) => {
  const selectedLang = event.target.getAttribute("data-lang");
  if (selectedLang) {
    currentLanguage = selectedLang; // Update the current language
    updateLanguage(); // Update the screen language
    languageModal.style.display = "none"; // Close the modal
  }
});

// Update the screen language on page load
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage();
});

// Function to update the UI based on the selected language
function updateLanguage() {
  const langData = translations[currentLanguage];

  document.getElementById("sendButton").textContent = langData.btnsend;

  // Update text in 'log-container'
  const instructionText = document.querySelector(".instruction-text");
  const confirmBtn = document.querySelector(".input-button-container button");

  if (instructionText) {
    instructionText.textContent = langData.instructionText;
  }

  if (confirmBtn) {
    confirmBtn.textContent = langData.confirmBtnText;
  }
}

// Event to handle adding a message
function addMessage(text, type) {
  const messageBox = document.createElement("div");
  messageBox.classList.add("chat-message");
  if (type === "bot") {
    messageBox.classList.add("bot");
  }

  messageBox.textContent = text;

  // Add the message to the chat container
  chatContainer.appendChild(messageBox);

  // Scroll to the bottom of the chat
  messageBox.scrollIntoView({ behavior: "smooth", block: "end" });
}

// Add event listener for language selection
document.getElementById("languageList").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    // Check if the clicked element is an <li>
    const selectedLang = event.target.getAttribute("data-lang");
    if (selectedLang) {
      currentLanguage = selectedLang; // Update to the selected language
      const langData = translations[currentLanguage]; // Fetch translations for the language

      // First message: Add the selected language name as a bot message
      addMessage(`${event.target.textContent}`, "bot");

      // Second message: Add a welcome message in the selected language
      setTimeout(() => {
        const botMessageElement = addMessage(langData.welcomeMessage, "bot");
        botMessageElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }); // Scroll to the top
      }, 100); // Add after a slight delay (0.1 seconds)

      // Close the language modal
      languageModal.style.display = "none";
    }
  }
});

//---------------------------Chat--------------------//

// Function to add a message to the chat
function addMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", sender);
  messageElement.textContent = message;

  chatbox.appendChild(messageElement);

  return messageElement; // Return the newly added message element
}

// Event listener for sending a message
document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Function to send a message
function sendMessage() {
  const inputField = document.getElementById("userInput");
  const userMessage = inputField.value.trim(); // Get user input text

  if (userMessage === "") return; // Prevent sending empty messages

  console.log("User Message:", userMessage);
  const userMessageElement = addMessage(userMessage, "user");

  // Display the user's message on the screen
  userMessageElement.scrollIntoView({ behavior: "smooth", block: "end" });

  // Generate a bot response via API
  getBotResponse(userMessage).then((botMessage) => {
    console.log("Bot Message:", botMessage);
    // Add the bot's message with a slight delay
    setTimeout(() => {
      const botMessageElement = addMessage(botMessage, "bot");

      // Create a voice button
      const voiceButton = document.createElement("button");
      voiceButton.textContent = "🎧"; // Set the initial icon
      voiceButton.className = "audio-button";

      // Manage speaking and stopping states
      let isSpeaking = false;
      function createUtterance(text, language) {
        const voices = synth.getVoices();

        // Force replace Filipino and Uzbek languages with English and Russian
        if (language === "tl") {
          language = "en"; // Filipino -> English
        } else if (language === "uz") {
          language = "ru"; // Uzbek -> Russian
        }

        // Get a voice matching the language
        const voice = voices.find((v) => v.lang.startsWith(language)) || null;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = voice ? voice.lang : language; // Set language code
        utterance.voice = voice;
        return utterance;
      }

      // Event for clicking the voice button
      voiceButton.addEventListener("click", () => {
        if (isSpeaking) {
          // Stop speaking
          speechSynthesis.cancel();
          isSpeaking = false;
          voiceButton.textContent = "🎧"; // Reset the icon
        } else {
          // Start speaking
          speechSynthesis.cancel(); // Stop any ongoing speech
          const utterance = createUtterance(
            botMessage,
            currentLanguage // Current language setting
          );
          speechSynthesis.speak(utterance); // Start speaking
          isSpeaking = true;
          voiceButton.textContent = "⬜️"; // Change the icon to a stop symbol

          // Reset state after speech ends
          utterance.onend = () => {
            isSpeaking = false;
            voiceButton.textContent = "🎧"; // Reset the icon
          };
        }
      });

      // Create a container for the bot message and the button
      const botMessageContainer = document.createElement("div");
      botMessageContainer.classList.add("bot-message-container");
      botMessageContainer.appendChild(botMessageElement);
      botMessageContainer.appendChild(voiceButton); // Add the button to the right

      // Add the container to the chatbox
      const chatbox = document.getElementById("chatbox");
      chatbox.appendChild(botMessageContainer);

      // Display the bot message on the screen
      botMessageContainer.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  });

  inputField.value = ""; // Clear the input field
}
// ------------------------API Integration --------------------------//
// Function to call OpenAI API
async function getBotResponse(userMessage) {
  const response = await fetch(
    `https://lawbot.ddns.net/ask/keyword?question=${encodeURIComponent(
      userMessage
    )}`
  );
  try {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Return either the answer or reply from the API response
    return (
      data.answer || data.reply || "Sorry, unable to generate a response."
    );
  } catch (error) {
    console.error("Error fetching bot response:", error);
    return "There was an issue communicating with the server.";
  }
}

// REST API for language detection
async function getLanguage(message) {
  const response = await fetch(
    `https://lawbot.ddns.net/ask/lang?message=${encodeURIComponent(message)}`
  );
  const data = await response.json();
  return data.language || data.reply || "Sorry, unable to detect the language.";
}

// -------------------Voice Recognition-----------------//
// Check if the browser supports voice recognition
if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
  alert("This browser does not support speech recognition.");
}

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();

// Event triggered when voice recognition gets results
recognition.onresult = async (event) => {
  const transcript = event.results[0][0].transcript;

  // Display the user's message on the screen
  addMessage(transcript, "user");

  // Add smooth scroll to the user message
  const userMessageElement = document.querySelector(
    ".chat-message.user:last-child"
  );
  userMessageElement.scrollIntoView({ behavior: "smooth", block: "end" });

  // 1) Detect the language of the input
  const detectedLanguage = await getLanguage(transcript);

  // Set the recognition language
  recognition.lang = detectedLanguage;

  // 2) Process bot response
  const botMessage = await getBotResponse(transcript);

  // 3) Display bot message and add a voice button
  addBotMessageWithVoice(botMessage, detectedLanguage);
};

// Handle errors during voice recognition
recognition.onerror = (event) => {
  console.error("Voice recognition error:", event.error);
  if (event.error === "no-speech") {
    alert("No speech detected. Please try again.");
  }
};

// Event listener for voice button to start voice recognition
document.getElementById("voiceButton").addEventListener("click", () => {
  recognition.start();
});

// Function to handle message sending
async function sendMessage() {
  const inputField = document.getElementById("userInput");
  const userMessage = inputField.value.trim(); // Get the text input by the user

  if (userMessage === "") return; // Prevent empty messages

  // Detect the language of the input via REST API
  const detectedLanguage = await getLanguage(userMessage);

  console.log("User Message:", userMessage);
  const userMessageElement = addMessage(userMessage, "user");

  // Display the user's message on the screen
  userMessageElement.scrollIntoView({ behavior: "smooth", block: "end" });

  // Generate bot response via API
  getBotResponse(userMessage).then((botMessage) => {
    addBotMessageWithVoice(botMessage, detectedLanguage);
  });

  inputField.value = ""; // Clear the input field
}

// Speech synthesis object declaration
const synth = window.speechSynthesis;

let voices = []; // List of available voices

// Function to add a bot message with voice capabilities
function addBotMessageWithVoice(botMessage, detectedLanguage) {
  console.log("Bot Message:", botMessage);

  // Add the bot's message with a slight delay
  setTimeout(() => {
    const botMessageElement = addMessage(botMessage, "bot");

    // Create a voice button
    const voiceButton = document.createElement("button");
    voiceButton.textContent = "🎧"; // Set the initial icon
    voiceButton.className = "audio-button";

    // Manage the speaking state
    let isSpeaking = false;
    function createUtterance(text, language) {
      language = language.substring(0, 1); // Shorten the language code

      voices = synth.getVoices();

      console.log(voices);
      // Replace Filipino and Uzbek with English and Russian, respectively
      if (language === "tl") {
        language = "en"; // Filipino -> English
      } else if (language === "uz") {
        language = "ru"; // Uzbek -> Russian
      }

      // Fetch a voice that matches the language
      const voice = voices.find((v) => v.lang.startsWith(language)) || null;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = voice ? voice.lang : language; // Set the language code
      utterance.voice = voice;
      return utterance;
    }

    // Event listener for the voice button
    voiceButton.addEventListener("click", () => {
      if (isSpeaking) {
        // Stop speech
        synth.cancel();
        isSpeaking = false;
        voiceButton.textContent = "🎧"; // Reset the icon
      } else {
        // Start speech
        synth.cancel(); // Stop any ongoing speech
        const utterance = createUtterance(botMessage, detectedLanguage); // Set the detected language
        synth.speak(utterance); // Start speaking
        isSpeaking = true;
        voiceButton.textContent = "⬜️"; // Change the icon to stop symbol

        // Reset the state when the speech ends
        utterance.onend = () => {
          isSpeaking = false;
          voiceButton.textContent = "🎧"; // Reset the icon
        };
      }
    });
    // Create a container that includes bot messages and buttons
const botMessageContainer = document.createElement("div");
botMessageContainer.classList.add("bot-message-container");
botMessageContainer.appendChild(botMessageElement);
botMessageContainer.appendChild(voiceButton); // Add the button to the right

// Add the container to the chatbox
const chatbox = document.getElementById("chatbox");
chatbox.appendChild(botMessageContainer);

// Display the bot message on the screen
botMessageContainer.scrollIntoView({ behavior: "smooth", block: "end" });
}, 500);
}

// Function to add a message to the chat
function addMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", sender);
  messageElement.textContent = message;
  const chatbox = document.getElementById("chatbox");
  chatbox.appendChild(messageElement);
  return messageElement;
}

//------------- Save Desired Conversations --------------//
const chatbox = document.getElementById("chatbox");
const logBtn = document.querySelector(".log-btn");
const inputContainer = document.querySelector(".input-container");
const mainContainer = document.querySelector(".main-container");
const choiceContainer = document.querySelector(".choice-container");

let selectedMessages = [];

// Enable message selection event handler
function enableMessageSelection() {
  chatbox.addEventListener("click", messageSelectionHandler);
}

// Message selection event handler function
function messageSelectionHandler(event) {
  if (event.target.classList.contains("chat-message")) {
    const msg = event.target;
    msg.classList.toggle("selected");

    const messageText = msg.textContent.trim();
    if (msg.classList.contains("selected")) {
      selectedMessages.push({
        text: messageText,
        sender: msg.classList.contains("user") ? "user" : "bot", // Add sender information
      });
    } else {
      selectedMessages = selectedMessages.filter(
        (message) => message.text !== messageText // Remove if deselected
      );
    }
  }
}

// Save selected messages function
function saveMessages(title) {
  if (selectedMessages.length === 0) {
    alert("Please select the messages you want to save.");
    return;
  }

  const savedMessages = selectedMessages.slice(); // Copy selected messages

  // Reset selected messages after saving
  selectedMessages = [];
  const allMessages = document.querySelectorAll(".chat-message");
  allMessages.forEach((msg) => msg.classList.remove("selected"));

  // Create a button for the saved messages with the given title
  const createdButton = document.createElement("button");
  createdButton.textContent = title;
  createdButton.className = "generated-button";
  choiceContainer.appendChild(createdButton);

  // Show saved messages when the button is clicked
  createdButton.addEventListener("click", () => {
    displaySavedMessages(savedMessages);
  });
}

// Display saved messages on the screen
function displaySavedMessages(savedMessages) {
  // Remove any previously displayed messages
  const existingMessagesContainer = document.querySelector(
    ".saved-messages-container"
  );
  if (existingMessagesContainer) {
    existingMessagesContainer.remove();
  }

  // Create a new container for messages
  const messagesContainer = document.createElement("div");
  messagesContainer.className = "chat-container";

  // Set height
  messagesContainer.style.height = "88vh"; // 88% of the screen height

  // Add LawBot logo
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  logoDiv.style.marginBottom = "30px";
  messagesContainer.appendChild(logoDiv);

  // Add a close button
  const closeButton = document.createElement("button");
  closeButton.className = "close-btn"; // Assign CSS class
  closeButton.textContent = "🔙";
  messagesContainer.appendChild(closeButton);

  // Hide the list button
  const listBtn = document.querySelector(".list-btn");
  if (listBtn) {
    listBtn.style.display = "none"; // Hide list button when messagesContainer is shown
  }

  // Create a new chat box
  const chatBox = document.createElement("div");
  chatBox.className = "chat-box";
  chatBox.style.height = "69vh";

  // Add saved messages to the chat box
  savedMessages.forEach((message) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");

    // Apply user or bot style depending on the sender
    if (message.sender === "user") {
      messageDiv.classList.add("user");
    } else if (message.sender === "bot") {
      messageDiv.classList.add("bot");
    }

    messageDiv.textContent = message.text;
    chatBox.appendChild(messageDiv);
  });

  // Add chat box to the container
  messagesContainer.appendChild(chatBox);

  // Add the container to the main container
  mainContainer.appendChild(messagesContainer);

  // Define close button behavior
  closeButton.addEventListener("click", () => {
    inputContainer.style.display = "block"; // Show the input box again
    messagesContainer.remove(); // Remove the chat container from the screen
    listBtn.style.display = "block"; // Show the list button again
  });
}

// Change log button background color on mousedown
logBtn.addEventListener("mousedown", () => {
  logBtn.style.backgroundColor = "#bee7ff"; // Change background color when clicked
});

// ------------------- + Button Events -------------//
logBtn.addEventListener("click", () => {
  inputContainer.style.display = "none"; // Hide the input box

  // Remove existing log container if present
  const existingLogContainer = document.querySelector(".log-container");
  if (existingLogContainer) {
    existingLogContainer.remove();
  }

  // Create a new log container
  const logContainer = document.createElement("div");
  logContainer.className = "log-container";

  const instructionText = document.createElement("div");
  instructionText.className = "instruction-text";
  logContainer.appendChild(instructionText);

  // Add input field and confirm button
  const inputButtonContainer = document.createElement("div");
  inputButtonContainer.className = "input-button-container";

  const inputField2 = document.createElement("input");
  inputField2.type = "text";
  inputButtonContainer.appendChild(inputField2);

  const confirmBtn = document.createElement("button");
  inputButtonContainer.appendChild(confirmBtn);

  // Add a close button
  const closeButton = document.createElement("button");
  closeButton.className = "close-btn";
  closeButton.textContent = "🔙";
  logContainer.appendChild(closeButton);

  const listBtn = document.querySelector(".list-btn");
  if (listBtn) {
    listBtn.style.display = "none"; // Hide list button when messagesContainer is displayed
  }
  mainContainer.appendChild(logContainer);
  logContainer.appendChild(inputButtonContainer);

  updateLanguage(); // Update text based on the selected language

  // Restore the original state when close button is clicked
  closeButton.addEventListener("click", () => {
    logContainer.remove(); // Remove the log container
    inputContainer.style.display = "block"; // Show the input box again
  });

  // Save messages when confirm button is clicked
  confirmBtn.addEventListener("click", () => {
    const title = inputField2.value.trim(); // Get title from inputField2
    if (title) {
      saveMessages(title); // Save selected messages

      // Show input container after saving
      logContainer.remove(); // Remove the log container
      inputContainer.style.display = "block"; // Show input container again
    } else {
      alert("No!"); // Alert if no title is entered
    }
  });

  // Enable message selection when log button is clicked
  enableMessageSelection();
});