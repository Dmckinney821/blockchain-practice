
const crytoHash = require('./cryto-hash');

describe('crytoHash()', () => {
    it('generates a SHA-256 hashed output', () => {
        expect(crytoHash('foo'))
            .toEqual('b2213295d564916f89a6a42455567c87c3f480fcd7a1c15e220f17d7169a790b');
    });
    it('produces the same hash with the smae input arguments in any order', () => {
        expect(crytoHash('one', 'two', 'three')).toEqual(crytoHash('three', 'two', 'one'))
    });

    it('prodcues a unique hash when the properties have changed on the input', () => {
        const foo = {};
        const originalHash = crytoHash(foo);
        foo['a'] = 'a';

        expect(crytoHash(foo)).not.toEqual(originalHash);
    })
});