import React from 'react'

const Startrating = ({rating}) => {
    console.log(rating)
    const stars=(rating)=>
    {
        var tab=[]
        for(let i=1;i<=5;i++){
            if(i<=rating){
                tab.push(<span style={{color:"gold",fontSize:'30px'}}>☆</span>)
            }else{
                tab.push(<span style={{color:"black",fontSize:'30px'}}>☆</span>)
            }
        }
        return tab

    }
  return (
    <div>{
        React.Children.toArray(stars(rating))
        }</div>
  )
}

export default Startrating