import React from 'react';
import Button from '../../components/UI/Button';
import Highlight from '../../components/Highlight';
import CircleGraph from '../../components/CircleGraph';
import BarGraph from '../../components/BarGraph';

const HomeContainer = () => {
  return (
    <div className={''}>
      <div className={'border-b border-semiwhite pb-8 flex justify-between items-center'}>
        <h1>Tableau de bord</h1>
        <Button variant={'blue'}>Ajouter</Button>
      </div>
      <Highlight />
      <div className={'grid md:grid-cols-2 grid-cols-1 gap-8 pb-8'}>
        <CircleGraph />
        <BarGraph />
      </div>
      <div className={'grid md:grid-cols-2 grid-cols-1 gap-8 pb-8'}>
        <CircleGraph />
        <BarGraph />
      </div>
    </div>
  );
};

export default HomeContainer;
