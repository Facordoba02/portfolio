import React from 'react'
import { useTranslation } from 'react-i18next'

export const Card = ({ data }) => {
    const { t } = useTranslation();
    return (
        <article className="card">
            <header className="card__header">
                <img className="card__img" src={data.img} alt={`${data.name} image`} />
            </header>
            <div className="card__content">
                <h3 className="card__title">{data.name}</h3>
                <p className="card__desc">{t(data.desc)}</p>
                <ul className="card__list">
                    {
                        data.langs.map((l, i) => (
                            <li className="card__item" key={i}>{l}</li>
                        ))
                    }
                </ul>
                <a href={data.link} target="_blank" className="card__link">{t("see")}</a>
            </div>
        </article>
    )
}
