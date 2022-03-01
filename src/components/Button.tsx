import styled from 'styled-components';

type Props = {
	text: string;
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ text, handleClick }: Props) {
	return (
		<ButtonStyled type="button" onClick={handleClick}>
			{text}
		</ButtonStyled>
	);
}

export default Button;

const ButtonStyled = styled.button`
	padding: 1rem 1.5rem;
	border: none;
	background-color: #313391;
	color: #dbdbdb;
	border-radius: 4px;
	cursor: pointer;

	&:not(:last-of-type) {
		margin-right: 1rem;
	}
`;
