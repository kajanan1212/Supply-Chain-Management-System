import React from 'react'

const TrainSchedule = () => {
    return (
        <div className="container mt-4">
            <table className="table  table-secondary table-striped table-bordered border-dark">
                <thead className="thead-dark">
                    <tr>
                        <th className='col-2'>Train</th>
                        <th className='col-2'>Destination</th>
                        <th className='col-4'>Time</th>
                        <th className='col-2'>Capasity</th>
                        <th className='col-2'>Stops</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nuwara Devi</td>
                        <td>Colombo</td>
                        <td>6.00 A.M - 9.00 A.M</td>
                        <td>400m<sup>3</sup></td>
                        <td>Kegalle, Veyangoda, Gampaha, Colombo</td>
                    </tr>
                    <tr>
                        <td>Intercity</td>
                        <td>Jaffna</td>
                        <td>8.10 A.M - 14.00 P.M</td>
                        <td>100m<sup>3</sup></td>
                        <td>Matale, Dambulla, Anuradhapura, Vavuniya, Kilinochi, Jaffna</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}
export default TrainSchedule;