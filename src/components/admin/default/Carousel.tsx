import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './Carousel.css'
import Card from "components/card";
import Autoplay from 'embla-carousel-autoplay'
import { IoIosAlarm } from 'react-icons/io';
import Widget from 'components/widget/Widget';


function Carousel() {

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]   )

    const handle = () => {
        console.log('hello')
    }

    return (
        <Card extra="flex flex-col  w-full rounded-3xl py-6 px-2 text-center" color='transparent'>

        <div>

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide"><img style={{borderRadius: '30px'}} src="https://i.ibb.co/h7YhWhk/Screenshot-2024-01-01-140434.png" alt="Screenshot-2024-01-01-140434" /></div>
                    <div className="embla__slide"><img  style={{borderRadius: '30px'}} src="https://i.ibb.co/bQbqMWd/Screenshot-2024-01-01-140329.png" alt="Screenshot-2024-01-01-140329" /></div>
                </div>
            </div>

        </div>
        <div style={{marginTop: '20px'}} onClick={handle}>
        <Widget
          icon={<IoIosAlarm className="h-6 w-6" />}
          subtitle={'Más información'}
          title={''}
          />
        
        </div>
       
        </Card>
    )
}

export default Carousel;