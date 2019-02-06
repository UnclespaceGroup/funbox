import React, {Component} from 'react'
import classNames from 'classnames/bind';
import s from './style.module.scss'
import cat from '../images/funbox_logo.png'


let cn = classNames.bind(s)

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
                specification_disabled,
                description_disabled,
                description_enable,

            },
            state: {
                hovered
            },
            handleMouseEnter,
            handleMouseLeave,
            handleSelect
        } = this
        const cardWay = cn({
            'enable_hover' : active && !selected && hovered,
            'selected': active && selected && !hovered,
            'selected_hover': active && selected && hovered,
            'disabled': !active,
            'enable' : active && !selected && !hovered,
    })
        return (
            <div className={s.wrapper}>
                <div
                    className={cardWay}
                    onClick={handleSelect}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <div>
                        <div className={s.teaser}>{teaser}</div>
                        <div className={s.teaser_second}>Котэ не одобряет?</div>
                        <div className={s.title}>{title}</div>
                        <div className={s.taste}>{taste}</div>
                        <div className={s.specifications}>
                            <div className={s.specification}>{portions}</div>
                            <div className={s.specification}>{mouse_amount}</div>
                            <div className={s.specification}>{!active ? specification_disabled : ''}</div>
                        </div>
                        <img src={cat} className={s.cover} alt={'cat'}/>
                        <div className={s.circle}>
                            <div className={s.first_line}>{weight}</div>
                            <div className={s.second_line}>кг</div>
                        </div>
                    </div>
                </div>
                <div
                    onClick={handleSelect}
                    className={s.description}>{!active? description_disabled : selected ? description_taste : description_enable}</div>
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