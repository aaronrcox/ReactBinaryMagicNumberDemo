import React from 'react'; 

export default function MagicNumberCard(props) {

    const min = 0;
    const max = props.max;
    const numbers = [];
    const pow = props.pow;
    const cols = props.cols;

    for(let i=min; i<=max; i++){
        if ((i & pow) === pow) {
            numbers.push(i);
        }
    }

    return (<div style={{width: '100%', border: '1px solid black'}}>

        {numbers.map((num, index) => <span key={'n-'+num+'-p-'+pow}>
            { index > 0 && index % cols === 0 && <br />}
            <span style={{display: 'inline-block', padding: 10, width: 50, heigh: 50, border: '1px solid black'}}>
                {num}
            </span>
            </span>
        )}

    </div>);
}