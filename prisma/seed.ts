import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    //Création des extractions de bases
    await prisma.extractions.create({
        data: {
            title: 'Dsn',
            description: 'Extraction DSN',
            fileName: 'DSN.xlsx',
            software: 'Tout les outils',
            sheet: {
                create: {
                    name: 'Individu',
                    color: 'FFC0000',
                    column: {
                        create: [
                            {
                                bloc: 'Individu',
                                key: 'numSS',
                                header: 'Numéro SS',
                                width: 10
                            },
                            {
                                bloc: 'Individu',
                                key: 'lastname',
                                header: 'Nom',
                                width: 10
                            },
                            {
                                bloc: 'Individu',
                                key: 'firstname',
                                header: 'Prénom',
                                width: 10
                            },
                        ]
                    }

                }
            }
        }
    })
    //Création des champs DSN

    await prisma.dsnBlocs.create({
        data: {
            name: 'Individu',
            dsnFields: {
                create: [
                    {
                        field: 'numSS',
                        name: `Numéro d'inscription au répertoire`,
                        structure: 'S21.G00.30.001'
                    },
                    {
                        field: 'lastname',
                        name: `Nom de famille`,
                        structure: 'S21.G00.30.002'
                    },
                    {
                        field: 'surname',
                        name: `Nom d'usage`,
                        structure: 'S21.G00.30.003'
                    },
                    {
                        field: 'firstname',
                        name: `Prénoms`,
                        structure: 'S21.G00.30.004'
                    },
                    {
                        field: 'sex',
                        name: `Sexe`,
                        structure: 'S21.G00.30.005'
                    },
                    {
                        field: 'birthday',
                        name: `Date de naissance`,
                        structure: 'S21.G00.30.006'
                    },
                    {
                        field: 'placeOfBith',
                        name: `Lieu de naissance`,
                        structure: 'S21.G00.30.007'
                    },
                    {
                        field: 'address1',
                        name: `Numéro, extension, nature et libellé de la voie`,
                        structure: 'S21.G00.30.008'
                    },
                    {
                        field: 'codeZip',
                        name: `Code postal`,
                        structure: 'S21.G00.30.009'
                    },
                    {
                        field: 'city',
                        name: `Localité`,
                        structure: 'S21.G00.30.010'
                    },
                    {
                        field: 'country',
                        name: `Code pays`,
                        structure: 'S21.G00.30.011'
                    },
                    {
                        field: 'codeZipBith',
                        name: `Code département de naissance`,
                        structure: 'S21.G00.30.014'
                    },
                    {
                        field: 'countryBirth',
                        name: `Code pays de naissance`,
                        structure: 'S21.G00.30.015'
                    },
                    {
                        field: 'address2',
                        name: `Complément de la localisation de la construction`,
                        structure: 'S21.G00.30.016'
                    },
                    {
                        field: 'address3',
                        name: `Service de distribution, complément de localisation de la voie`,
                        structure: 'S21.G00.30.017'
                    },
                    {
                        field: 'email',
                        name: `Adresse mél`,
                        structure: 'S21.G00.30.018'
                    },
                    {
                        field: 'employeeId',
                        name: `matricule`,
                        structure: 'S21.G00.30.019'
                    },
                    {
                        field: 'ntt',
                        name: `ntt`,
                        structure: 'S21.G00.30.020'
                    },
                    {
                        field: 'graduate',
                        name: `niveau`,
                        structure: 'S21.G00.30.024'
                    },
                    {
                        field: 'studies',
                        name: `Niveau de diplôme préparé par l'individu`,
                        structure: 'S21.G00.30.025'
                    }
                ]
            }
        }

    })

}

main()
    .then(async () => {
        await prisma.$disconnect()

    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)

    })