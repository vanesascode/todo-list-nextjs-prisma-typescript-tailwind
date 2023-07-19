"use client";
// this "use client" string is saying: 'this is a client-side rendered component so don't render any of this on the server, all this interaction stuff is going to happen on the client.'

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

//TypeScript interface called  TodoItemProps  which represents the properties of a todo item. It has three properties:  id  (a string),  title  (a string), and  complete  (a boolean).

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor="{id}"
        className="peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}

//The function is a React functional component called  TodoItem  which takes in the  TodoItemProps  as its destructured arguments.

//The  defaultChecked  attribute is used in HTML input elements of type "checkbox" or "radio". It is a boolean attribute that specifies whether the checkbox or radio button should be checked by default when the page loads. In the given code, the  defaultChecked  attribute is used in the  <input>  element of type "checkbox". By setting  defaultChecked={complete} , the value of the  complete  property is used to determine whether the checkbox should be checked or not when the TodoItem component is rendered. If  complete  is true, the checkbox will be checked by default, and if  complete  is false, the checkbox will be unchecked by default.
