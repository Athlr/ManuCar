import React, {useEffect, useState } from 'react';

function AppointmentHistory(){
    const [appointments, setAppointments] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/"

        try {
            const response = await fetch(url);
            if(response.ok){
                const data = await response.json();
                setAppointments(data.appointments);
                setFilteredAppointments(data.appointments)

            }
        } catch (e) {
            console.error(e)
        }
    };


    useEffect(() => {
        fetchData();
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

             const results = appointments.filter((appointment) => {
                return appointment.vin.includes(searchInput);

            });
            setFilteredAppointments(results);

    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchInput(value);
    };

    return (
        <div className="my-5 container h-100">
            <h1>Service History</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-group mb-3 w-100'>
                    <input className='form-control' type='search' name='searchInput' aria-describedby='submit-button' placeholder='Search by VIN...' value={searchInput} onChange={handleSearch}/>
                    <button className='btn btn-outline-secondary' type='submit' id='submit-button'>Search</button>
                </div>
            </form>
            <div className="h-75 overflow-auto">
                <table className='table table-striped' >
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Is VIP?</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAppointments.map((appointment) => {
                            const dateTime = new Date(appointment.date_time);
                            const date = dateTime.toLocaleDateString()
                            const time = dateTime.toLocaleTimeString()

                                if(appointment.status === "Canceled" || appointment.status ==="Finished"){
                                    return(
                                        <tr key={appointment.id}>
                                            <td>{appointment.vin}</td>
                                            <td>{appointment.is_vip ? 'Yes' : 'No'}</td>
                                            <td>{appointment.customer}</td>
                                            <td>{date}</td>
                                            <td>{time}</td>
                                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                            <td>{appointment.reason}</td>
                                            <td>{appointment.status}</td>
                                        </tr>
                                    )
                                }
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AppointmentHistory;
