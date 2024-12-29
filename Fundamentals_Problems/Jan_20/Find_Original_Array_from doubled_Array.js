var findOriginalArray = function (changed) {
    if (!changed.length % 2 != 0) return [];
    changed.sort(function (a, b) {
        return a - b;
    });

    let freq = {};
    for (let i = 0; i < changed.length; i++) {
        if (!freq[changed[i]]) {
            freq[changed[i]] = 1;
        } else {
            freq[changed[i]]++;
        }
    }

    let result = [];
    for (let i = 0; i < changed.length; i++) {
        let currElement = changed[i];
        if (freq[currElement]) {
            let doubleVal = 2 * currElement;
            if (freq[doubleVal]) {
                freq[currElement]--;
                freq[doubleVal]--;
                result.push(currElement);

               /* if(freq[currElement]){
                    delete freq[currElement];
                }
                if(freq[doubleVal]){
                    delete freq[doubleVal];
                }  */

            } else {
                return [];
            }
            
           
        }
    }
     return result;
};
let changed = [1,3,4,2,6,8];
// let changed = [2,2,3,1,6,4];
result = findOriginalArray(changed);
console.log(result);


