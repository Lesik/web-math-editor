import { HasParent } from "./common";
import { NodeType } from "../INode";

enum LeafType {
    CHAR = 'char',
}

export interface LeafNode1 extends HasParent {
    type: NodeType.LEAF,
    leafType: LeafType,
}
