import React from 'react'
import Wrap from "../hoc/Wrap"
const Layout = (props) => (
    <Wrap>
        <div>Three Component</div>
        <main>
            {props.children}
        </main>
   </Wrap>
)

export default Layout