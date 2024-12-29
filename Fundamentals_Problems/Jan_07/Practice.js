/*function BubbleSort(arr){
    let n=arr.length;
    for(let i=0; i<n-1; i++){
        let isSwapped=false;
        for(let j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                isSwapped=true;
            }
        }
        if(isSwapped==false) break;
    }
}
let arr=[5,3,7,12,4,-4,7,-2,0,7,45,-1];
BubbleSort(arr);
console.log(arr);
*/



/*function f(arr, k) {
    if (k == 0) return;
    for (let i = 0; i < k; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    f(arr, k - 1);
}
let arr = [5, 3, 7, 12, 4, -4, 7, -2, 0, 7, 45, -1];
f(arr, arr.length - 1);
console.log(arr);
*/




/*function f(arr, k, i) {
    if (k == 0) return;
    if (i == k) {
        f(arr, k - 1, 0);
        return;
    }
    if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    f(arr, k, i + 1);
}
let arr = [5, 3, 7, 12, 4, -4, 7, -2, 0, 7, 45, -1];
f(arr, arr.length - 1, 0);
console.log(arr);
*/

/*k=2;
let n=arr.length;
console.log(arr[n-k]);
*/