type JSONVal = null | boolean | number | string | JSONVal[] | { [key: string]: JSONVal };
type Obj = Record<string, JSONVal> | JSONVal[]

function isEmpty(obj: Obj): boolean {
   const a = JSON.stringify(obj)
 
   return a.length ===2 ? true : false
};
console.log(isEmpty( {}));
