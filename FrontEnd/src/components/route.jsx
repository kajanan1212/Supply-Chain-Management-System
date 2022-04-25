import React from 'react'

class Route extends React.Component {
    state = {
        mainStore: "Colombo",
        routeCount: 15
    }
    render() {
        return (
            <div style={{ minHeight: "110px", backgroundColor: "#d9d0e4" }} className="m-3 p-3">
                <div className="row mb-3">
                    <div className="col-6 text-center fw-bolder"><span>{this.state.mainStore}</span></div>
                    <div className="col-6 text-center fw-bolder"><span>{this.state.routeCount}</span></div>
                </div>
                <div className="text-center fw-lighter" style={{ fontSize: "14px" }}>Show all routes in {this.state.mainStore}</div>
                <div className="text-center"><i class="fa fa-chevron-down" data-bs-toggle="collapse" data-bs-target="#routeContents" aria-controls="routeContents" aria-expanded="false" aria-label="Toggle navigation"></i></div>
                <div className="collapse justify-content-center" id="routeContents">
                    <ul className="list-group list-group-flush  bg-transparent">
                        <li className="list-group-item  bg-transparent">
                            <a className="text-decoration-none text-dark" href="#">Through Puththalam</a>
                        </li>
                        <li className="list-group-item  bg-transparent">
                            <a className="text-decoration-none text-dark" href="#">Through Trincommalee</a>
                        </li>
                        <li className="list-group-item  bg-transparent">
                            <a className="text-decoration-none text-dark" href="#">Through Kandy</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Route;