function Smiley({ isHappy }) {
  return (
    <h1>
      {isHappy ? '😊 Happy' : '😞 Sad'}
    </h1>
  );
}

// Alternative für den sad smiley mit !
// function Smiley({ isHappy }) {
//   return (
//     <h1>
//       {!isHappy ? '😊 Happy' : '😞 Sad'}
//     </h1>
//   );
// }

export default function App() {
  return <Smiley isHappy={true} />;
}
