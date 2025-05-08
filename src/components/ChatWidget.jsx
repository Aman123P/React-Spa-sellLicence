import { useState } from 'react';
import './ChatWidget.css'; // CSS file alag se banayenge

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I help you today?', sender: 'bot' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
     //1 sec bad reply krega
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: 'Thanks for your message! Our team will reply soon.',
            sender: 'bot',
          },
        ]);
      }, 1000);
      setNewMessage('');
    }
  };

  return (
    <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
      
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

     
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h3>SoftSell Support</h3>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your question..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
