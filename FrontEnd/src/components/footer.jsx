import React from "react"
import authService from "./service/auth.service"

// if (authService.getCurrentUser()) { window.location = '/'; } else { window.location = '/auth/login'; }
const Footer = () =>
    <footer style={{

        marginBottom: '-20px', width: '100%'
    }} className="page-footer font-small blue pt-4 navbar-bg">
        <div className="footer-copyright text-center py-3" style={{ letterSpacing: "6px" }}>&copy; Copyright reserved to <span style={{ fontWeight: "bold", letterSpacing: "1px" }}>Team 21</span>. All Rights Reserved
        </div>
        <p className="text-center pb-3" style={{ fontWeight: "bold", letterSpacing: "3px", fontStyle: "italic" }}>Page designed by:<span>Team 21</span></p>
    </footer>

export default Footer