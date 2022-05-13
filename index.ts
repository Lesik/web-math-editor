import { INode, IRootNode, NodeType } from "./src/INode";
import { InnerUnaryNode } from "./src/nodes/InnerNode";

const tree: IRootNode = {
    type: NodeType.ROOT,
    children: [],
};

let position: INode = tree;

document.getElementById('input').addEventListener('keydown', ({ key }) => {
    switch (key) {
        case '^':
            const node: InnerUnaryNode = {
                type: NodeType.INNER,
                unaryOpType: Inn
            }
            if (position.type === NodeType.ROOT) {
            }
            break;
        default:
            const node: LeafNode = {
                type: MyType.LEAF,
                char: key,
            };
            if (position.type === MyType.INNER) {
                position.children.push(node);
            } else if (position.type === MyType.LEAF) {
                position.
            }
            position = node;
            break;
    }

    console.log(tree);
});
