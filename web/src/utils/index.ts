import { XmlEntities } from 'html-entities';
import sanitizeHtml from 'sanitize-html';

export const sanitizeHTML = (text: string) => {
    return sanitizeHtml(text)
}

export const decode = (text: string) => {

    const entities = new XmlEntities();
    return entities.decode(text);
}

export const encode = (text: string) => {

    const entities = new XmlEntities();
    return entities.encode(text);
}
