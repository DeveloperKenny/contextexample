import React from "react";
import { peopleContext } from "./datasheet";



const Teacher = ()=> {

    return(
            <div>
                <div>Welcome to Teacher Page</div>
                <peopleContext.Consumer>
                    {
                        (jobs) => (
                            <div>
                                {jobs.teacher.name}
                            </div>
                        )
                    }
                </peopleContext.Consumer>
            </div>
    )
}
export default Teacher;