import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import CoinDetail from "../Components/CoinDetail";

export default function DetailView() {


    return (
        <div>
            <CoinDetail />
        </div>
    )
}
