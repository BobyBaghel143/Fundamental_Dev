var MeetingRoom = function (Intervals) {
    let start = [];
    let end = [];
    for (let i = 0; i < Intervals.length; i++) {
        start.push(Intervals[i][0]);
        end.push(Intervals[i][1]);
    }

    start.sort(function (a, b) {
        return a - b;
    });
    end.sort(function (a, b) {
        return a - b;
    });


    let i = 0;
    let j = 0;
    let result = -1;
    let current = 0;
    while (i < start.length && j < end.length) {
        if (end[j] <= start[i]) {
            current--;
            j++;
        } else {
            current++;
            result = Math.max(result, current);
            i++;
        }
    }
    return result;
};

let Intervals = [[9, 12], [8, 9], [7, 12], [3, 5], [13, 15], [6, 10], [7, 10]];
result = MeetingRoom(Intervals);
console.log(result);