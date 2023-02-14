import banner from '../../assets/banner.png'
import './Banner.css'
function Banner(){
    return(
        <header className='banner'>
            <img src={banner} alt="O banner principal da pagina Organo"/>
        </header>
    )
}

export default Banner