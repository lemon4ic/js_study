function shotSentence(a){
    if (typeof a !== 'string') {
        alert('не строка');
        return;
    }
    else {
        a = a.trim(); 
        return a.length > 50 ? a.slice(0, 50) + '...' : a;
    
    }
}

console.log(shotSentence('текст'));
console.log(shotSentence('тексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттекстx'));



