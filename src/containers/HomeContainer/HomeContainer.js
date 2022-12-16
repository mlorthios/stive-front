import React from 'react';
import Profile from '../../assets/images/profile.jpeg';
import Button from '../../components/UI/Button';
import Graph1 from '../../assets/images/Graph1.png';

const HomeContainer = () => {
  return (
    <div className={''}>
      <div className={'border-b border-semiwhite pb-8 flex justify-between items-center'}>
        <h1>Tableau de bord</h1>
        <Button variant={'blue'}>Ajouter</Button>
      </div>
      <div className={'grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 py-8'}>
        <div
          className={
            'border border-semiwhite p-4 rounded-default flex w-fit items-center md:space-x-4 shadow-lg'
          }>
          <div className={'lg:w-20 md:w-[4.5rem] w-28 md:block hidden'}>
            <img src={Profile} className={'rounded-full'} alt="" />
          </div>
          <div className={'flex flex-col space-y-1'}>
            <span className={'text-bluestive text-2xl font-bold'}>56 </span>
            <p className={'text-bluestive'}>Bouteilles commandées</p>
          </div>
        </div>
        <div
          className={
            'border border-semiwhite p-4 rounded-default flex w-fit items-center space-x-4 shadow-lg md:flex hidden'
          }>
          <div className={'lg:w-20 md:w-[4.5rem]'}>
            <img src={Profile} className={'rounded-full'} alt="" />
          </div>
          <div className={'flex flex-col space-y-1'}>
            <span className={'text-bluestive text-2xl font-bold'}>56 </span>
            <p className={'text-bluestive'}>Bouteilles commandées</p>
          </div>
        </div>
        <div
          className={
            'border border-semiwhite p-4 rounded-default flex w-fit items-center md:space-x-4 shadow-lg'
          }>
          <div className={'lg:w-20 md:w-[4.5rem] md:block hidden'}>
            <img src={Profile} className={'rounded-full'} alt="" />
          </div>
          <div className={'flex flex-col space-y-1'}>
            <span className={'text-bluestive text-2xl font-bold'}>56 </span>
            <p className={'text-bluestive'}>Bouteilles commandées</p>
          </div>
        </div>
        <div
          className={
            'border border-semiwhite p-4 rounded-default w-fit items-center space-x-4 shadow-lg xl:flex hidden'
          }>
          <div className={'lg:w-20 md:w-[4.5rem]'}>
            <img src={Profile} className={'rounded-full'} alt="" />
          </div>
          <div className={'flex flex-col space-y-1'}>
            <span className={'text-bluestive text-2xl font-bold'}>56 </span>
            <p className={'text-bluestive'}>Bouteilles commandées</p>
          </div>
        </div>
      </div>
      <div className={'grid grid-cols-2 space-x-8 pb-8'}>
        <div className={'p-6 border border-semiwhite shadow-lg rounded-default'}>
          <div className={'flex flex-col space-y-1 mb-6'}>
            <h2>Pourcentage de vente </h2>
            <span>Les 7 derniers jours</span>
          </div>
          <div className={'rounded-full pb-4'}>
            <img src={Graph1} className={'w-3/4'} alt="" />
          </div>
          <div className={'flex justify-center border-t border-semiwhite pt-6 pb-2'}>
            <span className={'text-center'}>Le vin blanc se vend le mieux</span>
          </div>
        </div>
        <div className={'p-6 border border-semiwhite shadow-lg rounded-default'}>
          <div className={'flex flex-col space-y-1 mb-6'}>
            <h2>Pourcentage de vente </h2>
            <span>Les 7 derniers jours</span>
          </div>
          <div className={'rounded-full pb-4'}>
            <img src={Graph1} className={'w-3/4'} alt="" />
          </div>
          <div className={'flex justify-center border-t border-semiwhite pt-6 pb-2'}>
            <span className={'text-center'}>Le vin blanc se vend le mieux</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
