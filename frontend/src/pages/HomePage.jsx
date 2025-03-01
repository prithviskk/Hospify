import React from 'react';
import LeftImageContent from '../components/LeftImageContent';
import RightImageContent from '../components/RightImageContent';
import image from '../images/ORAL.png';
import patient from "../images/HIMS-OPD-1.webp";

const HomePage = () => {
  return (
    <div className="w-fullh-screen">
      <LeftImageContent
        imageSrc={image}
        title="Efficient Hospital Management"
        description="Our hospital management system provides streamlined workflows, automated administrative tasks, and robust patient data management to enhance efficiency and improve patient care."
      />

      <RightImageContent
        imageSrc={patient}
        title="Patient-Centered Care"
        description="We prioritize patient care through personalized services, quick appointment scheduling, and easy access to medical records to ensure patients receive the best possible treatment."
      />
    </div>
  );
};

export default HomePage;
