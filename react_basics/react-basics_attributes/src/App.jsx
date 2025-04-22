import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Spannender Artikel</h2>

      <label htmlFor="email">Deine E-Mail:</label>
      <input id="email" type="email" placeholder="you@example.com" />

      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/React"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mehr über React auf Wikipedia
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
