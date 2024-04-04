import React, { useState } from 'react';
import styles from './About.module.css';
import { useTranslation } from 'react-i18next';
import { MyCube } from './MyCube';
import i18n from '../../i18n'

export const About = () => {
    const { t } = useTranslation()
    const funFacts = ["I'm from Suzhou, China",
        "My favourite basketball player is Stephen Curry",
        "My favourite basketball player from Duke is Zion, and I don't like Tatum",
        "I eat creatine on the daily",
        "I played Overwatch for 6 years, but now I quit",
        "The album I listened to the most in 2023 was Blonde (Frank Ocean)",
        "When I'm in the gym, I usually listen to the album 'My Beautiful Dark Twisted Fantasy'",
        "Up until April 1st, my predicted bench press PR is 157 lbs, which is 15 lbs more than my body weight",
        "Shout out to Andrew Douglas Hilton",
        "I need 8-9 hours high quality sleep every day",
        "My favourite coffee beans brand in North Carolina is Larry's",
        "I drink coffee 2-3 times a day, and that usally all happens in the morning."
    ]

    const funFacts_ch = [
        "我来自中国苏州",
        "我的最喜欢的篮球运动员是斯蒂芬·库里",
        "我最喜欢的杜克大学篮球运动员是锡安，我不喜欢塔图姆",
        "我每天都吃肌酸",
        "我玩《守望先锋》已经6年了，但现在我退出了",
        "我在2023年最常听的专辑是《Blonde》（Frank Ocean）",
        "当我在健身房时，我通常听坎耶专辑 ‘My Beautiful Dark Twisted Fantasy’",
        "直到4月1日，我预测的卧推最高重量是157磅，比我的体重多15磅",
        "向 Andrew Douglas Hilton 致敬",
        "我每天需要8-9小时高质量的睡眠",
        "我在北卡罗来纳州最喜欢的咖啡豆品牌是 Larry's",
        "我每天喝2-3次咖啡，通常都是在早上喝的。"
    ]

    const [funfactIdx, setIdx] = useState(0)
    const changeFunfactIdx = () => {
        let newIdx = -1
        do {
            newIdx = Math.floor(Math.random() * funFacts.length)
        } while (newIdx == funfactIdx)
        setIdx(newIdx)
    }

    return <section className={styles.container} id="about">
        <h2 className={styles.title}>{t('about')}</h2>
        <div className={styles.content}>
            <div className={styles.cube}><MyCube /></div>
            <div className={styles.aboutDetail}>{t('aboutDetail')}</div>
        </div>
        <div className={styles.funfact}>
            <button onClick={changeFunfactIdx}>{t('funfact')}</button>
            <p>{i18n.language == 'en' ? funFacts[funfactIdx] : funFacts_ch[funfactIdx]}</p>
        </div>
    </section >
}
