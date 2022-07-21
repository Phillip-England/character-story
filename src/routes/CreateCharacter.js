import styled from "styled-components"

import { main_0 } from "../styled/main/main_0"
import { header_0 } from "../styled/header/header_0"
import { header_1 } from "../styled/header/header_1"
import { paragraph_0 } from "../styled/paragraph/paragraph_0"
import { paragraph_1 } from "../styled/paragraph/paragraph_1"
import { form_0 } from "../styled/form/form_0"
import { label_0 } from "../styled/label/label_0"
import { input_0 } from "../styled/input/input_0"
import { item_0 } from '../styled/item/item_0'
import { list_0 } from '../styled/list/list_0'
import { button_0 } from '../styled/button/button_0'
import { wrapper_grid } from '../styled/wrapper/wrapper_grid'
import { icon_0 } from "../styled/icon/icon_0"
import { useState } from "react"

const Main = styled.main`
    ${main_0}
    grid-template-columns:3fr 1fr;
    grid-template-areas:
        'header expleft'
        'subheader expleft'
        'form form'
        'submit submit'
    ;
`

const Header = styled.h1`
    ${header_0}
    grid-area:header;
    align-self:center;
`

const SubText = styled.p`
    ${paragraph_0}
    grid-area:subheader;
`

const ExpLeft = styled.h1`
    ${header_1}
    justify-self:center;
    align-self:center;
    grid-area:expleft;
`

const Form = styled.form`
    ${form_0}
    grid-area:form;
`

const NameLabel = styled.label`
    ${label_0}
`

const NameInput = styled.input`
    ${input_0}
`

const QuestionList = styled.ul`
    ${list_0}
`

const QuestionItem = styled.li`
    ${item_0}
    display:grid;
    grid-template-columns:70% 30%;
    grid-template-areas:
        "name icons"
        "exp icons"
    ;
`

const SkillName = styled.p`
    ${paragraph_1}
    grid-area:name;
`

const SubmitButton = styled.button`
    ${button_0}
    grid-area:submit;
`

const SkillExp = styled.p`
    ${paragraph_0}
    grid-area:exp;
`

const IconGrid = styled.div`
    ${wrapper_grid}
    grid-area:icons;
    grid-template-areas:
        'minus plus'
    ;
`

const PlusIcon = styled.i`
    ${icon_0}
    grid-area:plus;
`

const MinusIcon = styled.i`
    ${icon_0}
    grid-area:minus;
`

//=======================

const skillData = [
    { key:0, name:'Strength', exp:0},
    { key:1, name:'Speed', exp:0},
    { key:2, name:'Luck', exp:0},
]

const user = {
    exp:15,
}

//=======================

export default function CreateCharacter() {

    const [startingExp, setStartingExp] = useState(user.exp)
    const [skills, setSkills] = useState(skillData)

    function incrementSkillExp(key) {
        let copyOfSkills = Object.assign([], skills)
        for (let x = 0; x < copyOfSkills.length; x++){
            if (key === copyOfSkills[x].key && startingExp > 0){
                user.exp = user.exp - 1
                setStartingExp(user.exp)
                copyOfSkills[x].exp = copyOfSkills[x].exp + 1
                setSkills(copyOfSkills)
            }
        }
    }

    function decrementSkillExp(key) {
        let copyOfSkills = Object.assign([], skills)
        for (let x = 0; x < copyOfSkills.length; x++){
            if (key === copyOfSkills[x].key && startingExp < 15 && copyOfSkills[x].exp > 0){
                user.exp = user.exp + 1
                setStartingExp(user.exp)
                copyOfSkills[x].exp = copyOfSkills[x].exp - 1
                setSkills(copyOfSkills)
            }
        }
    }

    return (
        <Main>
            <Header>Create Character</Header>
            <SubText>Your story begins here.</SubText>
            <ExpLeft>{startingExp}</ExpLeft>
            <Form>
                <NameLabel>Name</NameLabel>
                <NameInput></NameInput>
                <QuestionList>
                    {skills.map((skill) =>
                        <QuestionItem key={skill.key}>
                            <SkillName>{skill.name}</SkillName>
                            <SkillExp>{skill.exp}</SkillExp>
                            <IconGrid>
                                <PlusIcon className={"fa-solid fa-plus"} onClick={() => {incrementSkillExp(skill.key)}}></PlusIcon>
                                <MinusIcon className={"fa-solid fa-minus"} onClick={() => {decrementSkillExp(skill.key)}}></MinusIcon>
                            </IconGrid>
                        </QuestionItem>
                    )}
                </QuestionList>
            </Form>
            <SubmitButton>Submit</SubmitButton>
        </Main>
    )
}