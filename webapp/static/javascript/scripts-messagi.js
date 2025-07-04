/* styles.css */
html, body {
    height: 100%;
    margin: 0;
    font-family: Arial, sans-serif;
    background: #fafafa;
}

.chat-app {
    display: flex;
    height: 100vh;
    max-width: 900px;
    margin: auto;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.chat-list {
    width: 300px;
    border-right: 1px solid #ddd;
    overflow-y: auto;
    background: white;
}

.list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.chat-preview {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
}

.chat-preview:hover {
    background-color: #f0f0f0;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.chat-info {
    overflow: hidden;
}

.chat-name {
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.last-message {
    font-size: 0.8em;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.chat-window {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: white;
}

.messages {
    flex-grow: 1;
    overflow-y: auto;
    padding: 10px;
}

.message-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ddd;
}

input[type="text"] {
    flex-grow: 1;
    padding: 10px;
    border: none;
    background: #f0f0f0;
}

.icon-button {
    background: none;
    border: none;
    font-size: 24px;
    color: #0095f6;
    cursor: pointer;
}

.icon-button:hover {
    color: #0077cc;
}

button {
    background: none;
    border: none;
    font-size: 24px;
    color: #0095f6;
    cursor: pointer;
}

button:hover {
    color: #0077cc;
}
