import React, {Component} from 'react'
import s from './style.module.scss'
import cat from '../images/cat.png'
import card from '../images/card.svg'
import ReactSVG from 'react-svg'

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
            },
            state: {
                hovered
            },
            handleMouseEnter,
            handleMouseLeave,
            handleSelect
        } = this
        return (
            <div className={!active ? s.disabled : selected ? s.selected : s.enable}>
                <div
                    className={selected && hovered ? s.selected_hover : hovered ? s.enable_hover : s.enable}
                    onClick={handleSelect}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <div>
                        {/*<div className={s.background}>*/}
                            {/*<svg     xmlns="http://www.w3.org/2000/svg">*/}
                                {/*<path width={'100%'} height={'100%'} vectorEffect={'non-scaling-stroke'}*/}
                                      {/*d="M2,43.5046174 L2,468 C2,473.522847 6.4771525,478 12,478 L308,478 C313.522847,478 318,473.522847 318,468 L318,12 C318,6.4771525 313.522847,2 308.001698,1.99999928 L43.2799237,2.2246937 L2,43.5046174 Z"/>*/}
                            {/*</svg>*/}
                        {/*</div>*/}
                        {/*<img src={card} className={s.background}/>*/}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={'32rem'} height={'48rem'}>
                            <defs>
                                <clipPath id="cp">
                                    <polygon points="45,0 320,0 320,480 0,480 0,48" />
                                </clipPath>
                            </defs>
                            <g strokeWidth={4}>
                                <rect x={2} y={2} rx={14} clipPath="url(#cp)" className={s.background}/>
                                <line x1={2} y1={48} x2={45} y2={2} />
                            </g>
                        </svg>
                        <div className={s.teaser}>{teaser}</div>
                        <div className={s.teaser_second}>Котэ не одобряет?</div>
                        <div className={s.title}>{title}</div>
                        <div className={s.taste}>{taste}</div>
                        <div className={s.specifications}>
                            <div className={s.specification}>{portions}</div>
                            <div className={s.specification}>{mouse_amount}</div>
                        </div>
                        <img src={cat} className={s.cover} alt={'cat'}/>
                        <div className={s.circle}>
                            <div className={s.first_line}>{weight}</div>
                            <div className={s.second_line}>кг</div>
                        </div>
                    </div>
                </div>
                <div className={s.descriptionName}>
                </div>
            </div>
        )
    }

    //For hover after mouse leave
    handleMouseEnter = () => {
        console.log('enter');
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