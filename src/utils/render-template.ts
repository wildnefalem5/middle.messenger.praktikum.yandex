import Block from "./block";

export const renderTemplate = (query: string, block: Block<any>) => {
  const root = document.querySelector(query);

  if (root) {
    root.appendChild(block.getContent());
    console.log(root, block.getContent())
    block.dispatchComponentDidMount();

    return root;
  }
};