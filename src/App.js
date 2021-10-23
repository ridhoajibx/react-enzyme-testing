import "./assets/scss/styles.scss";
import Header from "./components/Headers";
import Headline from "./components/Headline";

function App() {
    return (
        <div className="App">
            <Header />
            <section className="main">
                <Headline title="Posts" desc="Click the button to render posts" />
            </section>
        </div>
    );
}

export default App;
