import React from "react";
import { faker } from '@faker-js/faker';

const Name = () => {
    const fakerLastName = faker.name.lastName();
    const fakerFirstName = faker.name.firstName();

    return(
        <span>{fakerLastName} {fakerFirstName}</span>
    )
}

export default Name;