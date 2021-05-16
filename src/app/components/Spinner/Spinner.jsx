import React from 'react';
import ClipLoader from "react-spinners/FadeLoader";
import { SpinnerWrap } from "./Spinner.styled";

const Spinner = () => {
    return (
        <SpinnerWrap>
            <ClipLoader size={50} color={"#E05056"} loading={true} />
            <div>
                <p className="load-message color-red">Loading ...</p>
            </div>
        </SpinnerWrap>
    )
};

export default Spinner;
