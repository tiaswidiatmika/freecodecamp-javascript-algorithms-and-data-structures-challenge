function telephoneCheck(str) {
    // check unwanted char -----1
    // check parenthesis--------2
    // check check area code----3

// 1
    if (/[a-z;!@#$%^&*?]/.test(str)) return false;

// 2
    if (/[()]/.test(str)){
        if(!/\(\d{3}\)/.test(str)) return false; // check incomplete prnths
        if(!/\(?(\d{3})-?\)?\s?\1-?\s?\d{4}/g.test(str)) return false; // check default 
    }
// 3
    // return str;
    if(/^\d/.test(str)){
        let purified = str.replace(/\D/gi,'');
        if (purified.length < 10 && /\d*/g.test(str) || purified.length > 11) return false;
        if (purified[0] !== '1' && purified.length === 11) return false;
    }

    return true;
  
}

console.log(telephoneCheck("(275)76227382"));
