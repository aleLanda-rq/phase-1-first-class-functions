//1 
function receivesAFunction(callback) {
    callback()
 }


//2
function returnsANamedFunction(){
return function bob(){
    console.log('hi')
};
} 
// 3
function returnsAnAnonymousFunction(){
    return function(){
       console.log('hi')
    }
 };
   

