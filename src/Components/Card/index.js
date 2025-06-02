function Card(props){

      return (
        <div>
            <img src={props.fotoPerfil}/>
            <h1>{props.nome}</h1>
            <p>{props.biografria}</p>
        </div>
      )
}

export default Card;