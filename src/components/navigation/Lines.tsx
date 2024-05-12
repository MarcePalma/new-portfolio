import React from 'react';

const Lines = () => {
    return (
        <>
            {/* Línea izquierda */}
            <div className="fixed top-0 left-0 h-full w-2 bg-gray-900" style={{ zIndex: '9999' }}></div>
            {/* Línea derecha */}
            <div className="fixed top-0 right-0 h-full w-2 bg-gray-900" style={{ zIndex: '9999' }}></div>
            {/* Línea superior */}
            <div className="fixed top-0 left-0 w-full h-2 bg-gray-900" style={{ zIndex: '9999' }}></div>
        </>
    );
};

export default Lines;
