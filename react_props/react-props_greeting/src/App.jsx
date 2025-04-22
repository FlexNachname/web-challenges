function Greeting({ name }) {
  // Check ob der Name "Coach" ist 
  if (name === 'Coach') {
    return <h1>Hello, Coach!</h1>;
  }
  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return <Greeting name="Sven" />;
}
