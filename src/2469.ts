function convertTemperature(celsius: number): number[] {
    
    const kelvin = celsius+273.15;
    const farhenheit = celsius*1.8 + 32.00
    return [kelvin, farhenheit]
};
console.log(convertTemperature(36.5));
