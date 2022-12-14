import { ReactNode } from 'react'

import { ButtonContainer } from "../Style/Styles"

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
    disabled?: boolean;
}

export const Button = ({ onClick, disabled, children }: ButtonProps) => {
    return (
        <ButtonContainer onClick={onClick} disabled={disabled}>
            {children}
        </ButtonContainer>
    )
}