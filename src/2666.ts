type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let hasBeenCalled = false;
	return function (...args) {
   if(!hasBeenCalled){
    hasBeenCalled = true;
    return fn(...args);
   }
   else{
       return undefined;
   }
    };
}


  let fn = (a: any,b: any,c: any) => (a + b + c)
 let onceFn = once(fn)
 
  console.log( onceFn(1,2,3));
; // 6
//   onceFn(2,3,6); // returns undefined without calling fn
 
function exampleFunction(...args:any) {
    console.log(args);
  }
  
  const numbers = [1, 2, 3, 4];
  
  exampleFunction(...numbers5);