const use = document.querySelector('#svg')
const btn = document.querySelector('.wallet-and-instruments-btn')

console.log(use , btn)

btn.addEventListener(mouseover, function (a) {
    use.href = './images/symbol-defs.svg#icon-apple'
})
