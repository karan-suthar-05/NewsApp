import React, { useEffect , useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    
    const Capitlize = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [ articles , setArticles] = useState([]);
    const [ loading , setLoading] = useState(true);
    const [ page , setPage] = useState(1);
    const [ totalResult , setTotalResult] = useState(0);
    // document.title = `CurrNews-${Capitlize(props.category)}`;
     
     
    const UpdateNews = async(upage)=>{
      props.ChangeProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.contry}&category=${props.category}&apiKey=${props.api}&page=${`${upage}`}&pageSize=${props.pageSize}`;
      console.log(url);
           setLoading(  
             true
            );     
            let data = await fetch(url);
            props.ChangeProgress(30);
            let parseData = await data.json();
            props.ChangeProgress(60);    
            setArticles(parseData.articles);
            setLoading(false);
            setTotalResult(parseData.totalResults);
            props.ChangeProgress(100);
    }
    
   useEffect(() => {
    UpdateNews(1);
  } ,[]);

   const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.contry}&category=${props.category}&apiKey=${props.api}&page=${ page + 1}&pageSize=${props.pageSize}`;
    console.log(url);
          let data = await fetch(url);
          let parseData = await data.json();
          setArticles(articles.concat(parseData.articles));
          setPage(page + 1);    
           
  };
     
    // const handelPrevius =  ()=>{ 
    //       UpdateNews(page - 1); 
    //       setState({page: page - 1});
    // }  
    // const handelNext =   (e)=>{
      
    //   if(e.target.id==='1')
    //   {
    //       UpdateNews(1); 
    //       setState({page:1});
    //   }
    //   else if(e.target.id==='2')
    //   {
          
    //     UpdateNews(2);
    //     setState({page:2});
    //   }
    //   else if(e.target.id==='3')
    //   {  
    //     UpdateNews(3);
    //     setState({ page:3});
    //   }
    //   else
    //   {
    //     UpdateNews(page + 1); 
    //     setState({page:page + 1});
    //   }
    // }
     
    return (
      <>
        <h3 className="" style={{marginTop:"70px"}}>Curr-news<span className={`badge bg-${props.category==="sports"?"primary":(props.category==="general"?"secondary":(props.category==="health"?"danger":(props.category==="science"?"success":(props.category==="technology"?"warning":(props.category==="business"?"info":(props.category==="entertainment"?"dark":""))))))} mx-3`}>
          {`Top ${Capitlize(props.category)} headlines`}
          </span></h3>
        <hr/>
      {loading && <Spinner/>}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResult }
          loader={<Spinner/>}
        >
        <div className="row m-5" style={{minHeight:"450px"}}>
            {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title} desc={element.description} imgUrl={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} source={element.source.name} category={props.category}/>
                </div>    
            })}
        </div>
        </InfiniteScroll>
        {/* <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
              <p className={`page-link text-${page <= 1?"dark":"primary"}`} onClick={handelPrevius}>Previous</p>
            </li>
            <li className="page-item"><p className="page-link text-primary" id='1' onClick={handelNext}>1</p></li>
            <li className="page-item"><p className="page-link text-primary" id='2' onClick={handelNext}>2</p></li>
            <li className="page-item"><p className="page-link text-primary" id='3' onClick={handelNext}>3</p></li>
            <li className={`page-item ${page >= Math.ceil(totalResult/props.pageSize)?"disabled":""}`}>
              <p className={`page-link text-${page >= Math.ceil(totalResult/props.pageSize)?"dark":"primary"}`} id='next' onClick={handelNext}>Next</p>
            </li>
          </ul>
        </nav>     */}
      </>
    )
   
}

export default News
