import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const labels = [
    {
        name: 'food',
        description: '',
        
    },
];

const types = [
    {
        id: 1,
        name: 'needs',
        percentage: 50,
        planId: 1,
        
    },
    {
        id: 2,
        name: 'wants',
        percentage: 30,
        planId: 1,
        
    },
    {
        id: 3,
        name: 'savings',
        percentage: 20,
        planId: 1,
        
    },
];

const categories = [
    {
        id: 1,
        name: 'Hey',
        userId: 1,
    },
    {
        id: 2,
        name: 'BBVA',
        userId: 1,
    },
    {
        id: 3,
        name: 'Cetes',
        userId: 1,
    },
    {
        id: 4,
        name: 'Mom',
        userId: 1,
    },
    {
        id: 5,
        name: 'CC',
        userId: 1,
    },
];

const expenses = [
    {
        name: 'Groceries',
        amount: 10000,
        categoryId: 2,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'School',
        amount: 400,
        categoryId: 2,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Mary`s Products',
        amount: 600,
        categoryId: 2,
        userId: 1,
        typeId: 2,
    },
    {
        name: 'Barber',
        amount: 400,
        categoryId: 2,
        userId: 1,
        typeId: 2,
    },
    {
        name: 'Car Wash',
        amount: 600,
        categoryId: 2,
        userId: 1,
        typeId: 2,
    },
    {
        name: 'Pets Health',
        amount: 1000,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Psycologist',
        amount: 800,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Medicine',
        amount: 1000,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Telcel',
        amount: 800,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'College Fund',
        amount: 1800,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Car Insurance',
        amount: 1500,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Brackets',
        amount: 500,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Water',
        amount: 150,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Health',
        amount: 2000,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Psiquiatrist',
        amount: 700,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Gas',
        amount: 300,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Electricity',
        amount: 600,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Car Service',
        amount: 500,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Christmas',
        amount: 600,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Dog Anti Fleas',
        amount: 300,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Dog Food',
        amount: 600,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Mary`s B day',
        amount: 400,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Kayla`s B day',
        amount: 300,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Dermatologist',
        amount: 1000,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Men Products',
        amount: 300,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Cat Anti Fleas',
        amount: 300,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Cat Food',
        amount: 250,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Car Parts',
        amount: 500,
        categoryId: 3,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Box',
        amount: 400,
        categoryId: 1,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Trainer',
        amount: 1200,
        categoryId: 1,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Internet',
        amount: 849,
        categoryId: 1,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Fuel',
        amount: 3000,
        categoryId: 1,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Dog Wet Food',
        amount: 1200,
        categoryId: 1,
        userId: 1,
        typeId: 1,
        isActive: false,
    },
    {
        name: 'Groceries',
        amount: 3000,
        categoryId: 1,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Sand',
        amount: 500,
        categoryId: 1,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Cat Wet Food',
        amount: 1200,
        categoryId: 1,
        userId: 1,
        typeId: 1,
    },
    {
        name: 'Nutriologist',
        amount: 300,
        categoryId: 1,
        userId: 1,
        typeId: 2,
        isActive: false,
    },
    {
        name: 'Restaurants',
        amount: 8000,
        categoryId: 1,
        userId: 1,
        typeId: 2,
    },
    {
        name: 'Funeral Expenses',
        amount: 400,
        categoryId: 4,
        userId: 1,
        typeId: 2,
    },
    {
        name: 'Cleaning',
        amount: 1400,
        categoryId: 4,
        userId: 1,
        typeId: 2,
    },
];

async function main() {
    await prisma.plan.create({
        data: {
            name: '50/30/20',
        },
    });


    const asyncFunction = async (key, item) => {
        await prisma[key].create(item);
    }

    const labelPromises = [];

    for (const item of labels) {
        const payload = {
            data: item,
        }
        labelPromises.push(asyncFunction('label', payload));
    }

    await Promise.all(labelPromises);

    const typePromises = [];

    for (const item of types) {
        const payload = {
            data: item,
        }
        typePromises.push(asyncFunction('type', payload));
    }

    await Promise.all(typePromises);

    const categoryPromises = [];

    for (const item of categories) {
        const payload = {
            data: item,
        }
        categoryPromises.push(asyncFunction('category', payload));
    }

    await Promise.all(categoryPromises);

    const expensePromises = [];

    for (const item of expenses) {
        const payload = {
            data: item,
        }
        expensePromises.push(asyncFunction('expense', payload));
    }

    await Promise.all(expensePromises);

}
main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})