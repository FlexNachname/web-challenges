import "./styles.css";


function HelloWorldArticle() {
  return (
    <article>
      <h1>Überschrift</h1>
      <p>lorem ipsum</p>
      <p>lorem ipsum 2</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}