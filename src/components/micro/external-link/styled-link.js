import styled from "styled-components";

import { getThemeProperty } from '../../../assets/utils/styled';

export default styled.a`
display: flex;
align-items: center;
gap: .35rem;

&:hover {
    color: ${getThemeProperty("blue200")};
}
`;
