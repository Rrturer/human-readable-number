module.exports = function toReadable (number) {
    let one = ['', 'one', 'two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];   
    let ten = ['twenty','thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let digit = 0;   
    if (number < 20) return ones[number];   
    if (number < 100) {     
        digit = number % 10; //remainder     
        return ten[Math.floor(number/10)-2] + " " + (digit > 0 ? one[digit] : "");   
    }
    if (number < 1000) {    
         return one[Math.floor(number/100)] + " hundred " + (number % 100 > 0 ? toReadable(number % 100) : "");   
    }  
}
