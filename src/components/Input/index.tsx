import React, {SyntheticEvent} from 'react'

interface InputProps {
    label: string;
    value: string;
    type: string;
    onChange: (e: SyntheticEvent<EventTarget>) => void

}
const Input = (props: InputProps) => {
    const { label, value, type, onChange } = props;
    return (
      <div style={{ display: "flex", flexDirection: 'column', marginBottom: 20}}>
        <label
          style={{  width: "100%", marginBottom: 5 }}
        >
          {label}
        </label>
        <input
          style={{ padding: '10px', borderRadius: 5 }}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    );
}

export default Input