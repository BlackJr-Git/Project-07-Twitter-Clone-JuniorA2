
function numberFormatter(number) {
    const numberFormatter = new Intl.NumberFormat("en" , {
        notation : 'compact', 
        maximumSignificantDigits : "4"
    }) 

    return numberFormatter.format(number) 
}

export { numberFormatter }