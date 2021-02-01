// // var numberrandom = Math.round(Math.random() * 10000)
// // console.log(numberrandom)
// // var convart = (numberrandom + " ").split(',')[0]
// // console.log(convart)

// // const generatebtn = document.getElementById('generate-btn')
// // console.log(generatebtn)
// // generatebtn.addEventListener('click', function() {

// //     var numberrandom = Math.round(Math.random() * 10000)
// //     var convart= numberrandom.split('')[0]
// //     console.log(convart)
// //     document.getElementById('form-control').value = numberrandom

// // })

// function getPin() {
//     const random = Math.random() * 10000
//     const pin = (random + " ").split('.')[0]
//     console.log(pin)
//     if (pin.length == 4) {
//         return pin
//     } else {
//         console.log("sdfsa" + pin)
//         return getPin()
//     }
// }
// getPin()

// const generatebtn = document.getElementById('generate-btn')
// generatebtn.addEventListener('click', function() {
//     document.getElementById('form-control').value = getPin()
// })

// const butcontainer = document.getElementById('digitcontainer')
// butcontainer.addEventListener('click', function() {
//     digitInput()

// })

// function digitInput() {
//     const digit = (event.target.innerText)

//     if (isNaN(digit)) {
//         if (digit === 'C') {
//             const typeInput = document.getElementById('typePin')
//             typeInput.value = ''
//         }
//     } else {
//         const typeInput = document.getElementById('typePin')
//         typeInput.value = typeInput.value + digit

//     }
// }
// const maching = document.getElementById("maching")
// maching.addEventListener('click', function(e) {
//     e.preventDefault()
//     const pin = document.getElementById('generate-btn').value
//     const typeInput = document.getElementById('typePin').value
//     console.log(pin)
//     if (pin == "") {
//         carite("none", "block")
//     } else if (pin === typeInput) {
//         carite("block", "none")
//     } else {
//         // const write = document.getElementById('notify2')
//         // write.style.display = "block"
//         // const write = document.getElementById('notify1')
//         // write.style.display = "none"
//         carite("none", "block")

//     }

// })

// function carite(correat, incorrect) {
//     const write = document.getElementById('notify2')
//     write.style.display = correat
//     const inwrite = document.getElementById('notify1')
//     inwrite.style.display = incorrect
// }

const generatebtn = document.getElementById("generate-btn");
generatebtn.addEventListener("click", function() {
    document.getElementById("form-control").value = pinGenerator()

})

function pinGenerator() {
    const pin = Math.random('.') * 10000
    const pinConvert = (pin + " ").split('.')[0]
    if (pinConvert.length == 4) {
        return pinConvert
    } else {
        console.log(randomConvert)
        return pinGenerator()
    }
}

const digitcontainer = document.getElementById('digitcontainer');
digitcontainer.addEventListener('click', function(e) {
    const value = (e.target.innerText)

    if (isNaN(value)) {
        if (value === 'C') {
            const pintype = document.getElementById('typePin');
            pintype.value = ""
        }


    } else {

        const pintype = document.getElementById('typePin');
        pintype.value = pintype.value + value
    }

})

const maching = document.getElementById("maching")
maching.addEventListener('click', function() {
    const pinmaching = document.getElementById("form-control").value
    const digitMaching = document.getElementById('typePin').value;
    // if (pinmaching == '' || digitMaching == '') {
    //     const notify1 = document.getElementById('notify1');
    //     notify1.style.display = "block"
    // }
    if (digitMaching === "") {
        // const notify1 = document.getElementById('notify1');
        // notify1.style.display = "block"
        addmachingNumber("block", "none")

    } else if (pinmaching === digitMaching) {
        addmachingNumber("none", "block")

    } else {
        addmachingNumber("block", "none")
    }

})

function addmachingNumber(show, close) {
    const notify1 = document.getElementById('notify1');
    notify1.style.display = show
    const notify2 = document.getElementById('notify2');
    notify2.style.display = close
}