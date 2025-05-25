import { faker } from '@faker-js/faker';

export default{
    userFirst: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        service: 'A Service',
        accountPurpose: 'Business',
        withdrawOptions: ['Cash'],
        message: faker.lorem.lines(),
    },
    userSecond: {
        name: 'Ben',
        email: 'ben_Test@tester.com',
        service: 'B Service',
        accountPurpose: 'Personal',
        withdrawOptions: ['Card'],
        message: 'test text message !@#$%^&*() from Ben',
    },
    userThird: {
        name: 'Ivan',
        email: 'ivanTest@tester.com',
        service: 'C Service',
        accountPurpose: 'Business',
        withdrawOptions: ['Cryptocurrency'],
        message: 'test text message from Ivan 12345678990',
    },
    userFourth: {
        name: 'Vasiliy',
        email: 'vasiliyTest@tester.com',
        service: 'D Service',
        accountPurpose: 'Business',
        withdrawOptions: ['Cash', 'Card', 'Cryptocurrency'],
        message: 'test text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text messagetest text message',
    }     
}