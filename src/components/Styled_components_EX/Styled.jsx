import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;
const ReversedButton = (props) => <Button {...props} children={props.children.split('').reverse()} />;
// ReversedButton 의 역할은 props.children 역순으로

export default function StyledComponents() {
    return (
        <>
            <Wrapper>
                <Title>Hello World!</Title>
            </Wrapper>
            <div>
                <Button>Normal</Button>
                <Button primary>Primary</Button>
            </div>
            <div>
                <Button>Normal Button</Button>
                <TomatoButton>Tomato Button</TomatoButton>
                <Button as="a" href="#">
                    Link with Button styles
                </Button>
            </div>
            <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
        </>
    );
}
