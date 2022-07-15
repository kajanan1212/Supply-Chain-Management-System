import React, { Component } from 'react'
import qsr from '../service/qsr.service'

class QSR_OVN extends Component {
    state = {
        year: this.props.year,
        part: this.props.part,
        oldYear: '2022',
        oldPart: 1,
        orders: 'N/A',
        working_hours: 'N/A',
        train_transports: 'N/A',
        truck_transports: 'N/A',
        product_sales: 'N/A',

        Old_orders: 'N/A',
        Old_working_hours: 'N/A',
        Old_train_transports: 'N/A',
        Old_truck_transports: 'N/A',
        Old_product_sales: 'N/A',
    }

    async componentDidMount() {
        const { year, part } = this.props;
        let oldPart, oldYear;
        if (part > 1) {
            oldPart = part - 1;
            oldYear = year;
        } else {
            oldPart = 4;
            oldYear = parseInt(year) - 1
        }
        // console.log(oldYear, oldPart)
        // this.setState({ part: 10 })
        console.log(this.state)
        await qsr.getQSR_OVN(this.state)
            .then((response) =>
                this.setState({
                    orders: response.data[0][0]['orders'],
                    working_hours: response.data[1][0]['working_hours'],
                    train_transports: response.data[2][0]['train_transports'],
                    truck_transports: response.data[3][0]['truck_transports'],
                    product_sales: response.data[4][0]['product_sales'],

                    Old_orders: response.data[5][0]['orders'],
                    Old_working_hours: response.data[6][0]['working_hours'],
                    Old_train_transports: response.data[7][0]['train_transports'],
                    Old_truck_transports: response.data[8][0]['truck_transports'],
                    Old_product_sales: response.data[9][0]['product_sales']
                }))
    }
    findPercentage(new_, old) {
        if ((old == 0) || (old == null)) { return "CBD" }
        return ((new_ - old) / old * 100).toFixed(2);
    }
    findupORdown(new_, old) {
        if ((old == 0) || (old == null)) { return "" }
        const res = (new_ - old) / old * 100;
        return res >= 0 ? '\u2191' : '\u2193'
    }
    findColor(new_, old) {
        if ((old == 0) || (old == null)) { return "purple" }
        const res = (new_ - old) / old * 100;
        return res >= 0 ? "green" : "red"
    }
    render() {
        const column = {
            float: "left",
            width: "18%",
            color: "black"
        };

        const row = {
            '&::after': {
                content: "",
                display: "table",
                clear: "both",
                color: "red"
            }

        };
        const { orders, working_hours, train_transports, truck_transports, product_sales, Old_orders, Old_working_hours, Old_train_transports, Old_truck_transports, Old_product_sales } = this.state;
        return (
            <div className="ms-3">
                {/* {console.log(this.state)} */}
                <div className="row" style={{ fontSize: "16px", marginTop: "100px", marginLeft: "-10px" }}>
                    <div className="column" style={column}>ORDERS</div>
                    <div className="column" style={column}>WORKING HOURS</div>
                    <div className="column" style={column}>TRAIN TRANSPORTS</div>
                    <div className="column" style={column}>TRUCK TRANSPORTS</div>
                    <div className="column" style={column}>PRODUCT SALES</div>
                </div>

                <div className="row" style={{ fontSize: "16px", fontWeight: "bold", marginTop: "15px", marginLeft: "-10px" }}>
                    <div className="column" style={column}>{orders}</div>
                    <div className="column" style={column}>{working_hours}</div>
                    <div className="column" style={column}>{train_transports}</div>
                    <div className="column" style={column}>{truck_transports}</div>
                    <div className="column" style={column}>{product_sales}</div>
                    {/* <!-- <div className="column">2</div>
                        <div className="column">2.6M</div> --> */}
                </div>

                <div className="row" style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px", marginLeft: "-10px" }}>
                    <div className="column" style={column}><span style={{ color: this.findColor(orders, Old_orders) }}>{this.findupORdown(orders, Old_orders)} {this.findPercentage(orders, Old_orders)}</span></div>
                    <div className="column" style={column}><span style={{ color: this.findColor(working_hours, Old_working_hours) }}>{this.findupORdown(working_hours, Old_working_hours)} {this.findPercentage(working_hours, Old_working_hours)}</span></div>
                    <div className="column" style={column}><span style={{ color: this.findColor(train_transports, Old_train_transports) }}>{this.findupORdown(train_transports, Old_train_transports)} {this.findPercentage(train_transports, Old_train_transports)}</span></div>
                    <div className="column" style={column}><span style={{ color: this.findColor(truck_transports, Old_truck_transports) }}>{this.findupORdown(truck_transports, Old_truck_transports)} {this.findPercentage(truck_transports, Old_truck_transports)}</span></div>
                    <div className="column" style={column}><span style={{ color: this.findColor(product_sales, Old_product_sales) }}>{this.findupORdown(product_sales, Old_product_sales)} {this.findPercentage(product_sales, Old_product_sales)}</span></div>
                    {/* <!-- <div className="column">&#8593; N/A</div>
                        <div className="column">&#8593; 2.3%</div> --> */}
                </div>
            </div>
        )
    }
}

export default QSR_OVN;