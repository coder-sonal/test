import React from 'react';
import Profileimg from './image';
import ProfileName from './name';
import ProfileActivities from './activity';
import Skills from './skill'

class CompleteProfile extends React.Component{
    render(){
        return(
            <div className="Maindiv">
                <Profileimg />
                <ProfileName />
                <ProfileActivities />
                <Skills />
            </div>
        )
    }
}
export default CompleteProfile