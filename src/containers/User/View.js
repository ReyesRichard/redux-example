import React, {Fragment} from 'react'

import Seo from 'Components/SEO'
import ViewComponent from 'Components/User/View'

function View() {
    return (
        <Fragment>
            <Seo
                title='Usuario | Redux example'
            />
            <main>
                <section>
                    <div className="container">
                        <h1>Ver usuario</h1>
                        <ViewComponent />
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default View
