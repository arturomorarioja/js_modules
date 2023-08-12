'use strict';

const manageError = (error) => {
    console.error(error.name + ' - ' + error.message);
}

/**
 * Turns the yyyyMMdd date it receives into dd/MM/yyyy format
 * @param {*} date 
 * @returns the formatted date
 */
export const formatDate = (date) => {
    try {
        return date.substring(6, 8) + '/' + date.substring(4, 6) + '/' + date.substring(0, 4);
    } catch(error) {
        manageError(error);
        return '';
    }
}

/**
 * Formats a monetary amount to two decimals
 * @param {*} monetary amount to format
 * @returns the formatted monetary amount
 */
export const formatMoney = (amount) => {
    try {
        const DKK = new Intl.NumberFormat(
            'da-DK', 
            { 
                style: 'currency', 
                currency: 'DKK' 
            }
        );
        return DKK.format(amount);
    } catch(error) {
        manageError(error);
        return 0;
    }
}