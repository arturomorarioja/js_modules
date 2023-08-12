'use strict';

import { persons } from './personsInfo.mjs';
import { formatDate, formatMoney } from './utils.mjs';

/**
 * Formats person information
 * @param {*} a person object
 * @returns An <article> with formatted information about the person
 */
const formatPerson = (person) => {
    const personArticle = document.createElement('article');

    const personName = document.createElement('div');
    personName.classList.add('name');
    personName.innerText = person.firstName + ' ' + person.lastName;

    const personBirthDate = document.createElement('div');
    personBirthDate.classList.add('date');
    personBirthDate.innerText = formatDate(person.birthDate);

    const personSalary = document.createElement('div');
    personSalary.classList.add('salary');
    personSalary.innerText = formatMoney(person.salary);

    personArticle.appendChild(personName);
    personArticle.appendChild(personBirthDate);
    personArticle.appendChild(personSalary);

    return personArticle;
}

/**
 * Generates person information
 * @returns a <section> with information about persons
 */
export const personsList = () => {
    const personsSection = document.createElement('section');

    persons.forEach((person) => {
        personsSection.appendChild(formatPerson(person));
    });
    return personsSection;
}