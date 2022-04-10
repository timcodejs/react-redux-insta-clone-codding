import React from "react";
import { faker } from '@faker-js/faker';

const Name = () => {
    const fakerLastName = faker.name.lastName();

    return(
        <span>{fakerLastName}</span>
    )
}

export default Name;