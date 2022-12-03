const inputRangeRef = document.querySelector('input#font-size-control')
const inputTextRef  = document.querySelector('span#text')

inputRangeRef.addEventListener('change', e => {
    inputTextRef.style.fontSize = `${e.currentTarget.value }px`
})