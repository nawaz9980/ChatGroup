// Bot configuration
module.exports = {
    // Welcome message template
    // Available placeholders: {name}, {username}, {chat}
    welcomeMessage: `🎉 Welcomes to {chat}, {name}!\n\n` +
                   `We're glad to have you here. Please take a moment to read our community guidelines and feel free to introduce yourself!\n\n` +
                   `Click the button below to learn more about our community.`,
    
    // Inline button configuration
    buttonText: '💰 Join BitFaucet',
    buttonUrl: process.env.WELCOME_BUTTON_URL || 'https://bitfaucet.net/?r=7940',
    
    // Auto-delete timing (in milliseconds)
    // Default: 60 seconds (60000ms)
    deleteAfterMs: parseInt(process.env.DELETE_AFTER_SECONDS || '60') * 1000,
    
    // Whether to welcome bot users (default: false)
    welcomeBots: process.env.WELCOME_BOTS === 'true' || false,
    
    // Logging configuration
    enableDebugLogs: process.env.DEBUG === 'true' || false
};
