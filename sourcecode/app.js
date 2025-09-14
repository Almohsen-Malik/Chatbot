// grab the input to get the message
const userMessage = document.querySelector('textarea');
// grab the chat to append the message
const chat = document.querySelector('#chat');
// grab button
const sendBtn = document.querySelector('#user_input button')

// greet function to display actions
function greet() {
    const greeting = 'Hello! How can I help you today?\n1. Track order\n2. Cancel order\n3. Talk to a human'
    appendMessage(greeting, false)
}

greet()

// function to add bot icon
function addBotIcon() {
    const botIcon = document.createElement('span')
    const botIconImg = document.createElement('img')
    botIconImg.src = 'robot.svg'
    botIconImg.alt = 'bot'
    botIcon.append(botIconImg)
    return botIcon
}

// appends a newly typed message to the chat section
function appendMessage(msg, isHuman) {
    // create a new li element
    const newLi = document.createElement('li');
    // create a paragraph inside li
    const newLiPara = document.createElement('p')
    // add iiner text to the li element
    newLiPara.innerText = msg

    if (isHuman) {
        // add classes
        newLi.classList.add('human_message');
        newLiPara.classList.add('human');
    }
    else {
        // add classes
        newLi.classList.add('bot_message');
        newLiPara.classList.add('bot');
        newLi.append(addBotIcon())
    }

    // append
    newLi.append(newLiPara)
    chat.append(newLi)
    autoScroll()
}

// event listener for button
sendBtn.addEventListener('click', function () {
    appendMessage(userMessage.value, true)
    //clear input
    userMessage.value = ''
    userMessage.focus()
    greet()
})

// add auto scroll
function autoScroll() {
    chat.scrollTop = chat.scrollHeight
}