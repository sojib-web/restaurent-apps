import React from 'react'
import dateformat from 'dateformat'

const LoadComments = ({comments}) => {
const previewComments = comments.map((c) =>{
    return ( <div key={c.id}>
        <h5>{c.author}</h5>
        <p>{c.comment}</p>
        <p>{dateformat(c.date,'ddd mmm dd yyyy')}</p>

        </div>);
});
    
  return <div>{previewComments}</div>
};


export default LoadComments