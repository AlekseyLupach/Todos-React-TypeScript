import React, { useRef } from "react";

interface ToDoFormProps {
  onAdd(title: string): void;
}

export const ToDoFrom: React.FC<ToDoFormProps> = (props) => {
  //The first way to work with Input
  //   const [title, setTitle] = useState<string>("");

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };

  //   const keyPressHandler = (event: React.KeyboardEvent) => {
  //     if (event.key === "Enter") {
  //       console.log(title);
  //       setTitle("");
  //     }
  //   };

  //The second way to work with Input
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        // onChange={changeHandler}
        // value={title}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};
