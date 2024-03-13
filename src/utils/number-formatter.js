
function numberFormatter(number) {
    const numberFormatter = new Intl.NumberFormat("en" , {
        notation : 'compact', 
        maximumSignificantDigits : "2"
    }) 

    return numberFormatter.format(number) 
}

export { numberFormatter } ;