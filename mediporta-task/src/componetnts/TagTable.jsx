import React, {useEffect} from "react";
import {connect} from 'react-redux'
import { fetchTagsRequest } from "../actions/tagActions";

const TagTable = ({tags, loading, error, fetchTags}) => {
    useEffect(() => {
        fetchTags()
    }, [fetchTags])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>

    return (
        <table>
       <thead>
        <tr>
            <th>Tag</th>
            <th>Count</th>
        </tr>
       </thead>
       <tbody>
        {tags.map(tag => (
            <tr key={tag.name}>
                <td>{tag.name}</td>
                <td>{tag.count}</td>
            </tr>
        ))}
       </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({
    tags: state.tagReducer.tags,
    loading: state.tagReducer.loading,
    error: state.tagReducer.error
})

const mapDispatchToProps = (dispatch) => ({
    fetchTags: () => dispatch(fetchTagsRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(TagTable)