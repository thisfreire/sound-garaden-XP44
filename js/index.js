const URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

async function listarEventos (){
    const response = await fetch(URL)
        let data = await response.json()
        data = data.slice(0,3)
        

    const tabela = document.querySelector('.eventos')
    data.forEach((evento) =>{
        tabela.innerHTML += 
       `
       <article class="evento card p-5 m-3">
        <h2> ${evento.name} - </h2>
        <h2> ${evento.scheduled} </h2>
        <h4> ${evento.attractions} </h4>
        <p> ${evento.description} </p>
        <a class="btn btn-primary" data-toggle="modal" data-target="#add">reservar ingresso</a>
        </article>
        
        `
    } ) 
    
}
listarEventos();