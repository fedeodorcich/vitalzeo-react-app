import {FiInstagram,FiMail,FiPhoneCall,FiMapPin} from 'react-icons/fi'
import LoadingComponent from '../loading/loading.component'

const FooterComponent = ()=>{
    const links=[
        {
          icon:'facebook',
          name:'facebook',
          link:'https://facebook.com/vitalzeo'
        },
        {
          icon:'instagram',
          name:'instagram',
          link:'https://instagram.com/vitalzeo?utm_medium=copy_link'
        },
        {
          icon:'map-pin',
          name:'maps',
          link:'https://goo.gl/maps/mQwRZwy16ufv2KoB7'
        },
    ]
    return(
        <>
            <div className="bg-zeo-two rounded-3xl p-8 my-10">
                    
                    <div className="text-white nunito-standard flex center">
                        <ul>
                            <li className='flex items-center'><FiPhoneCall className='mr-2'/> +549 264 4049834</li>
                            <li className='flex items-center'><FiMail className='mr-2'/> comercial@vitalzeo.com.ar</li>
                            <li><a href="https://instagram.com/vitalzeo?utm_medium=copy_link" className='flex items-center'><FiInstagram className='mr-2'/> vitalZEO</a></li>
                            <li><a href="https://goo.gl/maps/mQwRZwy16ufv2KoB7"  className='flex items-center'><FiMapPin className='mr-2'/> San Juan - Argentina</a></li>
                        </ul>
                    </div>              
            </div>
        </>
    )
}

export default FooterComponent