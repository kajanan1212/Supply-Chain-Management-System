import axios from 'axios';
import React, { Component } from 'react'
import adminServices from '../service/admin.service';
import qsr from '../service/qsr.service';
import QSR_OVN from './QSR_OVN';

class QSR extends Component {
    state = {
        year: '2022',
        part: 3,
        start_date: "N/A",
        end_date: "N/A",
        total_product_sold: "N/A",
        total_collection: "N/A",
        most_sold_order: "N/A",
        least_sold_order: "N/A",
        engaged_store: "N/A",
        total_shipment: "N/A",

    }

    async componentDidMount() {
        const { qsr_year, qsr_part } = JSON.parse(localStorage.getItem("qsr"));
        // this.setState({ year: qsr_year, part: qsr_part })

        // console.log(this.state)
        await qsr.getAllDetails(this.state)
            .then((response) => {
                this.setState({
                    start_date: response.data[0][0]['start_date'],
                    end_date: response.data[1][0]['end_date'],
                    total_product_sold: response.data[2][0]['total_product_sold'],
                    total_collection: response.data[3][0]['total_collection'],
                    most_sold_order: response.data[4][0]['product_id'],
                    least_sold_order: response.data[5][0]['product_id'],
                    engaged_store: response.data[6][0]['first_name'],
                    total_shipment: response.data[7][0]['total_shipments']
                })
                // console.log(response.data)
            });
        // console.log(this.state)
    }
    today() {
        const today = new Date();
        const month = today.getMonth() + 1;
        // console.log(month)
        const dae = today.getDate() + "-" + month + "-" + today.getFullYear();
        return dae;
    }

    render() {


        const { year, part, start_date, end_date, total_product_sold, total_collection, most_sold_order, least_sold_order, engaged_store, total_shipment } = this.state;
        // const { qsr_year, qsr_part } = JSON.parse(localStorage.getItem("qsr"));
        return (

            <div className="body">
                <div className="invoice-box mt-3" style={{ maxWidth: "800px", height: "1035px", margin: "auto", padding: "30px", border: "5px solid rgb(32, 29, 29)", boxShadow: "0 0 10px rgba(0, 0, 0, .15)", fontSize: "22px", lineHeight: "24px", fontFamily: "'Helvetica Neue', 'Helvetica'", backgroundColor: "#83d36a4d", color: "#555" }}>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/d/da/BuyMoreLogo.png" alt="100"
                            style={{ width: "18%", height: "auto" }}></img>
                        <div style={{ marginTop: "-5%" }}><label style={{ marginLeft: "550px", paddingTop: "-150px", color: "black" }}>Date :{this.today()}</label>
                        </div>
                    </div>
                    <div style={{ marginLeft: "15%" }}>
                        <h2 style={{ marginLeft: "6%", marginTop: "6%", textIndent: "2em" }}>Quartely Sales Report</h2>
                        <div style={{ marginTop: "8%" }}>
                            <label style={{ marginRight: "40px", color: "black" }}>Quartely Sales Report Period :<span className='fw-light' style={{ fontSize: '17px' }}>{start_date.split('T')[0] + ' To ' + end_date.split('T')[0]}</span></label>
                        </div>
                        <div style={{ marginTop: "6%" }}>
                            <label style={{ color: "black" }}>Total Product Sold<span style={{ marginLeft: "110px", marginRight: "40px" }}>:</span><span className='fw-light' style={{ fontSize: '17px' }}>{total_product_sold}</span> </label>
                        </div>
                        <div style={{ marginTop: "6%" }}>
                            <label style={{ color: "black" }}>Total Collection<span style={{ marginLeft: "140px", marginRight: "40px" }}>:</span><span className='fw-light' style={{ fontSize: '17px' }}>{total_collection}</span></label>
                        </div>
                        <div style={{ marginTop: "6%" }}>
                            <label style={{ color: "black" }}>Most Sold Order<span style={{ marginLeft: "129px", marginRight: "40px" }}>:</span><span className='fw-light' style={{ fontSize: '17px' }}>{most_sold_order}</span></label>
                        </div>
                        <div style={{ marginTop: "6%" }}>
                            <label style={{ color: "black" }}>Least Sold Order<span style={{ marginLeft: "124px", marginRight: "40px" }}>:</span><span className='fw-light' style={{ fontSize: '17px' }}>{least_sold_order}</span></label>
                        </div>
                        <div style={{ marginTop: "6%" }}>
                            <label style={{ color: "black" }}>Most Engaged Store<span style={{ marginLeft: "89px", marginRight: "40px" }}>:</span><span className='fw-light' style={{ fontSize: '17px' }}>{engaged_store}</span></label>
                        </div>
                        <div style={{ marginTop: "6%" }}>
                            <label style={{ color: "black" }}>Total Shipments<span style={{ marginLeft: "133px", marginRight: "40px" }}>:</span><span className='fw-light' style={{ fontSize: '17px' }}>{total_shipment}</span></label>
                        </div>
                    </div>
                    <QSR_OVN year={year} part={part} />

                </div>
                <div className='d-flex justify-content-end mt-5 me-5 mb-3'>
                    <button className="btn btn-primary btn-sm">Download as PDF</button>
                    {/* onClick={this.createAndDownloadPdf} */}
                </div >
            </div>


        )

    }

    createAndDownloadPdf = () => {
        adminServices.pdfparse(this.state)
            .then(() => axios.get('http://localhost:3001/admin', { responseType: 'blob' }))
            .then((res) => {
                // console.log(res.data)
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                // console.log(pdfBlob)
                // saveAs(res.data, 'new.txt');
                saveAs(pdfBlob, 'newPdf.pdf');
                // new Blob([res.data], { type: 'application/pdf' }),`sample.pdf`);
            })
    }

    // componentDidMount() {
    //     // qsr.getTotalProducts()
    //     //     .then(res => this.setState({ totalProducts: res.data }))
    //     qsr.getQSRperiod()
    //         .then(res => console.log(res))
    // }
}

export default QSR;