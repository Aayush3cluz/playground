import React from "react";

function InputField(props) {
  const {
    name,
    id,
    label,
    placeholder,
    size,
    type,
    info,
    disabled,
    min,
    max,
    minLenght,
    maxLenght,
  } = props;

  return (
    <div className="tw-input-field">
      <input
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
        type="email"
        placeholder="jane@example.com"
      />
    </div>
  );
}

export default InputField;
