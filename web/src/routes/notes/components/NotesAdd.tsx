import React, { FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { ButtonMain } from '../../../components/Button';
import { NoteInput } from '../../../types/types';
import { sanitizeHTML, encode, decode } from '../../../utils';

const Wrapper = styled.div`
    margin-bottom: 2rem;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button[type='submit'] {
        margin-top: 1rem;
    }
`;

const Title = styled.div`
    color: ${({ theme }) => theme.colors.mainDark};
    font-size: ${({ theme }) => theme.fontsSize.lg};
    font-weight: 600;
    line-height: 2rem;
    align-self: flex-start;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 8rem;
    resize: none;
    color: ${({ theme }) => theme.colors.mainDark};
    border-color: ${({ theme }) => theme.colors.main};
    line-height: 1.25rem;
    padding: 0.5rem;
    outline: 0px;
`;

type Add = { isLoading: boolean; onAdd: (text: string) => Promise<void> };

const NotesAdd: FC<Add> = ({ isLoading, onAdd }) => {
    const minLength = 6;
    const [form, setForm] = useState<NoteInput>({ text: '' });

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.text.length < minLength) {
            return;
        }
        const clearText = encode(sanitizeHTML(form.text));
        await onAdd(clearText);
        setForm({ text: '' });
    };

    const onChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
    };

    return (
        <Wrapper>
            <Title>Note</Title>
            <Form onSubmit={onSubmit}>
                <TextArea name="text" minLength={minLength} value={form.text} onChange={onChange} />
                <ButtonMain disabled={form.text.length < minLength || isLoading} type="submit">
                    Add note
                </ButtonMain>
            </Form>
        </Wrapper>
    );
};

export default NotesAdd;
