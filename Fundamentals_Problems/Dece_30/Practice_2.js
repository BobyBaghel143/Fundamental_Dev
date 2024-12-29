/*function f0(n){
    let ans =1;
    for(let i=0; i<n; i++){
        console.log(i);
        ans += i;
    }
    return ans;
}
f0(10);         */                             // Big O of  ->  O(n)


/*function f1(n, m){
    let ans =0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    for(let j=0; j<m; j++){
        ans +=2;
    }
    console.log(ans);
 
}
f1(10);                                        // Big oh of  -> O(m+n)  where m<<n    -> O(n)
*/


/*function f2(n){
    let ans =1;
    for(let i=0; i<Math.log(n); i++){
        console.log(i);
    }
}
f2(32);
*/                                             // Big oh of O(logn)

/*function f3(n){
    let ans =0;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            ans += 1;
        }
    }
    // return ans;
    console.log(ans);
}
f3(8);                                         // Big oh of O(n^2)
*/   

/*function f4(n){
    let ans =0;
    for(let i=0; i<n; i++){
        for(let j=0; j<i; j++){
            ans += 1;
        }
    }
    console.log(ans);
}
f4(10);
*/                                              // Big oh of O(n^2)



/*function f5(n){
    let ans =0;
    for(let i=0; i<n; i++){
        for(let j=0; j<Math.log(n); j++){
            ans += 1;
        }
    }
    // return ans;
    console.log(ans);
}
f5(8);                                          // Big oh of O(nlogn)
*/


/*function f6(n){
    let ans =0;
    for(let i=0; i<n; i++){
            ans += 1;
    }
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            ans += (i+j);
        }
    }
    console.log(ans);
}
f6(8);                                         // Big oh of O(n^2)
*/


/*function f7(n){
    let ans =0;
    for(let i=1; i<n; i++){
        for(let j=n; j>1; j--){
            ans += i;
        }
    }
    console.log(ans);
}
f7(8);                                         // Big oh of O(n^2)
*/                       


/*function f8(n){
    let ans =0;
    for(let i=1; i<n; i*=2){
            ans += i;
    }
    console.log(ans);
}
f8(8);                                          // Big oh of O(logn)
*/


/*function f9(n) {
    let ans = 0;
    while (n > 0) {
        ans += n;
        n /= 2;
    }
    console.log(ans);
}
f9(10);                                         // Big oh of O(logn)
*/



/*function f10(n) {
    for (let i = n; i > 0; i /= 2) {
        for (let j = 0; j < i; j++) {
            console.log(i, j);
        }
    }
}
f10(1);                                         //Big oh of O(n)
*/

/*function f11(n) {
    for (let j = 1; j <= n; j++) {
        for (let i = 0; i < n; i =i+j) {
            console.log(i, j);
        }
    }
}
f11(10);                                       // Big oh of O(nlogn)
*/

/*function f12(n){
    let ans =0;
    for(let i=2; i<=n; i*=i){
            ans ++;
        }
        console.log(ans);
}  
f12(10);                                        // Big oh of O(log logn)
*/    