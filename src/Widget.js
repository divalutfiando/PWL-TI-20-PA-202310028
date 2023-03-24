import React from 'react'

export default function Widget() {
  return (
    <div> 
        <h1>Widget</h1>

    <Myname name="Diva" title="Mr" /> 
    <Myname2 name="Diva" title="Mr" /> 
    </div>

  )
}

{/* pemanggilan function dan parameternya cara 1*/}
        const Myname = ({ name, title}) => {
                    return (
                        <div>
                            <h1> Hi {name} {title} </h1>
                        </div>
                    )
                }


{/* pemanggilan function dan parameternya cara 1*/}
        const Myname2 = (props) => {
            return (
                <div>
                    <h1> Hi {props.namename} {props.title} </h1>
                </div>
            )
        }
