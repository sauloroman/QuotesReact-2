export const randomNumber = ( array ) => {
    const number = Math.floor( Math.random() * array.length );
    return number;
}