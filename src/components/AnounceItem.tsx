import React from 'react'
import styled from 'styled-components';
import { anounceItem } from '../data';

interface Item{
    id: number;
    text: string;
}
const MarqueeText = styled.span`
  color: #ffff;
`;
const Container = styled.div`
    width: 100%;
`

export const AnounceItem: React.FC<any> = () => {
  return (
    <Container>
        {
            anounceItem.map((item: Item ) =>(
                <MarqueeText key={item.id}>{item.text}</MarqueeText>
            ))
        }
    </Container>
  )
}
