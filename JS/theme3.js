const third = document.querySelector('#thirdth')

for(let i=0 ; i<boxEl.length ; i++){
  third.addEventListener('click', ()=>{
    boxEl[i].classList.remove('box-act1')
    boxEl[i].classList.add('box-act2')
  }
  )
}

third.addEventListener('click', ()=>{
  bodyEl.classList.remove('active1')
  bodyEl.classList.add('active2')
  toggleEl.classList.remove('act1')
  toggleEl.classList.add('act0')
  innerEl.classList.remove('inpos1')
  innerEl.classList.add('inpos2')
  screenEl.classList.remove('act1')
  screenEl.classList.add('act2')
  numbersEl.classList.remove('act1')
  numbersEl.classList.add('act0')
  delEl.classList.remove('del-act1')
  delEl.classList.add('del-act2')
  resetEl.classList.remove('reset-act1')
  resetEl.classList.add('reset-act2')
  equalEl.classList.remove('eq-act1')
  equalEl.classList.add('eq-act2')
})