import ModalWrapper from './ModalWrapper';
import { DepositContainer } from './DepositContainer';

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function ({ open, setOpen }: Props) {
    return (
        <ModalWrapper open={open} setOpen={setOpen}>
            <DepositContainer />
        </ModalWrapper>
    );
};

