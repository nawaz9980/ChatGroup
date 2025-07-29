const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
require('dotenv').config();

// Get bot token from environment variables
const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('❌ Error: TELEGRAM_BOT_TOKEN environment variable is required');
    process.exit(1);
}

// Create bot instance
const bot = new TelegramBot(token, { polling: true });

// Store message IDs for cleanup
const messageCleanupQueue = new Map();

// Bot startup message
bot.getMe().then((botInfo) => {
    console.log(`🤖 Bot started successfully: @${botInfo.username}`);
    console.log(`📝 Bot ID: ${botInfo.id}`);
    console.log('🔍 Listening for new group members...');
}).catch((error) => {
    console.error('❌ Failed to start bot:', error.message);
    process.exit(1);
});

// Handle new chat members
bot.on('new_chat_members', async (msg) => {
    try {
        const chatId = msg.chat.id;
        const chatType = msg.chat.type;
        
        // Only respond in groups and supergroups
        if (chatType !== 'group' && chatType !== 'supergroup') {
            console.log(`ℹ️  Ignoring new member event in ${chatType} chat`);
            return;
        }

        const newMembers = msg.new_chat_members;
        
        // Process each new member
