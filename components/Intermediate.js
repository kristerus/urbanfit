import React from 'react'

const Intermediate = () => {
    return (
        <div className='beginner'>
            <div className='days'>
                <h2 className='splitTitle'>Suggested Muscle Split</h2>
                <h3 className='splitTitle'>Upper/Lower Split</h3>
                <div className='benefits'>
                    <h2>Benefits</h2>
                    <ul>
                        <li> Better-suited for experienced lifters who need more recovery time in between workouts</li>
                        <li> You do all upper body movements or all lower body movements within the same workout</li>
                    </ul>
                </div>
            </div>
            <div className='days'>
                <h2>3 Days A Week</h2>
                <ul>
                    <li>
                        Monday – Upper Body Workout One
                    </li>
                    <li>
                        Tuesday – Rest
                    </li>
                    <li>
                        Wednesday – Lower Body Workout One
                    </li>
                    <li>
                        Thursday – Rest
                    </li>
                    <li>
                        Friday – Upper Body Workout Two
                    </li>

                    <li>
                        Saturday – Rest
                    </li>
                    <li>
                        Sunday – Rest
                    </li>


                </ul>
            </div>
            <div className='days'>
                <h2>6 Days A Week</h2>
                <ul>
                    <li>
                        Monday – Upper Body Workout One
                    </li>
                    <li>
                        Tuesday – Lower Body Workout One
                    </li>
                    <li>
                        Wednesday – Rest
                    </li>
                    <li>
                        Thursday – Upper Body Workout Two
                    </li>
                    <li>
                        Friday – Lower Body Workout Two
                    </li>

                    <li>
                        Saturday – Upper Body workout Three
                    </li>
                    <li>
                        Sunday – Rest
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default Intermediate