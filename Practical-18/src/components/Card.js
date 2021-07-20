import React from 'react'
import styled from 'styled-components'
function Card({title,calorie}) {
    const bgColor= calorie>100 ? "red":"green"
    return (
        <Container style={{backgroundColor:bgColor}}>
              <h4>{title}</h4>
              <p>you have consumed {calorie} cals today</p>
        </Container>
    )
}

const Container=styled.div`
   width:100%;
   height:auto;
   background-color:grey;
   color:#fff;
   padding-top:1rem;
   padding-bottom:1rem;
   margin-bottom:1rem;
   border-radius:1rem;
   h4{
       font-size:1.5rem;
       margin-left:1rem;
   }

   p{
       font-weight:600;
       font-size:1.2rem;
       margin-top:1rem;
       margin-left:1rem;
   }
`

export default Card
