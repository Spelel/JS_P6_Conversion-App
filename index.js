/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let inpNumber = []
const oneM = 3.281
const oneF = 0.3048 
const oneL = 0.264
const oneG = 4.5609
const oneK = 2.204
const oneP = 0.453592



let inputEl = document.getElementById("input-el")
let mF = document.getElementById("M-F")
let lG = document.getElementById("L-G")
let kP = document.getElementById("K-P")

const convBtn = document.getElementById("button-el")

function math() {
    mfConv = inpNumber * oneM
    fmConv = inpNumber * oneF
    lgConv = inpNumber * oneL
    glConv = inpNumber * oneG
    kpConv = inpNumber * oneK
    pkConv = inpNumber * oneP
} 



convBtn.addEventListener("click", function () {
    inpNumber.push(inputEl.value)
    math()
    inputEl.value = ""

    mF.textContent = `
    ${inpNumber} meters = ${(mfConv).toFixed(3)} feet | ${inpNumber} feet = ${(fmConv).toFixed(3)} metes
    `
    lG.textContent = `
    ${inpNumber} liters = ${(lgConv).toFixed(3)} gallons | ${inpNumber} gallons = ${(glConv).toFixed(3)} liters
    `
    kP.textContent = `
    ${inpNumber} kilos = ${(kpConv).toFixed(3)} pounds | ${inpNumber} pounds = ${(pkConv).toFixed(3)} kilos
    `
    inpNumber.length = 0
    
    // console.log(inpNumber)
})















