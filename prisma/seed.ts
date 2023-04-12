import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    //Création de l'extraction standard
    await prisma.extractions.create({
        data: {
            title: 'Dsn',
            description: 'Extraction DSN',
            fileName: 'DSN.xlsx',
            software: 'Tout les outils',
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