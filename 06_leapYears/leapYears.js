const leapYears = function(year) {
    let token=false;

    if (year%4==0) {
        token=true;
    }

    if (year%100==0) {
        token=false;
    }

    if (year%400==0) {
        token=true;
    }
    
 return token;
};

// Do not edit below this line
module.exports = leapYears;
