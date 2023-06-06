import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    //Création de l'extraction standard
    await prisma.extractions.create({
        data: {
            title: 'Dsn',
            description: 'Extraction DSN',
            fileName: 'DSN.xlsx',
            software: 'Tous les outils',
            consolidate: true,
            sheet: {
                create: [
                    {
                        name: 'Individu',
                        color: 'FFC0000',
                        type: 'Individu',
                        column: {
                            create: [
                                {
                                    bloc: 'Individu',
                                    key: 'numSS',
                                    dsnKey: 'numSS',
                                    header: 'Numéro SS',
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'lastname',
                                    dsnKey: 'lastname',
                                    header: 'Nom',
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'firstname',
                                    dsnKey: 'firstname',
                                    header: 'Prénom',
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'surname',
                                    dsnKey: 'surname',
                                    header: `Nom d'usage`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'sex',
                                    dsnKey: 'sex',
                                    header: `Sexe`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'birthday',
                                    dsnKey: 'birthday',
                                    header: `Date de naissance`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'placeOfBith',
                                    dsnKey: 'placeOfBith',
                                    header: `Lieu de naissance`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'address1',
                                    dsnKey: 'address1',
                                    header: `Numéro, extension, nature et libellé de la voie`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'codeZip',
                                    dsnKey: 'codeZip',
                                    header: `Code postal`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'city',
                                    dsnKey: 'city',
                                    header: `Localité`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'country',
                                    dsnKey: 'country',
                                    header: `Code pays`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'codeZipBith',
                                    dsnKey: 'codeZipBith',
                                    header: `Code département de naissance`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'countryBirth',
                                    dsnKey: 'countryBirth',
                                    header: `Code pays de naissance`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'address2',
                                    dsnKey: 'address2',
                                    header: `Complément de la localisation de la construction`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'address3',
                                    dsnKey: 'address3',
                                    header: `Service de distribution, complément de localisation de la voie`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'email',
                                    dsnKey: 'email',
                                    header: `Adresse mél`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'employeeId',
                                    dsnKey: 'employeeId',
                                    header: `matricule`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'ntt',
                                    dsnKey: 'ntt',
                                    header: `NTT`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'graduate',
                                    dsnKey: 'graduate',
                                    header: `niveau`,
                                    width: 10
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'studies',
                                    dsnKey: 'studies',
                                    header: `Niveau de diplôme préparé par l'individu`,
                                    width: 10
                                }
                            ]
                        }
                    },//fin individu
                    {
                        name: 'Contact',
                        color: 'FFC0000',
                        type: 'Contact',
                        column: {
                            create: [
                                {
                                    bloc: 'Contact',
                                    key: 'siren',
                                    dsnKey: 'siren',
                                    header: 'Siren de la société',
                                    width: 10
                                },
                                {
                                    bloc: 'Contact',
                                    key: 'contactName',
                                    dsnKey: 'contactName',
                                    header: 'Nom et prénom du contact',
                                    width: 10
                                },
                                {
                                    bloc: 'Contact',
                                    key: 'contactPhone',
                                    dsnKey: 'contactPhone',
                                    header: 'Adresse téléphonique',
                                    width: 10
                                },
                                {
                                    bloc: 'Contact',
                                    key: 'contactEmail',
                                    dsnKey: 'contactEmail',
                                    header: 'Adresse mél du contact',
                                    width: 10
                                },
                                {
                                    bloc: 'Contact',
                                    key: 'contactType',
                                    dsnKey: 'contactType',
                                    header: 'Type',
                                    width: 10
                                },

                            ]
                        }
                    },//Fin contact
                    {
                        name: 'Contributions aggregées',
                        color: 'FFC0000',
                        type: 'AggregateContribution',
                        column: {
                            create: [
                                {
                                    bloc: 'AggregateContribution',
                                    key: 'siret',
                                    dsnKey: 'siret',
                                    header: `Siret de l'établissements`,
                                    width: 10
                                },
                                {
                                    bloc: 'AggregateContribution',
                                    key: 'contributionId',
                                    dsnKey: 'contributionId',
                                    header: 'Code de cotisation',
                                    width: 10
                                },
                                {
                                    bloc: 'AggregateContribution',
                                    key: 'contributionQualifier',
                                    dsnKey: 'contributionQualifier',
                                    header: `Qualifiant d'assiette`,
                                    width: 10
                                },
                                {
                                    bloc: 'AggregateContribution',
                                    key: 'contriburionRate',
                                    dsnKey: 'contriburionRate',
                                    header: `Taux de cotisation`,
                                    width: 10
                                },
                                {
                                    bloc: 'AggregateContribution',
                                    key: 'baseAmount',
                                    dsnKey: 'baseAmount',
                                    header: `Montant d'assiette`,
                                    width: 10
                                },
                                {
                                    bloc: 'AggregateContribution',
                                    key: 'contributionAmount',
                                    dsnKey: 'contributionAmount',
                                    header: `Montant de cotisation`,
                                    width: 10
                                },
                                {
                                    bloc: 'AggregateContribution',
                                    key: 'contributionInsee',
                                    dsnKey: 'contributionInsee',
                                    header: `Code INSEE commune`,
                                    width: 10
                                },
                            ]
                        }
                    },//Fin des contributions agregée
                    {
                        name: 'Contrat travail',
                        color: 'FFC0000',
                        type: 'Contract',
                        column: {
                            create: [
                                {
                                    bloc: 'Contract',
                                    key: 'siren',
                                    dsnKey: 'siren',
                                    header: 'Siren de la société',
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'employeeId',
                                    dsnKey: 'employeeId',
                                    header: 'matricule du salarié',
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'startDate',
                                    dsnKey: 'startDate',
                                    header: 'Date de début du contrat',
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'status',
                                    dsnKey: 'status',
                                    header: 'Statut du salarié (conventionnel)',
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'retirement',
                                    dsnKey: 'retirement',
                                    header: 'Code statut catégoriel Retraite Complémentaire obligatoire',
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'pcs',
                                    dsnKey: 'pcs',
                                    header: 'Code profession et catégorie socioprofessionnelle (PCS-ESE)',
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'pcsBis',
                                    dsnKey: 'pcsBis',
                                    header: 'Code complément PCS-ESE (pour la fonction publique : référentiels NEH, NET et grade de la NNE)',
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'employmentLabel',
                                    dsnKey: 'employmentLabel',
                                    header: `Libellé de l'emploi`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'contract',
                                    dsnKey: 'contract',
                                    header: `Nature du contrat`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'publicDispPolitic',
                                    dsnKey: 'publicDispPolitic',
                                    header: `Dispositif de politique publique et conventionnel`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'contractId',
                                    dsnKey: 'contractId',
                                    header: `Numéro du contrat`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'contractEndDate',
                                    dsnKey: 'contractEndDate',
                                    header: `Date de fin prévisionnelle du contrat`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'DNACodeUnitTime',
                                    dsnKey: 'DNACodeUnitTime',
                                    header: `Unité de mesure de la quotité de travail`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'DSNWorkQuotaEstablishment',
                                    dsnKey: 'DSNWorkQuotaEstablishment',
                                    header: `Quotité de travail de référence de l'entreprise pour la catégorie de salarié`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'DSNWorkQuotaWorkContract',
                                    dsnKey: 'DSNWorkQuotaWorkContract',
                                    header: `Quotité de travail du contrat`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'workTime',
                                    dsnKey: 'workTime',
                                    header: `Modalité d'exercice du temps de travail`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'ss',
                                    dsnKey: 'ss',
                                    header: `Complément de base au régime obligatoire`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'idcc',
                                    dsnKey: 'idcc',
                                    header: `Code convention collective applicable`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'mal',
                                    dsnKey: 'mal',
                                    header: `Code régime de base risque maladie`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'estabWorkPlace',
                                    dsnKey: 'estabWorkPlace',
                                    header: `Identifiant du lieu de travail`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'vieillesse',
                                    dsnKey: 'vieillesse',
                                    header: `Code régime de base risque vieillesse`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'pattern',
                                    dsnKey: 'pattern',
                                    header: `Motif de recours`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'vacation',
                                    dsnKey: 'vacation',
                                    header: `Code caisse professionnelle de congés payés`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'rateProfessionalFess',
                                    dsnKey: 'rateProfessionalFess',
                                    header: `Taux de déduction forfaitaire spécifique pour frais professionnels`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'foreigner',
                                    dsnKey: 'foreigner',
                                    header: `Travailleur à l'étranger au sens du code de la Sécurité Sociale`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'exclusionDsn',
                                    dsnKey: 'exclusionDsn',
                                    header: `Motif d'exclusion DSN`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'statusEmployment',
                                    dsnKey: 'statusEmployment',
                                    header: `Statut d'emploi du salarié`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'unemployment',
                                    dsnKey: 'unemployment',
                                    header: `Code affectation Assurance chômage`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'idPublicEmployer',
                                    dsnKey: 'idPublicEmployer',
                                    header: `Numéro interne employeur public`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'methodUnemployment',
                                    dsnKey: 'methodUnemployment',
                                    header: `Type de gestion de l’Assurance chômage`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'joiningDate',
                                    dsnKey: 'joiningDate',
                                    header: `Date d'adhésion`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'denunciationDate',
                                    dsnKey: 'denunciationDate',
                                    header: `Date de dénonciation`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'dateManagementAgreement',
                                    dsnKey: 'dateManagementAgreement',
                                    header: `Date d’effet de la convention de gestion`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'idAgreement',
                                    dsnKey: 'idAgreement',
                                    header: `Numéro de convention de gestion`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'healthRiskDelegate',
                                    dsnKey: 'healthRiskDelegate',
                                    header: `Code délégataire du risque maladie`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'multipleJobCode',
                                    dsnKey: 'multipleJobCode',
                                    header: `Code emplois multiples`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'multipleEmployerCode',
                                    dsnKey: 'multipleEmployerCode',
                                    header: `Code employeurs multiples`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'workAccidentRisk',
                                    dsnKey: 'workAccidentRisk',
                                    header: `Code régime de base risque accident du travail`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'idWorkAccidentRisk',
                                    dsnKey: 'idWorkAccidentRisk',
                                    header: `Code risque accident du travail`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'positionCollectiveAgreement',
                                    dsnKey: 'positionCollectiveAgreement',
                                    header: `Positionnement dans la convention collective`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'apecita',
                                    dsnKey: 'apecita',
                                    header: `Code statut catégoriel APECITA`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'rateAt',
                                    dsnKey: 'rateAt',
                                    header: `Taux de cotisation accident du travail`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'contributingFullTime',
                                    dsnKey: 'contributingFullTime',
                                    header: `Salarié à temps partiel cotisant à temps plein`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'tip',
                                    dsnKey: 'tip',
                                    header: `Rémunération au pourboire`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'useEstablishmentId',
                                    dsnKey: 'useEstablishmentId',
                                    header: `Identifiant de l’établissement utilisateur`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'livePerfomances',
                                    dsnKey: 'livePerfomances',
                                    header: `Numéro de label « Prestataire de services du spectacle vivant`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'licences',
                                    dsnKey: 'licences',
                                    header: `Numéro de licence entrepreneur spectacle`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'showId',
                                    dsnKey: 'showId',
                                    header: `Numéro objet spectacle`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'showrunner',
                                    dsnKey: 'showrunner',
                                    header: `Statut organisateur spectacle`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'fpPcs',
                                    dsnKey: 'fpPcs',
                                    header: `[FP] Code complément PCS-ESE pour la fonction publique d'Etat(emploi de la NNE)`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'typePosition',
                                    dsnKey: 'typePosition',
                                    header: `Nature du poste`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'fpQuotite',
                                    dsnKey: 'fpQuotite',
                                    header: `[FP] Quotité de travail de référence de l'entreprise pour la catégorie de salarié dans l’hypothèse d’un poste à temps complet`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'partTimeWork',
                                    dsnKey: 'partTimeWork',
                                    header: `Taux de travail à temps partiel`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'serviceCode',
                                    dsnKey: 'serviceCode',
                                    header: `Code catégorie de service`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'fpIndice',
                                    dsnKey: 'fpIndice',
                                    header: `[FP] Indice brut`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'fpIndiceMaj',
                                    dsnKey: 'fpIndiceMaj',
                                    header: `[FP] Indice majoré`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'NBI',
                                    dsnKey: 'NBI',
                                    header: `[FP] Nouvelle bonification indiciaire (NBI)`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'indiceOriginal',
                                    dsnKey: 'indiceOriginal',
                                    header: `[FP] Indice brut d'origine`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'article15',
                                    dsnKey: 'article15',
                                    header: `[FP] Indice brut de cotisation dans un emploi supérieur (article 15)`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'oldEstablishment',
                                    dsnKey: 'oldEstablishment',
                                    header: `[FP] Ancien employeur public`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'oldIndice',
                                    dsnKey: 'oldIndice',
                                    header: `[FP] Indice brut d’origine ancien salarié employeur public`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'SPP',
                                    dsnKey: 'SPP',
                                    header: `[FP] Indice brut d’origine sapeur-pompier professionnel (SPP)`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'contractual',
                                    dsnKey: 'contractual',
                                    header: `[FP] Maintien du traitement d'origine d'un contractuel titulaire`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'secondment',
                                    dsnKey: 'secondment',
                                    header: `[FP] Type de détachement`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'browsing',
                                    dsnKey: 'browsing',
                                    header: `Genre de navigation`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'activityDutyRate',
                                    dsnKey: 'activityDutyRate',
                                    header: `Taux de service actif`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'payLevel',
                                    dsnKey: 'payLevel',
                                    header: `Niveau de rémunération`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'echelon',
                                    dsnKey: 'echelon',
                                    header: `Echelon`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'coefficient',
                                    dsnKey: 'coefficient',
                                    header: `Coefficient`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'boeth',
                                    dsnKey: 'boeth',
                                    header: `Statut BOETH`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'addPublicPolicy',
                                    dsnKey: 'addPublicPolicy',
                                    header: `Complément de dispositif de politique publique`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'arrangement',
                                    dsnKey: 'arrangement',
                                    header: `Cas de mise à disposition externe d'un individu de l'établissement`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'finaly',
                                    dsnKey: 'finaly',
                                    header: `Catégorie de classement finale`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'navy',
                                    dsnKey: 'navy',
                                    header: `Identifiant du contrat d'engagement maritime`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'cnieg',
                                    dsnKey: 'cnieg',
                                    header: `Collège (CNIEG)`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'activityRate',
                                    dsnKey: 'activityRate',
                                    header: `Forme d'aménagement du temps de travail dans le cadre de l'activité partielle`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'grade',
                                    dsnKey: 'grade',
                                    header: `Grade`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'cti',
                                    dsnKey: 'cti',
                                    header: `[FP] Indice complément de traitement indiciaire (CTI)`,
                                    width: 10
                                },
                                {
                                    bloc: 'Contract',
                                    key: 'finess',
                                    dsnKey: 'finess',
                                    header: `FINESS géographique`,
                                    width: 10
                                }

                            ]
                        }
                    },
                    {
                        name: 'Mutuelle',
                        color: 'FFC0000',
                        type: 'Mutual',
                        column: {
                            create: [
                                {
                                    bloc: 'Mutual',
                                    key: 'employeeId',
                                    dsnKey: 'employeeId',
                                    header: `Matricule`,
                                    width: 10
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'option',
                                    dsnKey: 'option',
                                    header: `Code option retenue par le salarié`,
                                    width: 10
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'pop',
                                    dsnKey: 'pop',
                                    header: `Code population de rattachement`,
                                    width: 10
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'children',
                                    dsnKey: 'children',
                                    header: `Nombre d’enfants à charge`,
                                    width: 10
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'assign',
                                    dsnKey: 'assign',
                                    header: `Nombre d'adultes ayants- droit(conjoint, concubin, ...)`,
                                    width: 10
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'numberAssign',
                                    dsnKey: 'numberAssign',
                                    header: `Nombre d'ayants- droit`,
                                    width: 10
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'otherAssign',
                                    dsnKey: 'otherAssign',
                                    header: `Nombre d'ayants- droit autres(ascendants, collatéraux...)`,
                                    width: 10
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'idTechAffiliation',
                                    dsnKey: 'idTechAffiliation',
                                    header: `Date de début de l’affiliation`,
                                    width: 10
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'idTech',
                                    dsnKey: 'idTech',
                                    header: `Date de fin de l’affiliation`,
                                    width: 10
                                }
                            ]
                        }
                    },
                    {
                        name: 'Etablissement',
                        color: 'FFC0000',
                        type: 'Establishment',
                        column: {
                            create: [
                                {
                                    bloc: 'Establishment',
                                    key: 'nic',
                                    dsnKey: 'nic',
                                    header: `NI`,
                                    width: 10
                                },
                                {
                                    bloc: 'Establishment',
                                    key: 'apet',
                                    dsnKey: 'apet',
                                    header: `Code APET`,
                                    width: 10
                                },
                                {
                                    bloc: 'Establishment',
                                    key: 'adress1',
                                    dsnKey: 'adress1',
                                    header: `Numéro, extension, nature et libellé de la voie`,
                                    width: 10
                                },
                                {
                                    bloc: 'Establishment',
                                    key: 'codeZip',
                                    dsnKey: 'codeZip',
                                    header: `Code postal`,
                                    width: 10
                                },
                            ]
                        }
                    }
                ]
            }
        }
    })

    //Création de l'extraction numéro de contrat

    await prisma.extractions.create({
        data: {
            title: 'Controle des contrats',
            description: 'Extraction des contrats DSN',
            fileName: 'contrats.xlsx',
            software: '',
            consolidate: true,
            sheet: {
                create: [{
                    name: 'Contrats',
                    color: 'FFC0000',
                    type: 'Individu/Contract',
                    column: {
                        create: [
                            {
                                bloc: 'Society',
                                key: 'siren',
                                dsnKey: 'siren',
                                header: `siren`,
                                width: 10,
                            },
                            {
                                bloc: 'Individu',
                                key: 'matri',
                                dsnKey: 'employeeId',
                                header: `matri`,
                                width: 10,
                            },
                            {
                                bloc: 'Individu',
                                key: 'numSS',
                                dsnKey: 'numSS',
                                header: 'Numéro SS',
                                width: 10
                            },
                            {
                                bloc: 'Contract',
                                key: 'startDate',
                                dsnKey: 'startDate',
                                header: `Date début contrat`,
                                width: 10,
                            },
                            {
                                bloc: 'Contract',
                                key: 'contractId',
                                dsnKey: 'contractId',
                                header: `Numéro de contrat`,
                                width: 10,
                            },

                        ]
                    }

                }]
            }
        }
    })

    //Création de l'extraction HRU

    await prisma.extractions.create({
        data: {
            title: 'RDD Cegid Hr Ultimate',
            description: 'Extraction RDD Cegid Hr Ultimate',
            fileName: 'hru.xlsx',
            software: 'Cegid Hr Ultimate',
            consolidate: true,
            sheet: {
                create: [
                    {
                        name: 'Individu',
                        color: 'FFC0000',
                        type: 'Individu',
                        column: {
                            create: [
                                {
                                    bloc: 'Individu',
                                    key: 'matri',
                                    dsnKey: 'employeeId',
                                    header: `matri`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Hru',
                                    key: 'DVIND',
                                    dsnKey: 'DVIND',
                                    header: `DVIND`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Hru',
                                    key: 'LTITS',
                                    dsnKey: 'LTITS',
                                    header: `LTITS`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'surname',
                                    dsnKey: 'NMUSA',
                                    header: `LTITS`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'firstname',
                                    dsnKey: 'firstname',
                                    header: `LPNOM`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'CPNOM',
                                    dsnKey: 'CPNOM',
                                    header: `CPNOM`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'sex',
                                    dsnKey: 'sex',
                                    header: `CISEX`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'birthday',
                                    dsnKey: 'birthday',
                                    header: `DNAIS`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'placeOfBith',
                                    dsnKey: 'placeOfBith',
                                    header: `LNAIS`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'countryBirth',
                                    dsnKey: 'countryBirth',
                                    header: `PNAIS`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'countryBirth',
                                    dsnKey: 'countryBirth',
                                    header: `LNATI`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'nsecu',
                                    dsnKey: 'numSS',
                                    header: `NSECU`,
                                    width: 10,
                                    left: 13
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'csecu',
                                    dsnKey: 'numSS',
                                    header: `CSECU`,
                                    width: 10,
                                    right: 2
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'NBPER',
                                    dsnKey: 'NBPER',
                                    header: `NBPER`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'NBENF',
                                    dsnKey: 'NBENF',
                                    header: `NBENF`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'CSITF',
                                    dsnKey: 'CSITF',
                                    header: `CSITF`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'employeeId',
                                    dsnKey: 'employeeId',
                                    header: `CAMAT`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'CIBDG',
                                    dsnKey: 'CIBDG',
                                    header: `CIBDG`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'address1',
                                    dsnKey: 'address1',
                                    header: `LRUES`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'address2',
                                    dsnKey: 'address2',
                                    header: `LRUSS`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'AD1LV',
                                    dsnKey: 'AD1LV',
                                    header: `AD1LV`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'codeZip',
                                    dsnKey: 'codeZip',
                                    header: `CPOST`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'city',
                                    dsnKey: 'city',
                                    header: `LVILS`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'ADPY1',
                                    dsnKey: 'ADPY1',
                                    header: `ADPY1`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'AD1DE',
                                    dsnKey: 'AD1DE',
                                    header: `AD1DE`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'NTEL1',
                                    dsnKey: 'NTEL1',
                                    header: `NTEL1`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'NTEL2',
                                    dsnKey: 'NTEL2',
                                    header: `NTEL2`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'email',
                                    dsnKey: 'email',
                                    header: `ADMEL`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'MPAM1',
                                    dsnKey: 'MPAM1',
                                    header: `MPAM1`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'CBIC1',
                                    dsnKey: 'CBIC1',
                                    header: `CBIC1`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'IBAN1',
                                    dsnKey: 'IBAN1',
                                    header: `IBAN1`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'LBNQ1',
                                    dsnKey: 'LBNQ1',
                                    header: `LBNQ1`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'LTIT1',
                                    dsnKey: 'LTIT1',
                                    header: `LTIT1`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'REFE1',
                                    dsnKey: 'REFE1',
                                    header: `REFE1`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'TPAM2',
                                    dsnKey: 'TPAM2',
                                    header: `TPAM2`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'MPAM2',
                                    dsnKey: 'MPAM2',
                                    header: `MPAM2`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'CBIC2',
                                    dsnKey: 'CBIC2',
                                    header: `CBIC2`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'LBNQ2',
                                    dsnKey: 'LBNQ2',
                                    header: `LBNQ2`,
                                    width: 10,
                                },
                            ]
                        }
                    },
                    {
                        name: 'Affiliation',
                        color: 'FFC0000',
                        type: 'Mutual',
                        column: {
                            create: [
                                {
                                    bloc: 'Mutual',
                                    key: 'matri',
                                    dsnKey: 'employeeId',
                                    header: `matri`,
                                    width: 10,
                                },
                                {
                                    bloc: 'HRU',
                                    key: 'CEMP',
                                    dsnKey: 'CEMP',
                                    header: `CEMP`,
                                    width: 10,
                                },
                                {
                                    bloc: 'HRU',
                                    key: 'GCREF',
                                    dsnKey: 'GCREF',
                                    header: `GCREF`,
                                    width: 10,
                                },
                                {
                                    bloc: 'HRU',
                                    key: 'GCREF',
                                    dsnKey: 'CDAMP',
                                    header: `CDAMP`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'organisme',
                                    dsnKey: 'organisme',
                                    header: `CDAMP`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'contractId',
                                    dsnKey: 'contractId',
                                    header: `RFCTR`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'contractId',
                                    dsnKey: 'contractId',
                                    header: `RFCTR`,
                                    width: 10,
                                },
                                {
                                    bloc: 'HRU',
                                    key: 'POCTR',
                                    dsnKey: 'POCTR',
                                    header: `POCTR`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'option',
                                    dsnKey: 'option',
                                    header: `OPCTR`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'startDateMutualEmployee',
                                    dsnKey: 'startDateMutualEmployee',
                                    header: `DDAFI`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Mutual',
                                    key: 'endDateMutualEmployee',
                                    dsnKey: 'endDateMutualEmployee',
                                    header: `DFAFI`,
                                    width: 10,
                                },


                            ]
                        }
                    }
                ]
            }
        }
    })

    //Création de l'extraction People Net

    await prisma.extractions.create({
        data: {
            title: 'RDD Cegid People net',
            description: 'Extraction RDD People net',
            fileName: 'Peoplenet.xlsx',
            software: 'Cegid People net',
            consolidate: true,
            sheet: {
                create: [
                    {
                        name: 'Individu',
                        color: 'FFC0000',
                        type: 'Individu',
                        column: {
                            create: [
                                {
                                    bloc: 'PeopleNet',
                                    key: 'TYPE_IMPORT',
                                    dsnKey: 'TYPE_IMPORT',
                                    header: `Type d'import`,
                                    width: 10,
                                    defaultValue: 'New'
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'employeeId',
                                    dsnKey: 'employeeId',
                                    header: `Code de l'individu`,
                                    width: 10
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_EFFET',
                                    dsnKey: 'CFR_DT_EFFET',
                                    header: `Date d'effet`,
                                    width: 10,
                                    defaultValue: '1800-01-01'
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_CHANGE_REASON',
                                    dsnKey: 'CFR_CHANGE_REASON',
                                    header: `DESCRIPTION DU CHANGEMENT`,
                                    width: 10,
                                    defaultValue: '1800-01-01'
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'surname',
                                    dsnKey: 'surname',
                                    header: `Nom d'usage`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'firstname',
                                    dsnKey: 'firstname',
                                    header: `Prénom`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'numSS',
                                    dsnKey: 'numSS',
                                    header: `Nº de Sécurité sociale`,
                                    width: 10,
                                    left: 13,

                                },
                                {
                                    bloc: 'Individu',
                                    key: 'numSSKey',
                                    dsnKey: 'numSS',
                                    header: `Clé SS`,
                                    width: 10,
                                    right: 2
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_HR_OTHER_ID',
                                    dsnKey: 'CFR_HR_OTHER_ID',
                                    header: `IDENTIFIANT EXTERNE`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'sex',
                                    dsnKey: 'sex',
                                    header: `Code du titre`,
                                    width: 10,

                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_SALUTATION',
                                    dsnKey: 'sex',
                                    header: `Libéllé du Titre`,
                                    width: 10,
                                    transcos: {
                                        create: [
                                            {
                                                dsnValue: '01',
                                                newValue: 'Monsieur'
                                            },
                                            {
                                                dsnValue: '02',
                                                newValue: 'Madame'
                                            },
                                        ]
                                    }
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'sexe',
                                    dsnKey: 'sex',
                                    header: `Code du sexe`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_GENDER',
                                    dsnKey: 'sex',
                                    header: `Libéllé du sexe`,
                                    width: 10,
                                    transcos: {
                                        create: [
                                            {
                                                dsnValue: '01',
                                                newValue: 'Homme'
                                            },
                                            {
                                                dsnValue: '02',
                                                newValue: 'Femme'
                                            },
                                        ]
                                    }
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_MARITAL_STAT',
                                    dsnKey: 'CFR_ID_MARITAL_STAT',
                                    header: `Situation de famille`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_MARITAL_STATUS',
                                    dsnKey: 'CFR_NM_MARITAL_STATUS',
                                    header: `Libéllé de la situation de fam`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'lastname',
                                    dsnKey: 'lastname',
                                    header: `Nom de naissance`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'countryBirth',
                                    dsnKey: 'countryBirth',
                                    header: `Code pays nationalité`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_COUNTRY_NAC',
                                    dsnKey: 'CFR_NM_COUNTRY_NAC',
                                    header: `Libéllé de la nationalité`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_FOREIGN_CARD_TYPE',
                                    dsnKey: 'CFR_ID_FOREIGN_CARD_TYPE',
                                    header: `Code du type de carte`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_TYP_CARD',
                                    dsnKey: 'CFR_NM_TYP_CARD',
                                    header: `Libéllé du type de carte`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_FOREIGN_CARD_NUMBER',
                                    dsnKey: 'CFR_FOREIGN_CARD_NUMBER',
                                    header: `Nº de carte étranger`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_START_CARD',
                                    dsnKey: 'CFR_DT_START_CARD',
                                    header: `Date de début carte`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_END_CARD',
                                    dsnKey: 'CFR_DT_END_CARD',
                                    header: `Date de fin carte`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'birthday',
                                    dsnKey: 'birthday',
                                    header: `Date de naissance`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'countryBirth',
                                    dsnKey: 'countryBirth',
                                    header: `Code pays de naissance`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'codeZipBith',
                                    dsnKey: 'codeZipBith',
                                    header: `Code département de naiss.`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'placeOfBith',
                                    dsnKey: 'placeOfBith',
                                    header: `Nom de la commune de naissance`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CODE_INSEE_BIRTH',
                                    dsnKey: 'CFR_ID_CODE_INSEE_BIRTH',
                                    header: `Code commune INSEE Naissance`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_PROF_TEL_INDICATIF',
                                    dsnKey: 'CFR_PROF_TEL_INDICATIF',
                                    header: `INDICATIF BUREAU`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_PROF_TEL_NUMBER',
                                    dsnKey: 'CFR_PROF_TEL_NUMBER',
                                    header: `TÉLÉPHONE BUREAU`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_INDICATIF_GSM',
                                    dsnKey: 'CFR_INDICATIF_GSM',
                                    header: `Indicatif Téléphone GSM`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_PHONE_GSM',
                                    dsnKey: 'CFR_PHONE_GSM',
                                    header: `Numéro à composer GSM`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_INDICATIF_HOME',
                                    dsnKey: 'CFR_INDICATIF_HOME',
                                    header: `Indicatif Téléphone domicile`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_PHONE_HOME',
                                    dsnKey: 'CFR_PHONE_HOME',
                                    header: `Numéro à composer domicile`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_HOME_GSM_INDICATIF',
                                    dsnKey: 'CFR_HOME_GSM_INDICATIF',
                                    header: `INDICATIF GSM PERSO`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'CFR_HOME_GSM_NUMBER',
                                    dsnKey: 'CFR_HOME_GSM_NUMBER',
                                    header: `GSM PERSO`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'email',
                                    dsnKey: 'email',
                                    header: `Adresse électronique pro`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_EMAIL_PERSO',
                                    dsnKey: 'CFR_EMAIL_PERSO',
                                    header: `Adresse électronique perso`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_MAILING_CHECK',
                                    dsnKey: 'CFR_MAILING_CHECK',
                                    header: `Adresse de correspondance`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_LOCATION_TYPE',
                                    dsnKey: 'CFR_ID_LOCATION_TYPE',
                                    header: `Type de lieu`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NUM_VIA',
                                    dsnKey: 'CFR_NUM_VIA',
                                    header: `Nº de voie`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_TIPO_VIVIENDA',
                                    dsnKey: 'CFR_ID_TIPO_VIVIENDA',
                                    header: `Complément nº de la voie`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_SIGLA_DOMIC',
                                    dsnKey: 'CFR_ID_SIGLA_DOMIC',
                                    header: `Code du type de voie (SPA)`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_VOIE',
                                    dsnKey: 'CFR_NM_VOIE',
                                    header: `Nom de voie`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'address1',
                                    dsnKey: 'address1',
                                    header: `1re ligne d'adresse`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'address2',
                                    dsnKey: 'address2',
                                    header: `2e ligne d'adresse`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'address3',
                                    dsnKey: 'address3',
                                    header: `3e ligne d'adresse`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'codeZip',
                                    dsnKey: 'codeZip',
                                    header: `Code postal`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'city',
                                    dsnKey: 'city',
                                    header: `4e ligne d'adresse`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'country',
                                    dsnKey: 'country',
                                    header: `Code du pays`,
                                    width: 10,
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'codeZip',
                                    dsnKey: 'codeZip',
                                    header: `Département`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CODE_INSEE',
                                    dsnKey: 'CFR_ID_CODE_INSEE',
                                    header: `Code commune INSEE`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ADDR_INSEE_CITY_NAME',
                                    dsnKey: 'CFR_ADDR_INSEE_CITY_NAME',
                                    header: `NOM COMMUNE`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_IBAN_STANDARD',
                                    dsnKey: 'CFR_ID_IBAN_STANDARD',
                                    header: `Code IBAN standard`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_BANK_BRANCH',
                                    dsnKey: 'CFR_ID_BANK_BRANCH',
                                    header: `Code organisme financier`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ENTITLED',
                                    dsnKey: 'CFR_ENTITLED',
                                    header: `Nom titulaire`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_IBAN_CODE',
                                    dsnKey: 'CFR_IBAN_CODE',
                                    header: `Code pays`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_IBAN_KEY',
                                    dsnKey: 'CFR_IBAN_KEY',
                                    header: `Clé IBAN`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_ACCOUNT_TYPE',
                                    dsnKey: 'CFR_ID_ACCOUNT_TYPE',
                                    header: `Code du type de compte`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CURRENCY_ACCOUNT',
                                    dsnKey: 'CFR_ID_CURRENCY_ACCOUNT',
                                    header: `Code de la devise du compte`,
                                    width: 10,
                                    defaultValue: 'EUR'
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_GB_IBAN',
                                    dsnKey: 'CFR_GB_IBAN',
                                    header: `IBAN`,
                                    width: 10,
                                },
                            ]

                        }
                    },  //Fin individu
                    {
                        name: 'Période de travail',
                        color: 'FFC0000',
                        type: 'Contract',
                        column: {
                            create: [
                                {
                                    bloc: 'PeopleNet',
                                    key: 'TYPE_IMPORT',
                                    dsnKey: 'TYPE_IMPORT',
                                    header: `Type d'import`,
                                    width: 10,
                                    defaultValue: 'New'
                                },
                                {
                                    bloc: 'Individu',
                                    key: 'employeeId',
                                    dsnKey: 'employeeId',
                                    header: `Code de l'individu`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_EFFET',
                                    dsnKey: 'CFR_DT_EFFET',
                                    header: `Date d'effet`,
                                    width: 10,
                                    defaultValue: '1800-01-01'
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_CHANGE_REASON',
                                    dsnKey: 'CFR_CHANGE_REASON',
                                    header: `Description du changement`,
                                    width: 10,
                                    defaultValue: '1800-01-01'
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_OR_PERIOD',
                                    dsnKey: 'CFR_OR_PERIOD',
                                    header: `N° de période d'embauche`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_PNOR_ROLE',
                                    dsnKey: 'CFR_PNOR_ROLE',
                                    header: `N° Role`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'surname',
                                    dsnKey: `surname`,
                                    header: `Nom d'usage`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'fistname',
                                    dsnKey: `fistname`,
                                    header: `Prénom`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'bithday',
                                    dsnKey: `bithday`,
                                    header: `Date de naissance`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'numSS',
                                    dsnKey: `numSS`,
                                    header: `Nº de Sécurité sociale`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CLON',
                                    dsnKey: `CFR_ID_CLON`,
                                    header: `Modèle d'embauche`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_HR_TYPE',
                                    dsnKey: `CFR_ID_HR_TYPE`,
                                    header: `Type de ressource`,
                                    width: 10,
                                    defaultValue: '01'
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_HRM_VENDOR',
                                    dsnKey: `CFR_ID_HRM_VENDOR`,
                                    header: `Code Organisme de recrutement`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_HRM_VENDOR',
                                    dsnKey: `CFR_NM_HRM_VENDOR`,
                                    header: `Libellé organisme recrutement`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'startDate',
                                    dsnKey: `startDate`,
                                    header: `Date d'embauche`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_REF_DPAE',
                                    dsnKey: `CFR_REF_DPAE`,
                                    header: `Référence DPAE`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_HRP_START_REASON',
                                    dsnKey: `CFR_ID_HRP_START_REASON`,
                                    header: `Code du motif d'embauche`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_HRP_START_REASON',
                                    dsnKey: `CFR_ID_HRP_START_REASON`,
                                    header: `Libellé motif d'embauche`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'contract',
                                    dsnKey: `contract`,
                                    header: `Type de contrat`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'contract',
                                    dsnKey: `contract`,
                                    header: `Libellé du type de contrat`,
                                    width: 10,
                                    transcos: {
                                        create: [
                                            {
                                                dsnValue: '01',
                                                newValue: 'Contrat de travail à durée indéterminée de droit privé'
                                            },
                                            {
                                                dsnValue: '02',
                                                newValue: 'Contrat de travail à durée déterminée de droit privé'
                                            },
                                        ]
                                    }
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CO_REASON',
                                    dsnKey: `CFR_ID_CO_REASON`,
                                    header: `Motif du contrat`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_N_CO_REASON',
                                    dsnKey: `CFR_N_CO_REASON`,
                                    header: `Libellé motif de contrat`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'contractId',
                                    dsnKey: `contractId`,
                                    header: `Référence-contrat`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_SPEC_CONT_TYPE',
                                    dsnKey: `CFR_ID_SPEC_CONT_TYPE`,
                                    header: `Type interne de contr. spécial`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_N_CONT_TP_SPEC',
                                    dsnKey: `CFR_N_CONT_TP_SPEC`,
                                    header: `Libellé type de contrat part`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_RESORT_REASON_CDD',
                                    dsnKey: `CFR_ID_RESORT_REASON_CDD`,
                                    header: `Libellé type de contrat part`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_RESORT_REASON_CDD',
                                    dsnKey: `CFR_NM_RESORT_REASON_CDD`,
                                    header: `Libellé motif de recours CDD`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_CK_CDD_USAGE_3M',
                                    dsnKey: `CFR_CK_CDD_USAGE_3M`,
                                    header: `Duéee initiale inférieure à 3M`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_CK_CDD_ACCROISS_1M',
                                    dsnKey: `CFR_CK_CDD_ACCROISS_1M`,
                                    header: `Duéee initiale inférieure à 1M`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_CK_CDD_ACCROISS_1_3M',
                                    dsnKey: `CFR_CK_CDD_ACCROISS_1_3M`,
                                    header: `Duéee initiale entre 1 et 3 M`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_END_TEST',
                                    dsnKey: `CFR_DT_END_TEST`,
                                    header: `Date de fin d'essai`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_END_PREDICT',
                                    dsnKey: `CFR_DT_END_PREDICT`,
                                    header: `Date de fin prévue`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DUREE_APPRENTISSAGE',
                                    dsnKey: `CFR_DUREE_APPRENTISSAGE`,
                                    header: `Durée apprentissage`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'contractEndDate',
                                    dsnKey: `contractEndDate`,
                                    header: `Date de sortie`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_BREAK_REASON',
                                    dsnKey: `CFR_ID_BREAK_REASON`,
                                    header: `Motif de rupture`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_N_BREAK_REASON',
                                    dsnKey: `CFR_N_BREAK_REASON`,
                                    header: `Libellé motif fin de contrat`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_HRP_END_REASON',
                                    dsnKey: `CFR_ID_HRP_END_REASON`,
                                    header: `Code du motif de fin`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_N_HRP_END_REASON',
                                    dsnKey: `CFR_N_HRP_END_REASON`,
                                    header: `Motif de sortie`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_TUTEUR',
                                    dsnKey: `CFR_ID_TUTEUR`,
                                    header: `Nom du tuteur`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_REPLACED_EMPLOYEE_NAME_CDD',
                                    dsnKey: `CFR_REPLACED_EMPLOYEE_NAME_CDD`,
                                    header: `Nom du salarié remplacé`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_SUB_LEGAL_ENTITY',
                                    dsnKey: `CFR_ID_SUB_LEGAL_ENTITY`,
                                    header: `Code de l'entité`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'siren',
                                    dsnKey: `siren`,
                                    header: `Code de l'entité`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_LEG_ENT',
                                    dsnKey: `CFR_ID_LEG_ENT`,
                                    header: `Code de l'ent. juridique`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_SUB_LEGAL_ENTITY',
                                    dsnKey: `CFR_NM_SUB_LEGAL_ENTITY`,
                                    header: `Libellé établissement`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_SENIORITY_LEG_ENT',
                                    dsnKey: `CFR_DT_SENIORITY_LEG_ENT`,
                                    header: `Ancienneté entité`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_SENIORITY_GROUP',
                                    dsnKey: `CFR_DT_SENIORITY_GROUP`,
                                    header: `Ancienneté groupe`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_SENIORITY',
                                    dsnKey: `CFR_DT_SENIORITY`,
                                    header: `Ancienneté paie`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_SEN_SUP',
                                    dsnKey: `CFR_SEN_SUP`,
                                    header: `Mois supplémentaires`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_JOB',
                                    dsnKey: `CFR_ID_JOB`,
                                    header: `Code de l'emploi`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'employmentLabel',
                                    dsnKey: `employmentLabel`,
                                    header: `Libellé emploi`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_POSITION',
                                    dsnKey: `CFR_ID_POSITION`,
                                    header: `Code du poste`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_POSITION',
                                    dsnKey: `CFR_NM_POSITION`,
                                    header: `Libellé du poste`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ROLE_NAME',
                                    dsnKey: `CFR_ROLE_NAME`,
                                    header: `Libellé du rôle`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_OCCUPATION_TYPE',
                                    dsnKey: `CFR_ID_OCCUPATION_TYPE`,
                                    header: `Type d'occupation`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NUM_HOURS',
                                    dsnKey: `CFR_NUM_HOURS`,
                                    header: `Volume d'occupation heures`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NUM_ETP',
                                    dsnKey: `CFR_NUM_ETP`,
                                    header: `Occupation ETP`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NUM_HEADCOUNT',
                                    dsnKey: `CFR_NUM_HEADCOUNT`,
                                    header: `Occupation travailleur`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_DURATION',
                                    dsnKey: `CFR_ID_DURATION`,
                                    header: `Code de la durée`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_LAST_WORK',
                                    dsnKey: `CFR_DT_LAST_WORK`,
                                    header: `Date der. emploi`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CAT_LAB_AGREE',
                                    dsnKey: `CFR_ID_CAT_LAB_AGREE`,
                                    header: `Catégorie conventionnelle`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_CAT_LAB_AGREE',
                                    dsnKey: `CFR_NM_CAT_LAB_AGREE`,
                                    header: `Libellé cat conventionnelle`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'estabWorkPlace',
                                    dsnKey: `estabWorkPlace`,
                                    header: `Lieu de travail`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_N_WORK_LOCATION',
                                    dsnKey: `CFR_N_WORK_LOCATION`,
                                    header: `Libellé du lieu de travail`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_WORK_UNIT',
                                    dsnKey: `CFR_ID_WORK_UNIT`,
                                    header: `Code de l'unité de travail`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_N_WORK_UNIT',
                                    dsnKey: `CFR_N_WORK_UNIT`,
                                    header: `Libellé de l'unité de travail`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CENTRE_COUT',
                                    dsnKey: `CFR_ID_CENTRE_COUT`,
                                    header: `Code centre de coût`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_CENTR_COUT',
                                    dsnKey: `CFR_NM_CENTR_COUT`,
                                    header: `Libellé du centre de coût`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_EMPLOYEE_TYPE',
                                    dsnKey: `CFR_ID_EMPLOYEE_TYPE`,
                                    header: `Code de la population`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_EMPLOYEE_TYPE',
                                    dsnKey: `CFR_NM_EMPLOYEE_TYPE`,
                                    header: `Libellé du type d'employé`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_KEY_EMPLOYEE',
                                    dsnKey: `CFR_KEY_EMPLOYEE`,
                                    header: `Collaborateur clé`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_STRATEGIC_EMP',
                                    dsnKey: `CFR_STRATEGIC_EMP`,
                                    header: `Collaborateur stratégique`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'idcc',
                                    dsnKey: `idcc`,
                                    header: `Convention coll.`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_LAB_AGREE',
                                    dsnKey: `CFR_NM_LAB_AGREE`,
                                    header: `Libellé conv collective`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_SALARY_TYPE',
                                    dsnKey: `CFR_ID_SALARY_TYPE`,
                                    header: `Type de salaire`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_JOB_CLASS',
                                    dsnKey: `CFR_ID_JOB_CLASS`,
                                    header: `Code classif. conv.`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_JOB_CLASS',
                                    dsnKey: `CFR_NM_JOB_CLASS`,
                                    header: `Libellé classi conventionnelle`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ECHELON_GRILLE',
                                    dsnKey: `CFR_ECHELON_GRILLE`,
                                    header: `Echelon grille`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_JOB_COEF',
                                    dsnKey: `CFR_JOB_COEF`,
                                    header: `Coefficient`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_SALARY',
                                    dsnKey: `CFR_SALARY`,
                                    header: `Salaire`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'ID_CURRENCY',
                                    dsnKey: `ID_CURRENCY`,
                                    header: `Code Devise`,
                                    width: 10,
                                    defaultValue: 'EUR'
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_HOURLY_RATE',
                                    dsnKey: `CFR_HOURLY_RATE`,
                                    header: `Taux horaire`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_JOB_DT_NEXT_ECHELON',
                                    dsnKey: `CFR_JOB_DT_NEXT_ECHELON`,
                                    header: `Date du prochain changement`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_JOB_ECHELON',
                                    dsnKey: `CFR_JOB_ECHELON`,
                                    header: `Échelon`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_REF_MOD',
                                    dsnKey: `CFR_ID_REF_MOD`,
                                    header: `Code du cycle de travail`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_SEMAINE_DEB_CYCLE',
                                    dsnKey: `CFR_ID_SEMAINE_DEB_CYCLE`,
                                    header: `Semaine de début de cylce`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_OTT',
                                    dsnKey: `CFR_ID_OTT`,
                                    header: `Identifiant OTT`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_OTT',
                                    dsnKey: `CFR_NM_OTT`,
                                    header: `Libellé modèle OTT`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_WEEKLY_CONTR_HOURS',
                                    dsnKey: `CFR_WEEKLY_CONTR_HOURS`,
                                    header: `Horaire hebdomadaire`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_PERCENT_FULL_TIME_SALARY',
                                    dsnKey: `CFR_PERCENT_FULL_TIME_SALARY`,
                                    header: `Pourcentage de rémunération`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_HORAIRE_AVENANT',
                                    dsnKey: `CFR_HORAIRE_AVENANT`,
                                    header: `Horaire avenant`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_TP_ANNUALIZATION',
                                    dsnKey: `CFR_ID_TP_ANNUALIZATION`,
                                    header: `ID type d'annualisation`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DAYS_PER_YEAR',
                                    dsnKey: `CFR_DAYS_PER_YEAR`,
                                    header: `Nombre de jours annuel`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_HOURS_PER_YEAR',
                                    dsnKey: `CFR_HOURS_PER_YEAR`,
                                    header: `Heures par an`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CAT_RETRAITE',
                                    dsnKey: `CFR_ID_CAT_RETRAITE`,
                                    header: `Régime de retraite compl.`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_CAT_RETRAITE',
                                    dsnKey: `CFR_NM_CAT_RETRAITE`,
                                    header: `Libellé régime retraite compl.`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CAT_SOC_SEC',
                                    dsnKey: `CFR_ID_CAT_SOC_SEC`,
                                    header: `Social Security Category`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_CAT_SOC_SEC',
                                    dsnKey: `CFR_NM_CAT_SOC_SEC`,
                                    header: `Libellé cat sécurité sociale`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CAT_MUTUELLE',
                                    dsnKey: `CFR_ID_CAT_MUTUELLE`,
                                    header: `Régime de mutuelle`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_CAT_MUTUELLE',
                                    dsnKey: `CFR_NM_CAT_MUTUELLE`,
                                    header: `Libellé catégorie mutuelle`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CAT_PREVOYANCE',
                                    dsnKey: `CFR_ID_CAT_PREVOYANCE`,
                                    header: `Régime de prévoyance`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NM_CAT_PREVOYANCE',
                                    dsnKey: `CFR_NM_CAT_PREVOYANCE`,
                                    header: `Libellé catégorie prévoyance`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_ZONE_TRANSP',
                                    dsnKey: `CFR_ID_ZONE_TRANSP`,
                                    header: `Code de la zone transport`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_MUTUELLE_FAC',
                                    dsnKey: `CFR_ID_MUTUELLE_FAC`,
                                    header: `Code mutuelles facultatives`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_OPTION_MUTFAC',
                                    dsnKey: `CFR_ID_OPTION_MUTFAC`,
                                    header: `Code option mutuelle`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_CLE_MUTUELLE',
                                    dsnKey: `CFR_CLE_MUTUELLE`,
                                    header: `Clé mutuelle`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_CLE_MUTUELLE',
                                    dsnKey: `CFR_ID_ASSEDIC_TYPE`,
                                    header: `Code type Pôle Emploi`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_STATUS_DECALE',
                                    dsnKey: `CFR_ID_STATUS_DECALE`,
                                    header: `Code statut de paie décalée`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_TYPE_ADJUST',
                                    dsnKey: `CFR_ID_TYPE_ADJUST`,
                                    header: `Code du type d'ajustement`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_PAY_FREQUENCY',
                                    dsnKey: `CFR_ID_PAY_FREQUENCY`,
                                    header: `Code périodicité de paie`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_ORIGIN_TYPE',
                                    dsnKey: `CFR_ID_ORIGIN_TYPE`,
                                    header: `Code nature du paiement`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_CURRENCY_DATA',
                                    dsnKey: `CFR_ID_CURRENCY_DATA`,
                                    header: `Devise de paiement`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_PAYM_TYPE',
                                    dsnKey: `CFR_ID_PAYM_TYPE`,
                                    header: `Code du mode de paiement`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_ID_COMP_BANK',
                                    dsnKey: `CFR_ID_COMP_BANK`,
                                    header: `Code banque de l'entité`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_GTA_MANAGED_IND',
                                    dsnKey: `CFR_GTA_MANAGED_IND`,
                                    header: `Gestion de GTA`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_GTA_EXEMPT_IND',
                                    dsnKey: `CFR_GTA_EXEMPT_IND`,
                                    header: `Forfait jour`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_CLOCKING_EMP_IND',
                                    dsnKey: `CFR_CLOCKING_EMP_IND`,
                                    header: `Badgeant`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_GTA_TIMESLOT_CYCLE_IND',
                                    dsnKey: `CFR_GTA_TIMESLOT_CYCLE_IND`,
                                    header: `Cycle avec plages horaires`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_GTA_CARD_NUMBER',
                                    dsnKey: `CFR_GTA_CARD_NUMBER`,
                                    header: `Numéro de badge`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_GTA_ID_CLOCK_MACHINE_GRP',
                                    dsnKey: `CFR_GTA_ID_CLOCK_MACHINE_GRP`,
                                    header: `Code groupe de badgeuses`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_GTA_DECLARATIVE_EMP',
                                    dsnKey: `CFR_GTA_DECLARATIVE_EMP`,
                                    header: `Déclaratif`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_GTA_TIMESHEET_TYPE',
                                    dsnKey: `CFR_GTA_TIMESHEET_TYPE`,
                                    header: `Fiche de présence`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_NOTICE',
                                    dsnKey: `CFR_DT_NOTICE`,
                                    header: `Fin du préavis`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NOTICE_MONTH',
                                    dsnKey: `CFR_NOTICE_MONTH`,
                                    header: `Mois de préavis`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_NOTICE_DAYS',
                                    dsnKey: `CFR_NOTICE_DAYS`,
                                    header: `Jours de préavis`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_START_PREAVIS',
                                    dsnKey: `CFR_DT_START_PREAVIS`,
                                    header: `Date début de préavis de congé`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_END_PREAVIS',
                                    dsnKey: `CFR_DT_END_PREAVIS`,
                                    header: `Date fin de préavis de congé`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_CK_NOTICE_NP_PAYED',
                                    dsnKey: `CFR_CK_NOTICE_NP_PAYED`,
                                    header: `Préavis non effectué payé`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_START_NOTICE_NP_P',
                                    dsnKey: `CFR_DT_START_NOTICE_NP_P`,
                                    header: `Déb.  préav. non eff. payé`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_END_NOTICE_NP_P',
                                    dsnKey: `CFR_DT_END_NOTICE_NP_P`,
                                    header: `Fin préavis non eff. payé`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_CK_NOTICE_NP_NOT_PAYED',
                                    dsnKey: `CFR_CK_NOTICE_NP_NOT_PAYED`,
                                    header: `Préavis non effectué non payé`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_START_NOTICE_NP_NP',
                                    dsnKey: `CFR_DT_START_NOTICE_NP_NP`,
                                    header: `Déb. préavis non eff. non payé`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_DT_START_NOTICE_NP_NP',
                                    dsnKey: `CFR_DT_END_NOTICE_NP_NP`,
                                    header: `Fin préavis non eff. non payé`,
                                    width: 10,
                                },
                                {
                                    bloc: 'PeopleNet',
                                    key: 'CFR_CK_PAY_REMAINING_DAYSOFF',
                                    dsnKey: `CFR_CK_PAY_REMAINING_DAYSOFF`,
                                    header: `Payer congés restants`,
                                    width: 10,
                                },
                            ]
                        }
                    }
                ]

            }
        }
    })
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