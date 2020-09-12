import mongoose from 'mongoose';

//collection and data structure setup
const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

// collection
export default mongoose.model
('messagecontents',whatsappSchema);
//make sure the collection name matches the one in Database 