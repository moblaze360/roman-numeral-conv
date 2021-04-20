function convertRoman (str) {
    
        const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        let num = 0;
        for (let i = 0; i < str.length; i++) {
          const curr = roman[str[i]];
          const next = roman[str[i + 1]];
          (curr < next) ? (num -= curr) : (num += curr);
        }
        return num;
      };
  
  export default convertRoman;
  