import React, {Component} from 'react'
import s from './style.module.scss'
import cat from '../images/funbox_logo.png'

class Card extends Component {
    state = {
        hovered: false
    }

    render() {
        const {
            props: {
                teaser,
                title,
                taste,
                selected,
                active,
                portions,
                weight,
                mouse_amount,
                description_taste,
                specification_disabled
            },
            state: {
                hovered
            },
            handleMouseEnter,
            handleMouseLeave,
            handleSelect
        } = this
        return (
            <div className={s.wrapper}>
            <div className={!active ? s.disabled : selected ? s.selected : s.enable}>
                <div
                    className={selected && hovered ? s.selected_hover : hovered ? s.enable_hover : s.enable}
                    onClick={handleSelect}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <div >
                        <div className={s.teaser}>{teaser}</div>
                        <div className={s.teaser_second}>Котэ не одобряет?</div>
                        <div className={s.title}>{title}</div>
                        <div className={s.taste}>{taste}</div>
                        <div className={s.specifications}>
                            <div className={s.specification}>{portions}</div>
                            <div className={s.specification}>{mouse_amount}</div>
                            <div className={s.specification}>{!active? specification_disabled : ''}</div>
                        </div>
                        <img src={cat} className={s.cover} alt={'cat'}/>
                        <div className={s.circle}>
                            <div className={s.first_line}>{weight}</div>
                            <div className={s.second_line}>кг</div>

                        </div>
                    </div>
                </div>

            </div>
                {selected? <div className={s.description}>{description_taste}</div> :
                    !active? <div className={s.desc_disabled}>Печалька, {taste} закончился.</div> :
                    <div className={s.description}>Чего сидишь? Порадуй котэ,<span> <span onClick={handleSelect}>купи</span>.</span></div>}
            </div>
        )
    }

    //For hover after mouse leave
    handleMouseEnter = () => {
        this.setState({
            hovered: true
        })
    }
    handleMouseLeave = () => {
        this.setState({
            hovered: false
        })
    }
    //Change card status
    handleSelect = () => {
        const {SetActive, id} = this.props
        SetActive(id)
        this.setState({
            hovered: false
        })
    }


}

export default Card