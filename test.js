const assert = require('assert');
const isSorted = require('./index');


describe('description', () => {
    it('should return true', () => {
        assert(isSorted([ 1, 1, 0 ]));
    });
    it('should return true', () => {
        assert(isSorted([ 1, 1, 5, 5, 9 ]));
    });
    it('should return true', () => {
        assert(isSorted([ 2, 2, 1, 1, 0, 0 ]));
    });
    it('should return true', () => {
        assert(!isSorted([ 1, 1, 0, 9 ]));
    });
    it('should return true', () => {
        assert(!isSorted([ 1, 1, 9, 0 ]));
    });
});
