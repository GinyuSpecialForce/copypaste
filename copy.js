javascript:(function() {
    const textToCopy = 'hello';
    
    const input = document.createElement('textarea');
    input.value = textToCopy;
    
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    
    alert('The word "hello" has been copied to your clipboard!');
})();
