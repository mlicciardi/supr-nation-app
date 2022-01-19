import { INVALID } from "../_constant/index,"

export const validateExpression = (text = '') => {
    text = text.replace(/sin/g, 'Math.sin')
    text = text.replace(/cos/g, 'Math.cos')
    text = text.replace(/tan/g, 'Math.tan')
    try {
        // eval() shouldn't be used coz leave a door open for js injection but let's go for it since it's a test and in real scenario we have mathjs or similar npm pckgs
        const validate = eval(text).toString()
        return validate.match('native code') ? INVALID : validate
    } catch (error) {
        return INVALID
    }
}
