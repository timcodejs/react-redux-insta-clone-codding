import React from "react";
import { faker } from '@faker-js/faker';

const Word = () => {
    const fakerWord = faker.lorem.word();

    return(
        <span>{fakerWord}</span>
    )
}

export default Word;