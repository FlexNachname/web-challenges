
function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ color: color, backgroundColor: 'red', padding: '10px', borderRadius: '5px' }}
      disabled={disabled}
      onClick={onClick} 
    >
      {text}
    </button>
  );
}



export default function App() {
//   const handleClick = () => {
//     console.log('Yeay! You clicked me!');
// }; 
  return (
    <div>
      { }
      <Button
        color="blue"
        disabled={false}
        text="click me"
        onClick={() => alert('Yeay! You clicked me!')} 
      />
    </div>
  );
}