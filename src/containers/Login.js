import React, {Fragment} from 'react'
import {withRouter} from 'react-router'
import {fakeAuth} from 'Router/privateRouter'
import Seo from 'Components/SEO'

function Login(props) {
    let history = props.history;
    let location = props.location;

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
        history.replace(from);
        });
    };

    return (
        <Fragment>
            <Seo
                title='Login | Redux example'
                description='Site with a example of redux and your use'
            />
            <main>
                <section>
                    <div className="container">
                        <h1>Login</h1>
                        <button  onClick={login}> login </button>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default withRouter(Login)
