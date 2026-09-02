import ListGroup from 'react-bootstrap/ListGroup';

interface ListProps {
    title?: string;
    items: string[];
}

function InstructionList({ title, items }: ListProps) {
    return (
        <ListGroup>
            {title && <ListGroup.Item className="fw-bold" key='0'>
                {title}
            </ListGroup.Item>}
            {items.map((item, index) => (
                <ListGroup.Item key={index}>
                    {item}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default InstructionList;