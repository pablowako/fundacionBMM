import './Pending.scss'

const Pending = (props)=>{

    console.log("props", props)
    if (props.size == "small"){
        return(
            <span className='smalltext'>pendiente de inscripción en el Registro de Fundaciones</span>
        )
    }
    return (
        <span className='text'>pendiente de inscripción en el Registro de Fundaciones</span>
    )
}

export default Pending