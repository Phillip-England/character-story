import { useEffect, useState } from 'react'

import Header from '../../components/Header/Header'
import AddIcon from '../../components/AddIcon/AddIcon'
import CloseIcon from '../../components/CloseIcon/CloseIcon'
import Intro from '../../components/Intro/Intro'

export default function Home() {

    let [mainIcon, setMainIcon] = useState(false)


    return(
        <>
            <Header/>
            {mainIcon 
                ? <AddIcon setMainIcon={setMainIcon}/>
                : <CloseIcon setMainIcon={setMainIcon}/>
            }
            <Intro/>
        </>
    )
}