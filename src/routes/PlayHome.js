import styled from 'styled-components'

import { header_0 } from '../styled/header/header_0'
import { paragraph_0 } from '../styled/paragraph/paragraph_0'
import { paragraph_2 } from '../styled/paragraph/paragraph_2'
import { main_0 } from '../styled/main/main_0'
import { wrapper_grid } from '../styled/wrapper/wrapper_grid'
import { item_1 } from '../styled/item/item_1'
import { paragraph_1 } from '../styled/paragraph/paragraph_1'

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
        </Main>
    )
}