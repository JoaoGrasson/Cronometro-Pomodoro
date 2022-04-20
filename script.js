let trabalho = document.getElementById('trabalho')
let pausa = document.getElementById('pausa')
let sessoes = document.getElementById('sessoes')
trabalho.value = 25;
pausa.value = 5;
sessoes.value = 3;
let segundos

var bell = new Audio("./audio/bell.mp3")
var volta = new Audio("./audio/volta.mp3")
var final = new Audio("./audio/final.mp3")
let pausee = true;


function iniciar() {
    if (trabalho.value <= 0) {
        document.getElementById('erro_trabalho').innerHTML = "Adicione os minutos"
        trabalho.focus()
    } else if (pausa.value <= 0) {
        document.getElementById('erro_pausa').innerHTML = "Adicione a pausa"
        pausa.focus()
    } else if (sessoes.value <= 0) {
        document.getElementById('erro_sessoes').innerHTML = "Adicione as sessoes"
        sessoes.focus()
    } else {

        localStorage.setItem('trabalho', String(trabalho.value))
        localStorage.setItem('pausa', String(pausa.value))
        localStorage.setItem('sessoes', String(sessoes.value))
        document.getElementById("config").style.setProperty('display', 'none', 'important')
        document.getElementById("timer").style.setProperty('display', 'block', 'important')

        momentoTrabalho()

    }
}


function momentoTrabalho() {

    let sessoes_valor = localStorage.getItem('sessoes')

    if (localStorage.getItem('sessoes') != '1')
        document.getElementById('title_sessao').innerHTML = sessoes_valor + ' sessões restasntes'
    else {
        document.getElementById('title_sessao').innerHTML = sessoes_valor + ' sessão restasnte'
    }


    let title = document.getElementById('title')
    title.innerHTML = "TRABALHO"
    title.style.fontSize = '25pt'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#219653', 'important')

    min = Number(localStorage.getItem('trabalho'))

    min = min - 1
    segundos = 59

    document.getElementById('minutes_ok').innerHTML = min
    document.getElementById('seconds_ok').innerHTML = segundos

    var min_interval = setInterval(minTimer, 60000)
    var seg_interval = setInterval(segTimer, 1000)

    



    function minTimer() {
        if (pausee == false) {
            console.log("Continua sem fazer nada ")
        } else {
            min = min - 1
            document.getElementById('minutes_ok').innerHTML = min
        }
    }

    function segTimer() {

        if (pausee == false) {
            console.log("Continua sem fazer nada ")
        } else {
            segundos = segundos - 1
            document.getElementById('seconds_ok').innerHTML = segundos
            if (segundos <= 0) {
                if (min <= 0) {
                    clearInterval(min_interval)
                    clearInterval(seg_interval)
                    bell.play();
                    momentoPausa()
                }
                segundos = 60
            }
        }

    }

}


function playtime() {
    pausee = false;
}

function pausetime() {
    pausee = true;
}



function momentoPausa() {

  let title = document.getElementById('title')
  title.innerHTML = "PAUSA"
  title.style.fontSize = '25pt'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#F2C94C', 'important')

   min_pausa = Number(localStorage.getItem('pausa'))

   min_pausa = min_pausa - 1
 segundos = 59

  document.getElementById('minutes_ok').innerHTML = min_pausa
  document.getElementById('seconds_ok').innerHTML = segundos

  var min_interval = setInterval(minTimer, 60000)
  var seg_interval = setInterval(segTimer, 1000)

  function minTimer() {
      min_pausa = min_pausa - 1
      document.getElementById('minutes_ok').innerHTML = min_pausa
  }

   function segTimer() {
       segundos = segundos - 1
       document.getElementById('seconds_ok').innerHTML = segundos

       if (segundos <= 0) {
           if (min_pausa <= 0) {
                ses = Number(localStorage.getItem('sessoes'))
              ses = ses - 1
               localStorage.setItem('sessoes', String(ses))

              clearInterval(min_interval)
              clearInterval(seg_interval)
               if (ses <= 0) {
                   final.play()
                localStorage.clear()
                document.getElementById('config').style.setProperty('display', 'none', 'important')
                document.getElementById('timer').style.setProperty('display', 'none', 'important')
                document.getElementById('fim').style.setProperty('display', 'block', 'important')
             } else {
                 volta.play();
                  momentoTrabalho()
              }
              volta.play();
              momentoPausa()

          }

           segundos = 60
      }


     }

}

function trocarvalorcaixa1() {
    var value = document.getElementById('trabalho').value;
    var newvalue = parseInt(value) + 1;
    console.log(newvalue);
    document.getElementById('trabalho').value = newvalue;
}

function trocarvalorcaixa1down() {
    var value = document.getElementById('trabalho').value;
    var newvalue = parseInt(value) - 1;
    document.getElementById('trabalho').value = newvalue;
    console.log(document.getElementById('trabalho').value);
}

function trocarvalorcaixa2() {
    var value = document.getElementById('pausa').value;
    var newvalue = parseInt(value) + 1;
    console.log(newvalue);
    document.getElementById('pausa').value = newvalue;
}

function trocarvalorcaixa2down() {
    var value = document.getElementById('pausa').value;
    var newvalue = parseInt(value) - 1;
    document.getElementById('pausa').value = newvalue;
    console.log(document.getElementById('pausa').value);
}

function trocarvalorcaixa3() {
    var value = document.getElementById('sessoes').value;
    var newvalue = parseInt(value) + 1;
    console.log(newvalue);
    document.getElementById('sessoes').value = newvalue;
}

function trocarvalorcaixa3down() {
    var value = document.getElementById('sessoes').value;
    var newvalue = parseInt(value) - 1;
    document.getElementById('sessoes').value = newvalue;
    console.log(document.getElementById('sessoes').value);
}
