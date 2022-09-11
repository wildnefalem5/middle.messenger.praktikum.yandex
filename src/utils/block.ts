import { v4 as makeUUID } from "uuid";
import EventBus from "./event-bus";
import { store, Store } from "./store";

export type TMeta = {
  tag: string;
  props: any;
};

type TPropsTemplate = {
  [key: string]: string;
};

abstract class Block<TProps> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  _element: HTMLElement;

  protected _props: TProps;

  protected _store: Store;

  protected _children: TProps;

  protected _meta: TMeta;

  protected _eventBus: EventBus;

  private _setUpdate = false;

  private readonly _id: string | null;

  constructor(tag = "div", propsAndChildren: TProps) {
    const { children, props } = this.getChildren(propsAndChildren);

    this._eventBus = new EventBus();
    this._id = makeUUID();

    this._children = this._makePropsProxy(children);
    this._props = this._makePropsProxy({ ...props, __id: this._id });
    this._store = store;

    this._meta = { tag, props };
    this._registerEvents();

    this._eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents() {
    this._eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this._eventBus.on(
      Block.EVENTS.FLOW_CDM,
      this._componentDidMount.bind(this)
    );
    this._eventBus.on(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this)
    );
    this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  compile(template: (props: TPropsTemplate) => string, props: {}) {
    if (typeof props === "undefined") {
      props = this._props;
    }

    const propsAndStubs: TPropsTemplate = { ...props };

    Object.entries(this._children).forEach(
      ([key, child]: [string, { _id: string }]): void => {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
      }
    );

    const fragment: any = Block._createDocumentElement("template");

    fragment.innerHTML = template(propsAndStubs);

    Object.values(this._children).forEach((child: any): void => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

      if (stub) {
        stub.replaceWith(child.getContent());
      }
    });

    return fragment.content;
  }

  static _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  init(): void {
    this._element = Block._createDocumentElement(this._meta.tag);
    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private _render(): void {
    const block = this.render();

    this._removeEvents();

    this._element.innerHTML = "";
    this._element.appendChild(block);

    this._addEvents();

    this.addAttribute();
  }

  abstract render(): DocumentFragment;

  private _componentDidUpdate(oldProps: TProps, newProps: TProps): void {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars
  componentDidUpdate(_oldProps: TProps, _newProps: TProps): boolean {
    return true;
  }

  setProps = (nextProps: Partial<TProps>): void => {
    if (!nextProps) {
      return;
    }

    const oldValue = { ...this._props };
    const { children, props } = this.getChildren(nextProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }

    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }

    if (this._setUpdate) {
      this._eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, this._props);
      this._setUpdate = false;
    }
  };

  private _makePropsProxy(props: any) {
    return new Proxy(props, {
      get: (target, prop) => {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (target: any, prop, value) => {
        if (target[prop] !== value) {
          target[prop] = value;
          this._setUpdate = true;
        }
        return true;
      },
      deleteProperty: () => {
        throw new Error("Нет доступа");
      },
    });
  }

  getContent(): HTMLElement {
    return this._element;
  }

  private _addEvents(): void {
    const { events = {} }: any = this._props;

    Object.keys(events as Record<string, () => void>).forEach((eventName) => {
      this._element.addEventListener(
        eventName,
        events[eventName] as () => void
      );
    });
  }

  private _removeEvents(): void {
    const { events = {} }: any = this._props;

    Object.keys(events as Record<string, () => void>).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  addAttribute(): void {
    const { attr = {} }: any = this._props;

    Object.entries(attr as Record<string, string>).forEach(([key, value]) => {
      this._element.setAttribute(key, value);
    });
  }

  getChildren(propsAndChildren: TProps) {
    const children: { [key: string]: Block<TProps> } = {};
    const props: any = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  private _componentDidMount(): void {
    this.componentDidMount();

    Object.values(this._children).forEach((child: any) => {
      child.dispatchComponentDidMount();
    });
  }

  dispatchComponentDidMount(): void {
    this._eventBus.emit(Block.EVENTS.FLOW_CDM);

    if (Object.keys(this._children).length) {
      this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidMount(): void {}

  show(): void {
    this.getContent().style.display = "block";
  }

  hide(): void {
    this.getContent().style.display = "none";
  }
}

export default Block;
