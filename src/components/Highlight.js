import React from 'react';
import Profile from '../assets/images/profile.jpeg';

const Highlight = () => {
  return (
    <div className={'grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 py-8'}>
      <div
        className={
          'border border-semiwhite p-4 rounded-default flex items-center md:space-x-4 shadow-lg w-full'
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
          'border border-semiwhite p-4 rounded-default flex w-full items-center space-x-4 shadow-lg md:flex hidden'
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
          'border border-semiwhite p-4 rounded-default flex w-full items-center md:space-x-4 shadow-lg'
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
          'border border-semiwhite p-4 rounded-default w-full items-center space-x-4 shadow-lg xl:flex hidden'
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
  );
};

export default Highlight;
