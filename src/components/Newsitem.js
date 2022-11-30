import React  from 'react'

const Newsitem = (props)=>{
     
    let {title,desc,imgUrl,url,author,time,source,category} =  props;
         
    return (
      <div className='container'>
        <div className="card my-2">
        <img src={imgUrl?imgUrl:"https://fdn.gsmarena.com/imgroot/news/22/11/vivo-x90-pro-pro-plus-video/-952x498w6/gsmarena_000.jpg"} className="card-img-top" alt="..." />    
            <div className="card-body">
                <h5 className="card-title">{title?title.slice(0,
                  45):""}...</h5>
                <p className="card-text">{desc?desc.slice(0,88):""}...</p>
                <p className="card-text"><small className="text-muted">By : {author?author:"Unknown"} at {time}</small></p>
                
                <a href={url} target="_blanck" className="">Read more</a>
            </div>
            <span className={`position-absolute top-0  translate-middle badge rounded-pill bg-${category==="sports"?"primary":(category==="general"?"secondary":(category==="health"?"danger":(category==="science"?"success":(category==="technology"?"warning":(category==="business"?"info":(category==="entertainment"?"dark":""))))))}`} style={{left:"50%",fontSize:"15px"}}>
    {source}</span>
            </div> 
            
      </div>
    )
   
}

export default Newsitem
