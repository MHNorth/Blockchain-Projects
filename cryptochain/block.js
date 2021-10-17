


class Block {
    constructor({timestamp, lastHash, hash, data}) {  //Curly braces inside the constructor insures strict order is followed
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
}


module.exports = Block;