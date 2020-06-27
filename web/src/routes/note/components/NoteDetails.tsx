import React, { FC } from 'react';
import styled from 'styled-components';

import { NoteType } from '../../../types/types';
import { ButtonDanger, BackLinkButton } from '../../../components/Button';

const Wrapper = styled.div`
    margin-top: 1rem;
`;

const Content = styled.div`
    margin: 1.5rem 0;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.mainDark};
    align-items: center;
`;
const Text = styled.div`
    height: 3.75rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
    line-height: 1.25rem;
`;
const Date = styled.div`
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.mainDark};
    margin-left: auto;
    text-align: right;
`;

const WrapperButton = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`;

type remove = { onRemove: (id: string) => void };

const NoteDetails: FC<NoteType & remove> = ({ date, text, id, onRemove }) => {
    return (
        <Wrapper>
            <WrapperButton>
                <BackLinkButton to="/">Go back</BackLinkButton>
                <ButtonDanger onClick={() => onRemove(id)}>Delate note</ButtonDanger>
            </WrapperButton>
            <Content>
                <Text dangerouslySetInnerHTML={{ __html: text }} />
                <Date>{date}</Date>
            </Content>
        </Wrapper>
    );
};

export default NoteDetails;
