document.querySelector('#heart').play()
document.querySelectorAll('.calc')[1].play
document.querySelectorAll('.calc')[0].play
document.querySelectorAll('.formicon')[0].play
document.querySelectorAll('.formicon')[1].play
document.querySelectorAll('.info-icon')[0].play
document.querySelectorAll('.info-icon')[1].play


let value
let values
let flag
let metric = document.querySelector('#metric')
let imperial = document.querySelector('#imperial')
let metricbtn = document.querySelector('#metricbtn')
let imperialbtn = document.querySelector('#imperialbtn')
let result = document.querySelectorAll('.results')
let form = document.querySelector('form')
const gobtns = document.querySelectorAll('button')
const info = document.querySelectorAll('h2')
let strip1 = document.querySelector('#hide1')
let strip2 = document.querySelector('#hide2')
// const inputs = document.querySelectorAll('input')
metric.style.display = 'block'
imperial.style.display = 'none'
strip1.style.display = 'none'
strip2.style.display = 'none'
result[0].innerText = ``
result[1].innerText = ``


window.addEventListener('load' , () =>{
    document.querySelector('#heart').play()
    document.querySelectorAll('.calc')[1].play
    document.querySelectorAll('.calc')[0].play
    document.querySelectorAll('.formicon')[0].play
    document.querySelectorAll('.formicon')[1].play
    document.querySelectorAll('.info-icon')[0].play
    document.querySelectorAll('.info-icon')[1].play
})

imperialbtn.addEventListener('click' , (e) =>{
    e.preventDefault()
    if (metric.style.display === 'block') {
            metric.style.display = 'none'
            imperial.style.display = 'block'
            result[1].innerText = ``
            result[0].innerText = ``
            strip1.style.display = 'none'
            strip2.style.display = 'none'
        }
    info.forEach(inf =>{
        inf.style.backgroundColor = '#ffffff'
    })
    result[1].innerText = ``
    result[0].innerText = ``
    strip1.style.display = 'none'
    strip2.style.display = 'none'
    form.reset()
    document.querySelector('#heart').play()
    document.querySelectorAll('.calc')[1].play()
    document.querySelectorAll('.calc')[0].play()
    document.querySelectorAll('.formicon')[0].play()
    document.querySelectorAll('.formicon')[1].play()
    document.querySelectorAll('.info-icon')[0].play()
    document.querySelectorAll('.info-icon')[1].play()
    result[1].innerText = ``
    result[0].innerText = ``
})


metricbtn.addEventListener('click' , (e) =>{
    e.preventDefault()
    if (imperial.style.display === 'block') {
            metric.style.display = 'block'
            imperial.style.display = 'none'
            result[1].innerText = ``
            result[0].innerText = ``
            strip1.style.display = 'none'
            strip2.style.display = 'none'
        }
    info.forEach(inf =>{
        inf.style.backgroundColor = '#ffffff'
    })
    result[1].innerText = ``
    result[0].innerText = ``
    strip1.style.display = 'none'
    strip2.style.display = 'none'
    form.reset()
    document.querySelector('#heart').play()
    document.querySelectorAll('.calc')[1].play()
    document.querySelectorAll('.calc')[0].play()
    document.querySelectorAll('.formicon')[0].play()
    document.querySelectorAll('.formicon')[1].play()
    document.querySelectorAll('.info-icon')[0].play()
    document.querySelectorAll('.info-icon')[1].play()
})
// kg/m^2  ([Ibs*703)/inhc^2]
const calc = () =>{
    if (gobtns[2] === "metric" || flag === 2) {
        let weight = document.querySelector('#kg').value
        let hieght = document.querySelector('#cm').value
        value = Number(weight)/((Number(hieght)/100) ** 2)
    } else if(gobtns[3] === "imperial" || flag === 1){
        let weight = document.querySelector('#pounds').value
        let hieght1 = document.querySelector('#feet').value
        let hieght2 = document.querySelector('#inches').value
        let hieght = (Number(hieght1)*12)+Number(hieght2)
        value = (Number(weight) * 703)/(hieght ** 2)
    }
    values = value.toFixed(2)
    return values
}

const going = () =>{
    result[0].innerText = `Your BMI is ${values}`
    result[1].innerText = `Your BMI is ${values}`
    strip1.style.display = 'block'
    strip2.style.display = 'block'
    if (value > 30) {
        info[0].style.backgroundColor = '#e2e2e2'
            
    } else if(value > 25){
        info[1].style.backgroundColor = '#e2e2e2'
            
    } else if(value > 18.6){
        info[2].style.backgroundColor = '#e2e2e2'
            
    } else{
        info[3].style.backgroundColor = '#e2e2e2'
            
    }
}


let main = document.querySelector('main')
// gobtns.forEach(gobtn =>{
//     gobtn.addEventListener('click' , (e) =>{
//         e.preventDefault()

//         going()
//     })
// })
// value = 36

document.onkeydown = function (e) {
    e = e || window.event;
    switch (e.which || e.keyCode) {
        case 13 : //Your Code Here (13 is ascii code for 'ENTER')
        // main.style.backgroundColor = 'red'
        if (imperial.style.display === 'block') {
            flag = 1
        }else if (metric.style.display === 'block') {
            flag = 2
        }
        calc()
        going()
             break 
    }
  }

gobtns.forEach(gobtn => {
    gobtn.addEventListener('click' , () =>{
        if (gobtn.id === 'go1') {
            flag = 2
            calc()
            going()
        }else if (gobtn.id === 'go2'){
            flag = 1
            calc()
            going()            
        }
        
    })
})

  // window.addEventListener('keyup', function(event) {
//     if (event.keyCode === 13) {
//       alert('enter was pressed!');
//     }
//   });

