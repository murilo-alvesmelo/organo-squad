import './Rodape.css'
import facebook from '../../assets/fb.png'
import insta from '../../assets/ig.png'
import tt from '../../assets/tw.png'
import logo from '../../assets/logo.png'


export default function Rodape(){
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/murilo_a.m/'>
                          <img src={facebook} alt=''/>  
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/murilo_a.m/'>
                          <img src={insta} alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/murilo_a.m/'>
                          <img src={tt} alt=''/>  
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src={logo} alt=''/>
            </section>
        </footer>
    )
}