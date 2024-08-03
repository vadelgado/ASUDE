import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import PrimaryButton from "@/Components/PrimaryButton";

const BackButton = ({ to }) => {
    return (
        <PrimaryButton
            className="px-2 py-1 mb-2 text-xs sm:text-sm sm:px-4 sm:py-2"
            onClick={() => Inertia.visit(to)}
        >
            <i className="fa-solid fa-arrow-left"></i>
            {"  "}
            REGRESAR
        </PrimaryButton>
    );
};

export default BackButton;

