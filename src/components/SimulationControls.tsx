import Button from 'react-bootstrap/Button';

interface SimulationControlsProps {
    onStep: () => void;
    onReset: () => void;
}

function SimulationControls({ onStep, onReset }: SimulationControlsProps) {
    return (
        <div className="inline-container">
            <Button onClick={onStep}>
                Step
            </Button>
            <Button onClick={onReset}>
                Reset
            </Button>
        </div>
    );
}

export default SimulationControls;