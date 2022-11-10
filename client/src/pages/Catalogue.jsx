import React from 'react';
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Breadcrumb from "../components/Breadcrumb";

function Catalogue() {
    return (
        <>
            <Breadcrumb />
            <div className="flex ье-">
                <div className="basis-1/5 mt-10">
                    <Sidebar />
                </div>
                <div className="basis-4/5 grid grid-cols-4 mr-5 my-5">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default Catalogue;