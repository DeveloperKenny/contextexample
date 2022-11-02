import React from "react";
import { peopleContext } from "./datasheet";



const Police = ()=> {

    return(
            <div>
                <div>Welcome to Police Page</div>
                <peopleContext.Consumer>
                    {
                        (jobs) => (
                            <div>
                                {jobs.police.name}
                            </div>
                        )
                    }
                </peopleContext.Consumer>
            </div>
    )
}
export default Police;