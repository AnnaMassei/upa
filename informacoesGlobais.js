const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais () {
    const res = await fetch (url)
    const dados = await res.json ()
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
paragrafo.innerHTML = `Você sabia que tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${total_pessoas_conectadas} estão querendo mudanças no upa e passam em média ${dados.tempo_medio} pedindo mudança.`
    console.log(paragrafo)

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()


