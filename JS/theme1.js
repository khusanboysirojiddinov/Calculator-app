const first = document.getElementById('firstth')


const bodyEl = document.querySelector('.calc-body')
const toggleEl = document.querySelector('.out')
const innerEl = document.querySelector('.in')
const screenEl = document.querySelector('.screen')
const numbersEl = document.querySelector('.numbers')
const boxEl = document.querySelectorAll('.box')
const delEl = document.querySelector('.del')
const resetEl = document.querySelector('.reset')
const equalEl = document.querySelector('.equal')

for(let i=0 ; i<boxEl.length ; i++){
  first.addEventListener('click', ()=>{
    boxEl[i].classList.remove('box-act1')
    boxEl[i].classList.remove('box-act2')
  }
  )
}

first.addEventListener('click', ()=>{
  bodyEl.classList.remove('active1')
  bodyEl.classList.remove('active2')
  toggleEl.classList.remove('act0')
  toggleEl.classList.remove('act1')
  innerEl.classList.remove('inpos1')
  innerEl.classList.remove('inpos2')
  screenEl.classList.remove('act1')
  screenEl.classList.remove('act2')
  numbersEl.classList.remove('act1')
  numbersEl.classList.remove('act0')
  delEl.classList.remove('del-act1')
  delEl.classList.remove('del-act2')
  resetEl.classList.remove('reset-act1')
  resetEl.classList.remove('reset-act2')
  equalEl.classList.remove('eq-act1')
  equalEl.classList.remove('eq-act2')
})

toggleEl.addEventListener('click', ()=>{
  alert('Please click on a number to change the theme.')
})

    delEl.addEventListener('click', ()=>{
      delEl.classList.add('clicked')
      setTimeout(()=>{
        delEl.classList.remove('clicked')
      },100)
    })
    resetEl.addEventListener('click', ()=>{
      resetEl.classList.add('clicked')
      setTimeout(()=>{
        resetEl.classList.remove('clicked')
      },100)
    })
    equalEl.addEventListener('click', ()=>{
      equalEl.classList.add('clicked')
      setTimeout(()=>{
        equalEl.classList.remove('clicked')
      },100)
    })

for(let i=0 ; i<boxEl.length ; i++){
  boxEl[i].addEventListener('click', ()=>{
    boxEl[i].classList.add('clicked')
    setTimeout(()=>{
      boxEl[i].classList.remove('clicked')
    },100)
  })
}