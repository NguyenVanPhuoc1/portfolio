// import React from 'react';
import '../assets/css/skeleton.css';

interface SkeletonProps {
    className : string
}

const SkeletonLoading: React.FC<SkeletonProps> = ({className}) => {
    return (
        <div className={`skeleton ${className}`} >
            
        </div>
    );
};

export default SkeletonLoading;