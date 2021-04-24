import { ShowcaseContainer } from "./ShowcaseStyles";
function Showcase({ images = [] }) {
  return (
    <ShowcaseContainer>
      <header className="header">
        <h1 className="header-title">SEARCH LESS, WATCH MORE</h1>
        <h2 className="header-sub-title">Skapa ett gratiskonto</h2>
      </header>
      <main></main>
    </ShowcaseContainer>
  );
}

export default Showcase;
