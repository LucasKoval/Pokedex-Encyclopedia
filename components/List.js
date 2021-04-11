import { useState, useEffect } from 'react'
import './Forms/FormGifs.css'

function ListGifs() {
    const [gifs, setGifs] = useState([])

    const [ buscador, setBuscador] = useState('random')

    const search = (e) =>{  
        e.preventDefault()
        if(e.target.buscar.value.length === 0){
            e.target.buscar.value = 'random'
        }
        setBuscador(e.target.buscar.value)
        }  
        useEffect(()=>{    
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=6vm7gRFd3067VcyKCYxMIPMaHI7cA7Ct&q=${buscador}&limit=20&offset=0&rating=g&lang=en`)
                .then(res=> res.json())
                    .then( data => setGifs(data.data))
        },[buscador])
    console.log(buscador)
    return(
        <div>
            <form className="form-search" onSubmit={search}>  
                <div>
                    <label>Buscar: </label>
                    <input type="text" name="buscar"/> 
                    <button className="btn-search" type="submit"><i className="fas fa-search"></i></button>   
                </div>   
            </form>
            <h2>Resultados</h2>  
            <div className="gifs-container">
                {gifs.map( (gif,index) => <img key={index} src={gif.images.downsized.url} alt="imagen" width="200" height="200px"/>)}
            </div>
        </div>
    )
    
}

export default ListGifs