module.exports = ({ name }) => {
   const today = new Date();
   return `
   <!doctype html>
   <html>
   <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
      <style>
         .invoice-box {
            max-width: 800px;
            height: 1035px;
            margin: auto;
            padding: 30px;
            border: 5px solid rgb(32, 29, 29);
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 22px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica';
            background-color: #ceaff5;
            color: #555;
         }
         
         .column {
               float: left;
               width: 14%;
         }
         .row:after {
               content: "";
               display: table;
               clear: both;
         }
      </style>
   </head>

   <body>
      <div class="invoice-box">
         <div>
               <!-- <img src={require('../../Images/' + this.props.item.img)} alt="adsakk" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> -->
               <img src=".logo.jpeg" alt="100" style="width:15%;height:auto;" >
               <img src="logo.jpeg>
              
         </div>
         <div>
               <h2 style="margin-left: 35%; margin-top: -6%;">Quartely Sales Report</h2>
               <div style="margin-top: 7%;">
                  <label style="margin-right: 10px;">Quartely Sales Report Period :</label>
               </div>

               <div style="margin-top: 5%;">
                  <label>Total Product Sold<span style="margin-left: 110px; margin-right: 10px;">:</span>400</label>
               </div>
               <div style="margin-top: 5%;">
                  <label>Total Collection<span style="margin-left: 140px;margin-right: 10px;">:</span></label>
               </div>
               <div style="margin-top: 5%;">
                  <label>Most Sold Order<span style="margin-left: 129px;margin-right: 10px;">:</span></label>
               </div>
               <div style="margin-top: 5%;">
                  <label>Least Sold Order<span style="margin-left: 124px;margin-right: 10px;">:</span></label>
               </div>
               <div style="margin-top: 5%;">
                  <label>Most Engaged Store<span style="margin-left: 89px;margin-right: 10px;">:</span></label>
               </div>
               <div style="margin-top: 5%;">
                  <label>Total Shipments<span style="margin-left: 133px;margin-right: 10px;">:</span></label>
               </div>
         </div>

         <div class="row" style="font-size: 16px; margin-top: 50px; margin-left:-10px">
               <div class="column">VISITORS</div>
               <div class="column">CONTACTS</div>
               <div class="column">LEADS</div>
               <div class="column">MQLS</div>
               <div class="column">BI_USER</div>
               <div class="column">CUSTOMERS</div>
               <div class="column">EXPECTED_ARR</div>
         </div>

         <div class="row" style="font-size: 16px; font-weight: bold;  margin-left:-10px;">
               <div class="column">14K</div>
               <div class="column">2.0K</div>
               <div class="column">1.650K</div>
               <div class="column">76.0</div>
               <div class="column">78.0</div>
               <div class="column">2</div>
               <div class="column">2.6M</div>
         </div>

         <div class="row" style="font-size: 16px; font-weight: bold;  margin-left:-10px;">
               <div class="column">&#8593; 37.2%</div>
               <div class="column">&#8593; 19.1%</div>
               <div class="column">&#8593; 21.0%</div>
               <div class="column">&#8593; 35.7%</div>
               <div class="column">&#8593; 69.6%</div>
               <div class="column">&#8593; N/A</div>
               <div class="column">&#8593; 2.3%</div>
         </div>
      </div>
             
   </body>
   </html>
   `;
};