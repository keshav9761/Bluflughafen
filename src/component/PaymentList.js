import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';

export function PaymentList({buttonName,path}) {
  
  const { t } = useTranslation();
  const navigate = useNavigate()

  const handleProcess = () => {
    navigate(path)
  }
  return (
    <>

      <h2>Payment List</h2>
      <div className='d-flex justify-content-evenly'>
        <div className='p'><b> {t('extopt')}</b></div>
        <div className='p'><b>$223.00</b></div>
      </div>
      <div className='d-flex justify-content-evenly'>
        <div className='p'><b>{t('AusgetF')}</b></div>
        <div className='p'><b>$223.00</b></div>
      </div>
      <div className='text-center' ><hr></hr></div>
      <div className='d-flex justify-content-evenly'>
        <div className='Gesamt-text'>{t('gesamt')}</div>
        <div className='Gesamt-text'><b>$223.00</b></div>
      </div>
      <div className='mt-4'>
        <button className="btn-primary w-100" onClick={handleProcess}>{buttonName}</button>
      </div>
    </>
  )
}
