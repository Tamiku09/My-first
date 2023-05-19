import React from "react";
import { emptyCard } from "../../components/EmptyCard";
import cls from '../../Styles/HomeNewsStyles/index.module.scss'
import { CardNews } from "../../components/CardNews";
  const Home = ({}) =>{
    const[news,setNews] = React.useState(
        JSON.parse(localStorage.getItem("news")) || []
    )
    console.log(news)
    return(
        <div>
       {
        news.length === 0?(
            <p>Nothing...</p>
        ):(
            news.map(item=>(
                <CardNews item={item}/>
                        )
        )
        
            
        )
       }
        </div>
    )
}
export default Home