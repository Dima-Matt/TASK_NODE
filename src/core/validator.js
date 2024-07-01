export class Validator {
    
    static required(str = '') {
        return str && str.trim();
    }

    static isEmailValid(value = '') {
        
        const arrFromStr = value.trim().split('');
        
        for (let i = 0; i < arrFromStr.length; i++) {
            if (arrFromStr[i] === ' ') return false;              
        }

        if (!value.includes('@')) return false;

        return value.trim();
        
    }

    static isPasswordValid(value = '') {
        const counter = {
            letter: 0,
            digit: 0, 
            uppercaseLetter: 0,
        }

        const arrFromStr = value.trim().split('');

        arrFromStr.forEach((elem) => {
            if (typeof elem === 'string' && !isFinite(elem)) {
                counter.letter++;
            }

            if (isFinite(elem)) {
                if (elem !== '')
                counter.digit++;
            }

            if (!isFinite(elem) && new RegExp(/[А-Яа-яA-Za-z]/g.test(elem) && elem === elem.toUpperCase())) {
                counter.uppercaseLetter++;
            }
        });

        for(let key in counter) {
            if (counter[key] === 0) return false;
        }

        return value;
    }

}

