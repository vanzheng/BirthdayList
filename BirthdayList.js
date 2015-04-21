(function(root){
    function BrithdayList(startYear, endYear, yearRange) {
        var fixStartYear, fixEndYear, fixYearRange;
        var d = new Date();
        var year = d.getFullYear();

        fixYearRange = yearRange === undefined ? 99 : yearRange;
        fixEndYear = endYear === undefined ? year : endYear;

        if (startYear === undefined) {
            fixStartYear = fixEndYear - fixYearRange;
        }
        else {
            fixStartYear = startYear;
        }

        this.dateRange = {
            yearStart: fixStartYear,
            yearEnd: fixEndYear,
            monthStart: 1,
            monthEnd: 12,
            dayStart: 1,
            dayEnd: 31
        };
    };

    BrithdayList.prototype = {
        constructor: BrithdayList,
        isLeapYear: function(year) {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) {
                return true;
            }

            return false;
        },
        fixDayRange: function(currentYear, currentMonth) {
            var leapYear = this.isLeapYear(currentYear);
            var dayEnd = 31;

            switch (currentMonth) {
                case 1:
                    dayEnd = 31;
                    break;
                case 2:
                    dayEnd = leapYear ? 29 : 28;
                    break;
                case 3:
                    dayEnd = 31;
                    break;
                case 4:
                    dayEnd = 30;
                    break;
                case 5:
                    dayEnd = 31;
                    break;
                case 6:
                    dayEnd = 30;
                    break;
                case 7:
                    dayEnd = 31;
                    break;
                case 8:
                    dayEnd = 31;
                    break;
                case 9:
                    dayEnd = 30;
                    break;
                case 10:
                    dayEnd = 31;
                    break;
                case 11:
                    dayEnd = 30;
                    break;
                case 12:
                    dayEnd = 31;
                    break;
            }

            this.dateRange.dayEnd = dayEnd;
        }
    }

    root.BrithdayList = BrithdayList;
})(window);
