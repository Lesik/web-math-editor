import { HasChildren } from "./nodes/common";
import { LeafNode1 } from "./nodes/leaf";
import { InnerNode } from "./nodes/InnerNode";

export enum NodeType {
    ROOT = 'root',
    INNER = 'inner',
    LEAF = 'leaf',
}

export interface IRootNode extends HasChildren {
    type: NodeType.ROOT,
}

export type TNode = IRootNode | InnerNode | LeafNode1;

export class MyNode {}
