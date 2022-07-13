import axios from 'axios';
import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import adminServices from '../service/admin.service';
import qsr from '../service/qsr.service';

class QSR extends Component {
    state = {
        year: "2022",
        part: 1,
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
        await qsr.getAllDetails(this.state)
            .then(
                setTimeout('', 5000),
                console.log("first")
            )
            .then((response) => {
                this.setState({
                    start_date: response.data[0][0]['start_date'],
                    end_date: response.data[1][0]['end_date'],
                    total_product_sold: response.data[2][0]['total_product_sold'],
                    total_collection: response.data[3][0]['total_collection'],
                    most_sold_order: response.data[4][0]['product_id'],
                    least_sold_order: response.data[5][0]['product_id'],
                    engaged_store: response.data[6][0]['store_id'],
                    total_shipment: response.data[7][0]['total_shipments']
                })
                // console.log(response.data)
                // console.log(this.state)
            });
    }

    render() {
        return (
            <div>
                {this.state.start_date.split('T')[0]}
                <button className="btn btn-primary">Download as PDF</button>
                {/* onClick={this.createAndDownloadPdf} */}
            </div >
        );
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