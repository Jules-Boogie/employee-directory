import React from 'react'
import PropType from 'prop-types'

function search(props) {
    const style = {
        fontFamily: "'Satisfy', cursive",
        background: "grey",
        color: "white",
    }

    return (
        <div style={style}>
            <form  className="form-inline">
                <div className="form-group mx-auto">
                    <input type="text" 
                    value={props.Value} 
                    name={props.name}
                    onChange={props.Change}
                    placeholder="Search"
                    className="form-control mx-sm-3"/>
                    {/* <small id="passwordHelpInline" className="text-muted">
                        {props.Test}
                    </small> */}
                    <button className="btn btn-dark" onClick={props.clicked}> Search </button>
                </div>
                
            </form>
        </div>

    )
}

search.PropType = {
    Change: PropType.func,
    Value: PropType.string,
    name: PropType.string,
    clicked:PropType.func
    }

export default search;