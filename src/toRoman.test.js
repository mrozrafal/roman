
import toRoman from './toRoman'

describe('toRoman()', () => {
    it.each([
        [1, "I"],
        [5, "V"]
        

    ])('converts %d to %s', (arabic, expectedRoman)=>{
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
    
    it('does not convert to any roman number 0', () => {
        expect(toRoman(0)).toEqual("none")
    })
});




