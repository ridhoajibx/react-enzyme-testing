import { useState } from "react";
import "./assets/scss/styles.scss";

import Header from "./components/Headers";
import Headline from "./components/Headline";
import { connect } from "react-redux";
import { getPosts } from './actions';
import { Button } from "./components/Buttons";
import ListItem from "./components/ListItems";

function App(props) {
    const [isHide, setIsHide] = useState(false);
    const { getPosts, posts } = props;

    
    const getAllPosts = (e) => {
        e.preventDefault();
        getPosts();
        handleHideBtn()
    }
    const handleHideBtn = () => setIsHide((state) => !state);

    const btnProps = {
        type: "button",
        className: "btn-primary",
        buttontext: "Get Posts",
        onSubmit: getAllPosts
    }

    return (
        <div className="App" data-test="appComponent">
            <Header />
            <section className="main">
                <Headline title="Posts" desc="Click button to render!" />
                {!isHide &&
                    <Button {...btnProps} />
                }

                {posts.length > 0 &&
                    <div>
                        {posts.map((post, idx) => {
                            const { title, body } = post;
                            const listProps = {
                                title,
                                desc: body
                            }

                            return <ListItem key={idx} {...listProps} />
                        })}
                    </div>
                }
            </section>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
