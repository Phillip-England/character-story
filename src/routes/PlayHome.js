import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { header_0 } from '../styled/header/header_0'
import { paragraph_0 } from '../styled/paragraph/paragraph_0'
import { paragraph_2 } from '../styled/paragraph/paragraph_2'
import { main_0 } from '../styled/main/main_0'
import { wrapper_grid } from '../styled/wrapper/wrapper_grid'
import { item_1 } from '../styled/item/item_1'
import { paragraph_1 } from '../styled/paragraph/paragraph_1'
import { header_2 } from '../styled/header/header_2'
import { list_0 } from '../styled/list/list_0'
import { item_0 } from '../styled/item/item_0'
import { Action } from 'history'
import { button_0 } from '../styled/button/button_0'

const Main = styled.main`
    ${main_0}
`

const CharacterName = styled.h1`
    ${header_0}
`

const SubText = styled.p`
    ${paragraph_0}
    display:grid;
`

const SkillGrid = styled.ul`
    ${wrapper_grid}
    grid-template-columns:1fr 1fr 1fr;
    grid-template-areas:
        "strength speed luck"
    ;
`

const Strength = styled.li`
    ${item_1}
    grid-area:strength;
`

const Speed = styled.li`
    ${item_1}
    grid-area:speed;
`

const Luck = styled.li`
    ${item_1}
    grid-area:luck;
`

const SkillName = styled.p`
    ${paragraph_2}
`

const SkillLevel = styled.p`
    ${paragraph_1}
`

const ChooseAdventure = styled.h2`
    ${header_2}
`

const AdventureList = styled.ul`
    ${list_0}
`

const AdventureItem = styled.li`
    ${item_0}
`

const AdventureName = styled.p`
    ${paragraph_1}
`
const ActionWrapper = styled.div`
    ${wrapper_grid}
    grid-template-columns:1fr 1fr;
    grid-template-areas:
        'inventory shop'
    ;
`

const Inventory = styled.button`
    ${button_0}
    grid-area:inventory;
    margin:0px 5px;
`

const Shop = styled.button`
    ${button_0}
    grid-area:shop;
    margin:0px 5px;
` 

//========

export default function PlayHome(){
    return(
        <Main>
            <CharacterName>John The Great</CharacterName>
            <SubText>Adventures & Danger</SubText>
            <SkillGrid>
                <Strength>
                    <SkillName>Strength</SkillName>
                    <SkillLevel>5</SkillLevel>
                </Strength>
                <Speed>
                    <SkillName>Speed</SkillName>
                    <SkillLevel>7</SkillLevel>
                </Speed>
                <Luck>
                    <SkillName>Luck</SkillName>
                    <SkillLevel>14</SkillLevel>
                </Luck>
            </SkillGrid>
            <ChooseAdventure>Choose your adventure</ChooseAdventure>
            <AdventureList>
                <AdventureItem>
                    <AdventureName>Fight</AdventureName>
                </AdventureItem>
                <AdventureItem>
                    <AdventureName>Explore</AdventureName>
                </AdventureItem>
                <AdventureItem>
                    <AdventureName>Gamble</AdventureName>
                </AdventureItem>
            </AdventureList>
            <ActionWrapper>
                <Inventory>
                    <Link to={'/play/inventory/:characterID'}> 
                        Inventory
                    </Link>
                </Inventory>
                <Shop>
                    <Link to={'/play/shop/:characterID'}> 
                        Shop
                    </Link>
                </Shop>
            </ActionWrapper>
        </Main>
    )
}