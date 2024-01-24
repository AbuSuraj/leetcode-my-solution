function destCity(paths: string[][]): string {
    const city = new Map();
    const len = paths.length
    for(let i = 0; i < len;i++){
        const [cityA , cityB ] = paths[i];
        city.set(cityA , cityB);
    }
console.log('city ',city);

    for(let i = 0; i < len;i++){
        if (!city.has(paths[i][1])){
            return paths[i][1];
        }
    }
    return ''
    //   solution 2
    // const sCity = new Map<string,number>();
    // const dCity = new Map<string,number>();
    // const len = paths.length
    //  for(let i=0; i<len; i++){
    //     if(sCity.has(paths[i][0])){
    //         sCity.set(paths[i][0],(sCity.get(paths[i][0])??0)+1)
    //     } else{sCity.set(paths[i][0],1)}
    //     if(dCity.has(paths[i][1])){
    //         dCity.set(paths[i][1],(dCity.get(paths[i][1])??0)+1)
    //     } else{dCity.set(paths[i][1],1)}
    // }
    // console.log(sCity,dCity);
    // for(let [i, v] of dCity){
    //     if(!sCity.has(i)){
    //         // console.log(i);
    //         return i
    //     }
    // }
    
    // return '';
};
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));
