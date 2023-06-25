let lam = document.getElementById('lam')
let botao = document.getElementById('botao')
let on_off = document.getElementById('on_off')
let mudar = true

 function acender(){ 
   if(mudar){
      lam.src = `lampada_acesa.png`
      botao.src = `botao2_on.png`
      on_off.innerText = 'On'
      document.body.style.color = 'green'
      document.body.style.background = 'yellow'
      mudar = false
   } else {
      lam.src = `lampada_apagada.png`
      botao.src = `botao2_off.png`
      on_off.innerText = 'Off'
      document.body.style.color = 'red'
      document.body.style.background = ''
      mudar = true
   }
       
 }




 
 