import React, { FC } from 'react';
import styled from 'styled-components';
import { NoteType } from '../../../types/types';
import { Link } from 'react-router-dom';
import { ButtonDanger } from '../../../components/Button';

const Wrapper = styled.div`
    margin: 1.5rem 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.main};
    align-items: center;

    @media (max-width: 480px) {
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
    }
`;

const Content = styled.div`
    color: ${({ theme }) => theme.colors.mainDark};
    width: 100%;
`;
const Text = styled.div`
    height: 3.75rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
    line-height: 1.25rem;
`;
const Date = styled(Link)`
    margin-top: 1rem;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mainDark};
`;

type remove = { onRemove: (id: string) => () => void };

const NotesItem: FC<NoteType & remove> = ({ text, date, id, onRemove }) => {
    const url = `/notes/${id}`;
    const onClick = onRemove(id);
    return (
        <Wrapper>
            <Content>
                <Text dangerouslySetInnerHTML={{ __html: text }} />
                <Date to={url}>{date}</Date>
            </Content>

            <ButtonDanger onClick={onClick}>Delate note</ButtonDanger>
        </Wrapper>
    );
};

export default NotesItem;
