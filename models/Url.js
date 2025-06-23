const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        shortId: String,
        accessCount: {
            type: Number,
            default: 0
        }}
});

module.exports = mongoose.model('Url', UrlSchema);

// This schema defines a URL model with fields for the original URL, a short ID, and an access count.
// The access count is initialized to 0 by default.