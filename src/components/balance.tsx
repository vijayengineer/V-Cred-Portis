export interface Props {
    amount: number;
    symbol: string;
}

function Balance(props: Props) {
    return (
        <div>
            <div>{props.symbol} Balance</div>
            <p>{props.amount}</p>
        </div>
    );
}

export default Balance;