const second = document.getElementById('secondth')
for(let i=0 ; i<boxEl.length ; i++){
  second.addEventListener('click', ()=>{
    boxEl[i].classList.add('box-act1')
    boxEl[i].classList.remove('box-act2')
  }
  )
}

second.addEventListener('click', ()=>{
  bodyEl.classList.add('active1')
  bodyEl.classList.remove('active2')
  toggleEl.classList.add('act1')
  toggleEl.classList.remove('act0')
  innerEl.classList.add('inpos1')
  innerEl.classList.remove('inpos2')
  screenEl.classList.add('act1')
  screenEl.classList.remove('act2')
  numbersEl.classList.add('act1')
  numbersEl.classList.remove('act0')
  delEl.classList.add('del-act1')
  delEl.classList.remove('del-act2')
  resetEl.classList.add('reset-act1')
  resetEl.classList.remove('reset-act2')
  equalEl.classList.add('eq-act1')
  equalEl.classList.remove('eq-act2')
})