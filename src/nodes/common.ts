import { LeafNode1 } from "./leaf";
import { IRootNode } from "../INode";
import { InnerNode } from "./InnerNode";

export interface HasChildren {
    children: (InnerNode | LeafNode1)[];
}

export interface HasParent {
    parent: IRootNode | InnerNode;
}
