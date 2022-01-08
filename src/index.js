module.exports = function toReadable (number) {
    let one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];   
    let ten = ['twenty','thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let n = 0;   
    if (number < 20) return one[number];   
    if (number < 100) {     
        n = number % 10;  
        return ten[Math.floor(number/10)-2] + (n? " " + one[n]: "");   
    }
    if (number < 1000) {    
         return one[Math.floor(number/100)] + " hundred " + (number % 100 > 0 ? toReadable(number % 100) : "");   
    }  
}
