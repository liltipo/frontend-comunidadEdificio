import React from 'react'
import pdfFile from '../assets/boletin.pdf'

export const BoletinPage = () => {
  return (
    <>
      <a href={pdfFile} download="boletin.pdf">
        <button>Descargar PDF</button>
      </a>
    </>
  )
}

export default BoletinPage
