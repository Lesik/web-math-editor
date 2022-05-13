import { HasChildren, HasParent } from "./common";
import { NodeType } from "../INode";

enum UnaryOpType {
    EXP = 'exp',
}

enum BinaryOpType {}

export enum InnerNodeType {
    UNARY = 'unary',
    BINARY = 'binary',
}

interface BaseInnerNode extends HasChildren, HasParent {
    type: NodeType.INNER,
    innerType: InnerNodeType,
}

export interface InnerUnaryNode extends BaseInnerNode {
    innerType: InnerNodeType.UNARY
    unaryOpType: UnaryOpType.EXP,
}

export interface InnerBinaryNode extends BaseInnerNode {
    innerType: InnerNodeType.BINARY,
    binaryOpType: BinaryOpType,
}

export type InnerNode = InnerUnaryNode | InnerBinaryNode;
