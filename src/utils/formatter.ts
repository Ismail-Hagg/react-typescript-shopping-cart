const FORMATTER = new Intl.NumberFormat(undefined,{
    currency:'USD',
    style:'currency'
})

export function formatCurrencey(number: number){
    return FORMATTER.format(number)
}