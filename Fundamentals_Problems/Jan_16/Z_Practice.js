/*function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function partition(arr,pivotIndex){
    let pivotElement=arr[pivotIndex];
    let L=0;
    let R=arr.length-1;
    let j=L;
    let i=L-1;
    swap(arr,pivotIndex,R);
    while(j<=R-1){
        if(arr[j]<=pivotElement){
            i++;
            swap(arr,i,j);
        }
        j++;
    }
    swap(arr,i+1,R);
}

let arr=[1, 6, 3, 8, 9, 2, 5];
pivotIndex=3;
partition(arr,pivotIndex);
console.log(arr);
*/



function swap(arr,i,j){
    let temp= arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function partition(arr,pivotIndex,L,R){
    let pivotElement=arr[pivotIndex];
    let i=L-1;
    let j=L;
    swap(arr,pivotIndex,R);
    while(j<=R-1){
        if(arr[j]<=pivotElement){
            i++;
            swap(arr,i,j);
        }
        j++;
    }
    swap(arr,i+1,R);
    return i+1;
}
function pickRandomPivot(l,r){
    return Math.floor(Math.random()*(r-l)+l);
}
function f(arr,l,r){
    if(l>=r) return;
    let pivotIndex=pickRandomPivot(l,r);
    let m=partition(arr,pivotIndex,l,r);
    f(arr,l,m-1);
    f(arr,m+1,r);
}
function quickSort(arr){
    return f(arr,0,arr.length-1);
}
let arr=[5,4,3,2,1,8,9,0,-2,3,5];
quickSort(arr);
console.log(arr);