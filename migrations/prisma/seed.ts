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
        amount: (10000 * 100),
        categoryId: 2,
        userId: 1,
        typeId: 1,
        savings: (0 * 100),
    },
    {
        name: 'Pets Health',
        amount: (1000 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 1,
        savings: (2500 * 100),
    },
    {
        name: 'Psycologist',
        amount: (800 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (400 * 100),
    },
    {
        name: 'Medicine',
        amount: (1260 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 1,
        savings: (630 * 100),
    },
    {
        name: 'Telcel',
        amount: (800 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (500 * 100),
    },
    {
        name: 'College Fund',
        amount: (1800 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 1,
        savings: (7200 * 100),
    },
    {
        name: 'Car Insurance',
        amount: (1500 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 1,
        savings: (3750 * 100),
    },
    {
        name: 'Brackets',
        amount: (500 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (0 * 100),
    },
    {
        name: 'Box',
        amount: (400 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (200 * 100),
    },
    {
        name: 'Trainer',
        amount: (1200 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (600 * 100),
    },
    {
        name: 'Swimming',
        amount: (450 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (450 * 100),
    },
    {
        name: 'Internet',
        amount: (849 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (424.5 * 100),
    },
    {
        name: 'Fuel',
        amount: (3000 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (1500 * 100),
    },
    {
        name: 'School',
        amount: (400 * 100),
        categoryId: 2,
        userId: 1,
        typeId: 1,
        savings: (0 * 100),
    },
    {
        name: 'Water',
        amount: (150 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 1,
        savings: (675 * 100),
    },
    {
        name: 'Health',
        amount: (2000 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 1,
        savings: (1000 * 100),
    },
    {
        name: 'Psiquiatrist',
        amount: (700 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 1,
        period: 3,
        savings: (933.33 * 100),
    },
    {
        name: 'Gas',
        amount: (300 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 1,
        savings: (900 * 100),
    },
    {
        name: 'Electricity',
        amount: (600 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 1,
        savings: (777 * 100),
    },
    {
        name: 'Car Service',
        amount: (500 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 1,
        savings: (3750 * 100),
    },
    {
        name: 'Dog Wet Food',
        amount: (700 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (1400 * 100),
    },
    {
        name: 'Sams',
        amount: (1000 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (500 * 100),
    },
    {
        name: 'Cat Sand',
        amount: (500 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (0 * 100),
    },
    {
        name: 'Cat Wet Food',
        amount: (600 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (0 * 100),
    },
    {
        name: 'Cat Food',
        amount: (300 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 1,
        savings: (600 * 100),
    },
    {
        name: 'Funeral',
        amount: (400 * 100),
        categoryId: 4,
        userId: 1,
        typeId: 2,
        savings: (0 * 100),
    },
    {
        name: 'Mary`s Products',
        amount: (600 * 100),
        categoryId: 2,
        userId: 1,
        typeId: 2,
        savings: (0 * 100),
    },
    {
        name: 'Barbershop',
        amount: (400 * 100),
        categoryId: 2,
        userId: 1,
        typeId: 2,
        savings: (0 * 100),
    },
    {
        name: 'Christmas',
        amount: (600 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (3900 * 100),
    },
    {
        name: 'Dog Anti Fleas',
        amount: (450 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (300 * 100),
    },
    {
        name: 'Dog Food',
        amount: (1450 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (1087.5 * 100),
    },
    {
        name: 'Dog Deworming',
        amount: (250 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (375 * 100),
    },
    {
        name: 'Dog Vaccines',
        amount: (225 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (337.5 * 100),
    },
    {
        name: 'Mary`s B day',
        amount: (400 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (1400 * 100),
    },
    {
        name: 'Kayla`s B day',
        amount: (200 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (400 * 100),
    },
    {
        name: 'Ceiling Cleaning',
        amount: (1650 * 100),
        categoryId: 4,
        userId: 1,
        typeId: 2,
        savings: (0 * 100),
    },
    {
        name: 'Car Wash',
        amount: (600 * 100),
        categoryId: 2,
        userId: 1,
        typeId: 2,
        savings: (0 * 100),
    },
    {
        name: 'Dermatologist',
        amount: (1000 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (2500 * 100),
    },
    {
        name: 'Men Products',
        amount: (735 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (0 * 100),
    },
    {
        name: 'Cat Anti Fleas',
        amount: (300 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (750 * 100),
    },
    {
        name: 'Cat Food',
        amount: (250 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (625 * 100),
    },
    {
        name: 'Cat Deworming',
        amount: (284 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (852 * 100),
    },
    {
        name: 'Cat Vaccines',
        amount: (250 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (625 * 100),
    },
    {
        name: 'Car Parts',
        amount: (500 * 100),
        categoryId: 3,
        userId: 1,
        typeId: 2,
        savings: (625 * 100),
    },
    {
        name: 'Restaurants',
        amount: (8000 * 100),
        categoryId: 1,
        userId: 1,
        typeId: 2,
        savings: (0 * 100),
    }
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