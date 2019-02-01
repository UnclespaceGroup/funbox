import React, { Component }from 'react'
import Main from "../page/Main";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {SetActive} from "../actions";
class MainPageContainer extends Component{
    render() {
        const {
            ...props
        } = this.props
        console.log(this.props);
        return(
            <Main {...props}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        SetActive: bindActionCreators(SetActive, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (MainPageContainer)