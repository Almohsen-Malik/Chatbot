// ============================================
// DOM Elements
// ============================================
const userMessage = document.querySelector('textarea');
const chat = document.querySelector('#chat');
const sendBtn = document.querySelector('#user_input button');

// ============================================
// UI Utilities
// ============================================
function addBotIcon() {
    const botIcon = document.createElement('span');
    const botIconImg = document.createElement('img');
    botIconImg.src = '/robot.svg';
    botIconImg.alt = 'bot';
    botIcon.append(botIconImg);
    return botIcon;
}

function autoScroll() {
    chat.scrollTop = chat.scrollHeight;
}

// ============================================
// Message Handling
// ============================================
function appendMessage(msg, isHuman) {
    const newLi = document.createElement('li');
    const newLiPara = document.createElement('p');
    newLiPara.innerText = msg;

    if (isHuman) {
        newLi.classList.add('human_message');
        newLiPara.classList.add('human');
    } else {
        newLi.classList.add('bot_message');
        newLiPara.classList.add('bot');
        newLi.append(addBotIcon());
    }

    newLi.append(newLiPara);
    chat.append(newLi);
    autoScroll();
}

function handleUserResponse() {
    const userInput = userMessage.value;
    console.log(userInput);
    appendMessage(`you typed: ${userInput}`, false);
}

// ============================================
// Bot Interactions
// ============================================
function greet() {
    const greeting = 'Hello! How can I help you today?\n1. Track order\n2. Cancel order\n3. Talk to a human';
    appendMessage(greeting, false);
}

// ============================================
// Event Listeners
// ============================================
sendBtn.addEventListener('click', function () {
    appendMessage(userMessage.value, true);
    handleUserResponse();
    userMessage.value = '';
    userMessage.focus();
});

// ============================================
// Initialize
// ============================================
greet();
