const form = document.getElementById('form');
const status = document.getElementById('status');
const messages = document.getElementById('messages');
const input = document.getElementById('input');

const ws = new WebSocket('ws://localhost:3000');

function sendMessage(value) {
  const li = document.createElement('li');
  li.innerHTML = value;
  messages.appendChild(li);
}

function setStatus(value) {
  status.innerHTML = value;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  ws.send(input.value);
  input.value = '';
});

ws.onopen = () => setStatus('OPEN');

ws.onclose = () => setStatus('DISCONNECTED');

ws.onmessage = res => sendMessage(res.data);
