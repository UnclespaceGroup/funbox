import React, {Component} from 'react';
import s from './style.module.scss'
import _ from 'lodash'
import Card from "../components/Card";

class Main extends Component {
    render() {
        const {
            props: {
                items,
                SetActive
            }
        } = this
        return (
            <div className={s.container}>
                <div>
                    <h2 className={s.title}>Ты сегодня покормил кота?</h2>
                    <div className={s.items}>
                            {_.map(items, (item, key) =>
                                <Card key={key} {...{...item, SetActive}}/>)}

                    </div>
                </div>
            </div>
        )
    }

}

export default Main