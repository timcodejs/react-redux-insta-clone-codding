import React from "react";
import styled from "styled-components";
import { faker } from '@faker-js/faker';

const Avatar = () => {
    const randomAvatar = faker.image.avatar();

    return(
        <StyledAvatar src={randomAvatar} alt="avatar" />
    )
}

export default Avatar;

const StyledAvatar = styled.img`
    width: 100%;
    border-radius: 50%;
`;