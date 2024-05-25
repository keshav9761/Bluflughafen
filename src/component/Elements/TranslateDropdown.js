import React, { useState } from 'react'
import svgImages from '../../Assets/Images/svgImages'
const { BritainSvg, GernamySvg } = svgImages;
/* eslint-disable */
import { useTranslation } from 'react-i18next'

export default function TranslateDropdown() {
    const { i18n } = useTranslation();

    const [lang, setLang] = useState("en")
    const handleLang = (e) => {
        setLang(e.target.value)
        i18n.changeLanguage(e.target.value)
    }
    const flag = {
        en: <BritainSvg />,
        de: <GernamySvg />
    }
    return (<>
        <div className='mx-2' style={{whiteSpace: 'nowrap'}}>
            <span>
                {flag[lang]}
            </span>
            <span>
                <select className='mx-1 p-1 select custom-select'
                    onChange={handleLang}>
                    <option value="en"> <b>EN</b> </option>
                    <option value="de"> <b>DE</b> </option>
                </select>
            </span>
        </div>
    </>)
}

