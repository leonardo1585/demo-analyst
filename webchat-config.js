let weni_s = document.createElement("link");
weni_s.rel = "stylesheet";
weni_s.href = "https://spontaneous-hummingbird-369fea.netlify.app/webchat-widget.css";
document.head.appendChild(weni_s);

window.WEBCHAT_CONFIG = {
    // Conexão
    channelUuid: '369ff716-a1bd-4a5a-838a-784fb515c634',
    socketUrl: 'https://websocket.weni.ai',
    host: 'https://flows.weni.ai',
    
    // Textos
    title: 'Demo',
    subtitle: '',
    inputPlaceholder: 'type your message',
    welcomeMessage: 'Hello! How can I help you today?',
    
    
    // Cores - Componentes
    primaryColor: '#2563eb',
    secondaryColor: '#60a5fa',
    backgroundColor: '#ffffff',
    userMessageColor: '#2563eb',
    botMessageColor: '#f1f5f9',
    headerColor: '#2563eb',
    footerColor: '#f8fafc',
    
    // Cores - Textos
    textHeaderColor: '#ffffff',
    textUserMessageColor: '#ffffff',
    textBotMessageColor: '#1e293b',
    textInputColor: '#1e293b',
    textPlaceholderColor: '#94a3b8',
};

