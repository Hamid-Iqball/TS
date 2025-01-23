import React from "react"

const  Section:React.FC<{title:String}> =({children,title}) => {
 return <section>
    <h2>{title}</h2>
    <h2>{children}</h2>
 </section>
}

export default Section