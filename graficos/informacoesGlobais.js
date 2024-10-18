const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais () {
    const res = await fetch (url)
    const dados = await res.json ()
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML = `Você sabia que tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${total_pessoas_conectadas}</span> estão querendo mudanças no upa e passam em média <span> ${dados.tempo_medio} </span>pedindo mudança.`
    console.log(paragrafo)

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()


