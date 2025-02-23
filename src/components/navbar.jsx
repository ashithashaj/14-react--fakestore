import React, { useState } from "react";
import "../App.css";

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div>
                <nav className="navbar">
                    <div className="navbar-container">
                        <div className="navbar-logo">
                            <img src="/logo.png" alt="Logo" />
                        </div>
                        <div className="navbar-search">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="search-input"
                            />
                            
                        </div>
                        <div className="navbar-links">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Products</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
