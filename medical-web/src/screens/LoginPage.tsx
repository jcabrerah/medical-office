import React, {Component} from "react";
import Button from '@material-ui/core/Button';

class LoginPage extends Component {
    state = {
        disable: false,
      };
    loginClick = () => {
        this.setState({disable: true})
    }

    constructor(props: any) {
        super(props);
        this.state = {disable: false};  
    }
    render() {
        return (
            <div title="Login Page" data-testid="Login-Page">
                <input placeholder="user or email"/>
                <input placeholder="password"/>
                <Button
                    data-testid="login-button" 
                    variant="contained" color="primary" 
                    name="login" 
                    disabled={this.state.disable} 
                    onClick={this.loginClick}>Login
                </Button>
            </div>
        );
      }
}

export default LoginPage;