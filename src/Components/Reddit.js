import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import useFetch from "../Hooks/useFetch";


const Reddit = () => {
    const {data, isloading} = useFetch('https://www.reddit.com/r/recipes/.json?limit=25&restrict_sr=1')
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    // Filtering Data Returned from Reddit API
    useEffect(() => {
        if (!isloading) {
        let unfilteredPosts = data.data;
        let filteredData = unfilteredPosts.children.filter(child=> child.data.thumbnail !== "self")
        setPosts(filteredData);
        setLoading(false);
        }
    },[data])
    
    if(loading  || posts === null) {
        return <h1>Loading...</h1>
    }
    return ( 
        <div className="reddit">
            <h1>Reddit</h1>
            <div className="cards">
            {
                    posts.map(post => 
                        <div className="card">
                        <Card>
                            <CardHeader title={post.data.title} onClick={()=>window.open(`https://reddit.com${post.data.permalink}`,'_blank')}/>
                            <CardContent>
                                <img className="redditimg" src={post.data.thumbnail} alt={post.data.title}/>
                            </CardContent>
                        </Card>
                        </div>
                )
            }
            </div>
        </div>
    );
}
 
export default Reddit;