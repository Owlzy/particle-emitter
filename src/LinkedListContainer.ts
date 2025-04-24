import { AlphaMaskData, Container, IRenderLayer,Rectangle, Renderer } from 'pixi.js';

/** Interface for a child of a LinkedListContainer (has the prev/next properties added) */
export interface LinkedListChild extends Container
{
    nextChild: LinkedListChild | null;
    prevChild: LinkedListChild | null;
}

/**
 * A semi-experimental Container that uses a doubly linked list to manage children instead of an
 * array. This means that adding/removing children often is not the same performance hit that
 * it would to be continually pushing/splicing.
 * However, this is primarily intended to be used for heavy particle usage, and may not handle
 * edge cases well if used as a complete Container replacement.
 */
export class LinkedListContainer extends Container
{
    private _firstChild: LinkedListChild | null = null;
    private _lastChild: LinkedListChild | null = null;
    private _childCount = 0;

    public get firstChild(): LinkedListChild
    {
        return this._firstChild;
    }

    public get lastChild(): LinkedListChild
    {
        return this._lastChild;
    }

    public get childCount(): number
    {
        return this._childCount;
    }
}