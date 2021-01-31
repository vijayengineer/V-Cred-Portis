export interface Props {
    address: string;
}

function Address(props: Props) {
    return (
        <div>
            <div>Address</div>
            <p>{props.address}</p>
        </div>
    );
}

export default Address;