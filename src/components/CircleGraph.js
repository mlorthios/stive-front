import React from 'react';
import Graph1 from '../assets/images/Graph1.png';

const CircleGraph = () => {
  return (
    <div className={'p-6 border border-semiwhite shadow-lg rounded-default'}>
      <div className={'flex flex-col space-y-1 mb-6'}>
        <h2>Pourcentage de vente </h2>
        <span>Les 7 derniers jours</span>
      </div>
      <div className={'rounded-full pb-4'}>
        <img src={Graph1} className={'w-3/4'} alt="" />
      </div>
      <div className={'flex justify-center border-t border-semiwhite pt-6 pb-2'}>
        <span className={'text-center'}>Le vin blanc se vends le mieux</span>
      </div>
    </div>
  );
};

export default CircleGraph;
