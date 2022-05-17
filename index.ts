import katex from 'katex';

const tree = {
    type: 'root',
    children: [],
};

let position = tree;

const katexEl = document.getElementById('katex');

const findSibling = (node) => {
    if (!('parent' in node)) {
        throw new Error('what?');
    }
    const myIndex = node.parent.children.indexOf(node);
    if (myIndex === node.parent.children.length - 1) {
        return findSibling(node.parent);
    }
}

document.getElementById('input').addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'ArrowRight':
    }
    if (key.length > 1) {
        // not a b c but Shift ArrowLeft etc.
        return;
    }
    let node;
    switch (key) {
        case '^':
            node = {
                type: 'inner',
                math: '^',
                children: [],
                parent: position,
            }
            if (position.type === 'leaf') {
                position.parent.children.push(node);
            }
            else {
                position.children.push(node);
            }
            position = node;
            break;
        default:
            node = {
                type: 'leaf',
                char: key,
            };
            if (position.type === 'leaf') {
                node.parent = position.parent;
                position.parent.children.push(node);
            } else {
                node.parent = position;
                position.children.push(node);
            }
            position = node;
            break;
    }

    console.log(tree);
    const latex = turnToLatex(tree);
    console.log(latex);
    katex.render(latex, katexEl);
});

const turnToLatex = (node) => {
    let text;
    switch (node.type) {
        case 'root':
            text = node.children.map(turnToLatex).join('');
            break;
        case 'leaf':
            text = node.char;
            break;
        case 'inner':
            text = `^{${node.children.map(turnToLatex).join('')}}`;
            break;
    }
    if (position === node && false) {
        return `${text}𝙸`;
    }
    return text;
}
