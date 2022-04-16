import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import {RouteComponentProps} from "react-router";
import MainBar from "../components/main-bar/MainBar"

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

    aboutClick = () => {
        const history = this.props.history;
        history.push("/about");
    }

    blogClick = () => {
        const history = this.props.history;
        history.push("/blog");
    }

    scheduleAppointmentClick = () => {
        const history = this.props.history;
        history.push("/scheduleappointment");
    }

    constructor(props: any) {
        super(props);
        this.state = {disable: false};  
    }
    render() {
        return (
            <div >
                <MainBar pages={[{page:'About', route:"/about"},
                    {page:'Schedule', route:"/scheduleappointment"},
                    {page:'blog', route:"/blog"}, 
                    {page: 'other', route:"/other"}]} />
                {/* <Button 
                    data-testid="signIn-button" 
                    variant="contained" 
                    color="primary"
                    name="signIn" 
                    onClick={this.signInClick}>SignIn
                </Button>
                <Button 
                    data-testid="about-button" 
                    variant="contained" 
                    color="primary"
                    name="about" 
                    onClick={this.aboutClick}>About
                </Button>
                <Button 
                    data-testid="schedule-appointment-button" 
                    variant="contained" 
                    color="primary"
                    name="about" 
                    onClick={this.scheduleAppointmentClick}>ScheduleAppointment
                </Button> */}
            </div>
            
        );
      }
}

export default withRouter(HomePage);