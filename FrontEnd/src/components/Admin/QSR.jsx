import axios from 'axios';
import React, { Component } from 'react'
import adminServices from '../service/admin.service';
import qsr from '../service/qsr.service';

class QSR extends Component {
    state = {
        name: "admin",
        totalProducts: []
    }
    render() {
        return (
            <button className='btn btn-primary mb-4 mt-4 rounded-pill px-5' onClick={this.createAndDownloadPdf}>
                Calculate QSR
            </button>
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

    componentDidMount() {
        qsr.getTotalProducts()
            .then(res => this.setState({ totalProducts: res.data }))
    }
}

export default QSR;