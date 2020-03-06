import React, {Fragment} from 'react'
import SEO from '../components/SEO'

function Home() {
    return (
        <Fragment>
            <SEO 
                title='Redux example'
                description='Site with a example of redux and your use'
            />
            <main>
                <section>
                    <div className="container">
                        <h1>Home</h1>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default Home
