function defangIPaddr(address: string): string {
// let a = address.split('.').join('[.]');
 
// return a;
// const a = address.replaceAll('.', '[.]')
const a = address.replace(/\./g, "[.]")
return a;
};
console.log(defangIPaddr("1.1.1.1"))