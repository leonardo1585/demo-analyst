if (typeof require === 'function') {
    require(['WebChat'], (WebChat) => {
        useWebChat(WebChat);
    });
} else if (window.WebChat) {
    useWebChat(window.WebChat);
} else {
    console.error('It was not possible to load WebChat');
}

function useWebChat(WebChat) {
    let weni_j = document.createElement("div");
    weni_j.id = "wwc";
    document.body.appendChild(weni_j);

    let weni_s = document.createElement("link");
    weni_s.rel = "stylesheet";
    weni_s.href = "https://spontaneous-hummingbird-369fea.netlify.app/webchat-widget.css";
    document.head.appendChild(weni_s);

    let weni_p = {
        "channelUuid": '369ff716-a1bd-4a5a-838a-784fb515c634',
        "socketUrl": 'https://websocket.weni.ai',
        "host": 'https://flows.weni.ai',
        "title": 'Demo',
        "subtitle": '',
        "inputPlaceholder": 'type your message',
        "welcomeMessage": 'Hello! How can I help you today?',
        "primaryColor": '#2563eb',
        "secondaryColor": '#60a5fa',
        "backgroundColor": '#ffffff',
        "userMessageColor": '#2563eb',
        "botMessageColor": '#f1f5f9',
        "headerColor": '#2563eb',
        "footerColor": '#f8fafc',
        "textHeaderColor": '#ffffff',
        "textUserMessageColor": '#ffffff',
        "textBotMessageColor": '#1e293b',
        "textInputColor": '#1e293b',
        "textPlaceholderColor": '#94a3b8'
    };

    weni_p["customMessageDelay"] = message => {
        return 1 * 1000;
    }

    WebChat.default.init(weni_p);
}
