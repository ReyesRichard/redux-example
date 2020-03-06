import React, { Fragment } from 'react'
import { withRouter} from 'react-router-dom'

import {fakeAuth} from 'Router/privateRouter'
import Seo from '../Components/SEO'

function Blog({history}) {

    return (
        <Fragment>
            <Seo
                title='Blog | Redux example'
            />
            <main>
                <section>
                    <div className="container">
                        <h1>Blog</h1>
                        { 
                            fakeAuth.isAuthenticated ? (
                            <p>
                            Welcome!{" "}
                            <button
                                onClick={() => {
                                fakeAuth.signout(() => history.push("/"));
                                }}
                            >
                                Sign out
                            </button>
                            </p>
                        ) : (
                            <p>You are not logged in.</p>
                        )}
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default withRouter(Blog)
