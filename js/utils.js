// $======================== UTILS ========================$ //

//$ function returns true, if Escape-key was pressed
const isEscapeKey = (event) => event.key === 'Escape'

//$ function converts px-value to vw-value (without unit)
const convertPxToVw = (value) => value / window.innerWidth * 100;

/*&// &======================== EXPORT ========================& //&*/

export {isEscapeKey, convertPxToVw}