import React  from 'react'
import PropTypes from 'prop-types'

const Select = (props)=> {
  // async UpdateNews()
  //   {
  //     this.props.ChangeProgress(10);
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contry}&category=${this.props.category}&apiKey=${this.props.api}&page=${1}&pageSize=${this.props.pageSize}`;
  //     console.log(url);
                
  //           let data = await fetch(url);
  //           this.props.ChangeProgress(30);
  //           let parseData = await data.json();
  //           this.props.ChangeProgress(60);    
  //           this.setState({articles:parseData.articles 
  //           });
  //           this.props.ChangeProgress(100);
  //   }
    const SelectFun = (e)=>{
      props.CahngeContry(e.target.value);
    }
     
    return (
        <select className="form-select text-right" style={{width:"140px"}} aria-label="Default select example" onChange={SelectFun}>
        <option  value="in">India</option>
        <option value="us">America</option>
        <option value="ar">Argentina</option>
        <option value="au">Australia</option>
        <option value="ca">Canada</option>
        <option value="cn">China</option>
        <option value="jp">Japan</option>
        <option value="nz">New Zealand</option>
        <option value="ru">Russia</option>
        <option value="ch">Switzerland</option>
      </select>
    )
   
}

Select.prototype = {
  CahngeContry:PropTypes.func.isRequired
}

export default Select
