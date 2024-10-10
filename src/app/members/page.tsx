import React from 'react';

const Members = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-10">
        <h1 className="text-3xl font-bold text-center mb-5">Our Members</h1>
        <p className="text-lg text-center text-gray-700">
          Our chapter is made up of passionate student leaders who are eager to make a difference
          in their communities. Below are some of our dedicated members:
        </p>
        <ul className="mt-5 list-disc list-inside">
          <li className="text-lg">Debaditya Som - Core</li>  {/* Include members Linkdln & github profile when creating the card */}
          <li className="text-lg">Aditya Seth - Cypher Prime</li>
          <li className="text-lg">Shinjan Saha - Cypher Associate</li>
          <li className="text-lg">Sukrit Deb - Illuminators Prime</li>
          <li className="text-lg">Tanushree Das - Illuminators Associate</li>
          <li className="text-lg">Ankur Mukherjee - Mandalorian</li>
          <li className="text-lg">Diptanil Sen - Mandalorian</li>
          <li className="text-lg">Ishita Majumdar - Mandalorian</li>
          <li className="text-lg">Anik Mukherjee - Sentinels Prime</li>
          <li className="text-lg">Subhranil Shit - Sentinels Associate</li>
          <li className="text-lg">Sagnik Pramanik - Cypher</li>
          <li className="text-lg">Ashmit Ghosh - Cypher</li>
          <li className="text-lg">Reashav De - Cypher</li>
          <li className="text-lg">Anushka Bhowmick - Cypher</li>
          <li className="text-lg">Parna Roy Chowdhury - Cypher</li>
          <li className="text-lg">Srinjay Das Gupta - Cypher</li>
          <li className="text-lg">Komal Agarwal - Cypher</li>
          <li className="text-lg">Abhishikta Ray - Cypher</li>
          <li className="text-lg">Ankan Misra - Cypher</li>
          <li className="text-lg">Suman Jain - Cypher</li>
          <li className="text-lg">Rajdeep Saha - Cypher</li>
        </ul>
      </div>
    </div>
  );
};

export default Members;
