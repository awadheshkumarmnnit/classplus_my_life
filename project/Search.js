import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from "../imageResults/imageResults";
class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'22483345-6755a7e8ff3dada0381a749fa',
        images:[]
    };
    onTextChange=(e)=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
            {
                this.setState({images:[]});
            }
            else{
             axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&safesearch=true`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
        }
        });
    };
    render(){
        console.log(this.state.images);
        return(
            <div>
            <input type="text" 
            style=
            {{backgroundColor:'black',
            color:'white',
            marginLeft:570,
            marginTop:100,
            paddingTop:20,
            paddingLeft:70,
            fontSize:30,
            borderTopStyle:"hidden",
            borderRightStyle:"hidden",
            borderLeftStyle:"hidden",
            outline:"none",
            borderBottomStyle:"groove",

        
        }}
        placeholder="Search for images"
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
             />
<br />
{this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
            </div>

        )
    }
}

export default Search;