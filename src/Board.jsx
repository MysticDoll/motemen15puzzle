import React from 'react';
import { white, motemen } from './motemen'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            motemenArray: this.props.motemenRandomized
        };
    }

    sliceMotemen() {
        return [
            this.state.motemenArray.slice(0, 4),
            this.state.motemenArray.slice(4, 8),
            this.state.motemenArray.slice(8, 12),
            this.state.motemenArray.slice(12, 16),
        ];
    }

    swap(n) {
        const w = this.whiteIndex();
        if (!((w % 4 === 3 && n - w === 1) || (w % 4 === 0 && w - n === 1))) {
            const sub = Math.abs(w - n);
            if (sub === 1 || sub === 4) {
                const motemenArray = this.state.motemenArray.slice();
                motemenArray[w] = this.state.motemenArray[n];
                motemenArray[n] = this.state.motemenArray[w];
                this.setState({
                    motemenArray
                });

                if(JSON.stringify(motemen) === JSON.stringify(motemenArray)) {
                    alert('You know motemen.');
                }
            }
        }
    }

    whiteIndex() {
        return this.state.motemenArray.findIndex(c => c === white)
    }

    render() {
        return (
            this.sliceMotemen().map((m, r) => {
                    return (
                        <p style={{ lineHeight: "0px", margin: "0px" }} key={r}>
                            {
                                m.map((color, index)=> {
                                    const style = {
                                        background: `#${color}`,
                                        content: " ",
                                        display: "inline-block"
                                    };
                                    const onClick = () => this.swap(index + r * 4);
                                    return (
                                        <span className={"motemen-panel"} key={color} style={style} onClick={onClick}/>
                                    )
                                })
                            }
                        </p>
                    )
            })
        )
        
    }
}