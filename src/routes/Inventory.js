import styled from 'styled-components'

import { main_0 } from '../styled/main/main_0'
import { header_0 } from '../styled/header/header_0'
import { paragraph_0 } from '../styled/paragraph/paragraph_0'
import { paragraph_1 } from '../styled/paragraph/paragraph_1'
import { paragraph_2 } from '../styled/paragraph/paragraph_2'
import { paragraph_3 } from '../styled/paragraph/paragraph_3'
import { list_0 } from '../styled/list/list_0'
import { item_0 } from '../styled/item/item_0'

const Main = styled.main`
    ${main_0}
    grid-template-areas:
        'header capacity'
        'subtext capacity'
        'list list'
    ;
`

const Header = styled.h1`
    ${header_0}
    grid-area:header;
`

const SubText = styled.p`
    ${paragraph_0}
    grid-area:subtext;
`

const Capacity = styled.p`
    ${paragraph_2}
    grid-area:capacity;
    align-self:center;
    justify-self:end;
    padding-right:10px;
`

const InventoryList = styled.ul`
    ${list_0}
    grid-area:list;
`

const InventoryItem = styled.li`
    ${item_0}
    display:grid;
    grid-template-columns:1fr 3fr;
    grid-template-areas:
        'name info'
    ;
`

const ItemName = styled.p`
    ${paragraph_0}
    grid-area:name;
    align-self:center;
`

const ItemDescription = styled.p`
    ${paragraph_3}
    grid-area:info;
    align-self:center;
    justify-self:end;
`

//====================

const inventoryItems = [
    {name:'Axe', weight:30},
    {name:'Potion', weight:4},
    {name:'Ham', weight:6},
]

//====================


export default function Inventory(){
    return(
        <Main>
            <Header>Inventory</Header>
            <SubText>Items & Rewards</SubText>
            <Capacity>100/100</Capacity>
            <InventoryList>
                {inventoryItems.map((item) => 
                    <InventoryItem>
                        <ItemName>{item.name}</ItemName>
                        <ItemDescription>this is an item and a good one at that!</ItemDescription>
                    </InventoryItem>
                )}
            </InventoryList>
        </Main>
    )
}