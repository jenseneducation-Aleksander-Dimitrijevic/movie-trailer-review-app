import styled from 'styled-components';
import { ColorsGlobal as color } from "../../styles/Colors";
import Arrow from '../../assets/svg/arrow-down-mint.svg';

export const FaqList = styled.div`
width:100%;
`
export const FaqContainer = styled.div`
.container{
    margin-top:118px;
}
display:flex;
flex-direction:column;
width:100%;
padding: 5em 1em;
h1{
    padding:0 1em;
    color:${color.white};
    text-transform:uppercase;
}

.faqs {
	width: 100%;
    margin: 0 auto;
	padding: 1em;
}

.faqs .faq {
    cursor:pointer;
	margin: 1em .5em;
	padding: 1em;
	background-color: ${color.white};
	border-radius: 8px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.faqs .faq .faq-question {
	position: relative;
	font-size: 20px;
	padding-right: 80px;

	transition: all 0.4s ease;
}

.faqs .faq .faq-question::after {
	content: '';
	position: absolute;
	top: 50%;
	right: 0px;
	transform: translateY(-50%);
	width: 30px;
	height: 30px;
    color:#000;

	background-image:url(${Arrow});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;

	transition: all 0.4s ease-out;
}

.faqs .faq .faq-answer {
	opacity: 0;
	max-height: 0;
	overflow-y: hidden;
	transition: all 0.4s ease-out;
}

.faqs .faq.open .faq-question {
	margin-bottom: 1em;
}

.faqs .faq.open .faq-question::after {
	transform: translateY(-50%) rotate(180deg);
}

.faqs .faq.open .faq-answer {
	max-height: 1000px;
	opacity: 1;
}
`