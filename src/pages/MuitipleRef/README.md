
```js
const inputRef = useRef([]);
inputRef.current[idx].focus();
<input
  ref={el => inputRef.current[idx] = el}
/>
```

```js
const {useRef} = React;
const App = () => {
  const list = [...Array(8).keys()];
  const inputRef = useRef([]);
  const handler = idx => e => {
    const next = inputRef.current[idx + 1];
    if (next) {
      next.focus()
    }
  };
  return (
    <div className="App">
      <div className="input_boxes">
        {list.map(x => (
        <div>
          <input
            key={x}
            ref={el => inputRef.current[x] = el} 
            onChange={handler(x)}
            type="number"
            className="otp_box"
          />
        </div>
        ))}
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
```