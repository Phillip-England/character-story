import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { header_0 } from '../styled/header/header_0'
import { paragraph_0 } from '../styled/paragraph/paragraph_0'
import { paragraph_1 } from '../styled/paragraph/paragraph_1'
import { list_0 } from '../styled/list/list_0'
import { item_0 } from '../styled/item/item_0'
import { main_0 } from '../styled/main/main_0'
import { button_0 } from '../styled/button/button_0'
import { icon_1 } from '../styled/icon/icon_1'

const Main = styled.main`
    ${main_0}
    grid-template-areas:
        "header"
        "subheader"
        "list"
        "button"
    ;
`

const Header = styled.h1`
    ${ header_0 }
    grid-area:header;
`

const SubText = styled.p`
    ${ paragraph_0 }
    grid-area:subheader;
`

const List = styled.ul`
    ${ list_0 }
    grid-area:list;
`

const Item = styled.li`
    ${item_0}
    display:grid;
    grid-template-areas:
        'name icon'
    ;
`

const Name = styled.p`
    ${ paragraph_1 }
    grid-area:name;
`

const Button = styled.button`
    ${button_0}
    grid-area:button;
`

const PlayIcon = styled.i`
    ${icon_1}
    grid-area:icon;
    align-self:center;
    justify-self:end;
    padding-right:5px;
`

//====================

const characters = [
    {key:0, name:'Paul'},
    {key:1, name:'George'},
    {key:2, name:'Stanley'}
]


//====================

export default function Home() {
    return (
        <Main>
            <Header>Character Story</Header>
            <SubText>Who will you become?</SubText>
            <List>
                {characters.map((character) => 
                    <Link to={`/play/home/${character.key}`}>
                        <Item key={character.key}>
                            <Name>{character.name}</Name>
                            <PlayIcon className={'fa-solid fa-play'}></PlayIcon>
                        </Item>                    
                    </Link>
                )}
            </List>
            <Button>
                <Link to={'/character/create'}>Create</Link>
                </Button>        
        </Main>

    )
}