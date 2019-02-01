import * as types from '../constants/index'
import React from'react'

export const initialState = {
    items: [
        {
            id: 0,
            teaser: 'Сказочное заморское яство',
            title: 'Нямушка',
            taste: 'с фуа-гра',
            description_taste: 'Печень утки разварная с артишоками.',
            portions: <span><b>10</b> порций</span>,
            mouse_amount: <span>мышь в падарок</span>,
            specification_second: '',
            weight: '0,5',
            active: true,
            selected: false
        },
        {
            id: 1,
            teaser: 'Сказочное заморское яство',
            title: 'Нямушка',
            taste: 'с рыбой',
            description_taste: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            portions: <span><b>40</b> порций</span>,
            mouse_amount: <span><b>2</b> мыши в подарок</span>,
            specification_second: '',
            spec: '2',
            weight: '2',
            active: true,
            selected: true
        },
        {
            id: 2,
            teaser: 'Сказочное заморское яство',
            title: 'Нямушка',
            taste: 'с курой',
            description_taste: 'Филе из цыплят с трюфелями в бульоне.',
            portions: <span><b>100</b> порций</span>,
            mouse_amount: <span><b>5</b> мышей в подарок</span>,
            specification_second: 'заказчик доволен',
            spec: '5',
            weight: '5',
            active: false,
            selected: false
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ACTIVE :
            console.log(action);
            const id = action.payload
            const value = state.items[id].selected
            return {
                ...state,
                items: {
                    ...state.items,
                    [id]: {
                        ...state.items[id],
                        selected: !value
                    }
                }
            }
        default: return state
    }

}

