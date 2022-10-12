import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => (
  <div className="gap-3 py-4 px-3 rounded bg-gray-800  focus-within:ring-2 ring-cyan-300">
    {children}
  </div>
);

export interface TextInputIconProps {
  children: any;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs w-full placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
