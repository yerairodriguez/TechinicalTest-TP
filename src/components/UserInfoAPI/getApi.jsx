import axios from 'axios'
import React from 'react'

export function GetAPI(baseURL) {
    const [post, setPost] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
            })
    }, [baseURL])

    return post
}

export default GetAPI