const Block = require('./block');
const { GENESIS_DATA } = require('./config');


describe('Block', () => {
    const timestamp = 'a-date';
    const lastHash = 'a-lastHash';
    const hash = 'a-hash';
    const data = ['string1', 'string2', 'string3'];
    const block = new Block({ timestamp, lastHash, hash, data });

    it('has a timestamp, lastHash, hash, and data property', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    describe('genesis()', () => {

        const genesisBlock = Block.genesis();

        it('returns a Block instance', () => {
            expect(genesisBlock instanceof Block).toBe(true);
        });

        it('returns the genesis data', () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);

        });
    });

});