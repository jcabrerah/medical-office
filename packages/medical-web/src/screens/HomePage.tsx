import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import {RouteComponentProps} from "react-router";

type PathParamsType = {
    history: any
}

type PropsType = RouteComponentProps<PathParamsType> & {
    // someString: string,
}

class HomePage extends Component<PropsType> {
    signInClick = () => {
        const history = this.props.history;
        history.push("/login");
    }

    constructor(props: any) {
        super(props);
        this.state = {disable: false};  
    }
    render() {
        return (
            <div >
                <Button 
                    data-testid="signIn-button" 
                    variant="contained" 
                    color="primary"
                    name="signIn" 
                    onClick={this.signInClick}>SignIn
                </Button>
            </div>
            
        );
      }
}

export default withRouter(HomePage);