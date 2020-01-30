
import toRoman from './toRoman'

describe('toRoman()', () => {
    it.each([
        [1, "I"],
        [5, "V"],
        [10, "X"],
        [200, "CC"],
        [474, "CDLXXIV"],
        [2019, "MMXIX"]
        

    ])('converts %d to %s', (arabic, expectedRoman)=>{
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
    
    it('does not convert to any roman number 0', () => {
        expect(toRoman(0)).toEqual("Enter a number between 1 and 3999")
    })
    it('does not convert to any roman number above 3999', () => {
        expect(toRoman(0)).toEqual("Enter a number between 1 and 3999")
    })
});




