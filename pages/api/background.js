const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'YouCode (UM6P)',
                degree: 'Développement Web / Full Stack',
                detail: "Formation intensive basée sur la pédagogie active (Simplon). Maîtrise des technologies modernes (Spring Boot / Angular), méthodologie Agile/Scrum et réalisation de projets concrets.",
                year: '2024 - Present'
            },
            {
                id: 1,
                title: 'Faculté des Sciences Semlalia', 
                degree: 'Études Universitaires (Niveau DEUG)', 
                detail: "Acquisition des fondamentaux en informatique, mathématiques et logique algorithmique. Validation de deux années d'études supérieures.",
                year: '2018 - 2021'
            },
            {
                id: 2,
                title: 'Lycée Akensous', 
                degree: 'Baccalauréat Scientifique',
                detail: "Option Sciences Mathématiques A. Acquisition d'un fort esprit d'analyse et de logique.",
                year: '2018'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'YouCode (Projets Académiques)',
                role: 'Full Stack Developer (Training)',
                desc: 'Développement d’applications web complexes . Travail en équipe, gestion de versions (Git/GitHub) et respect des délais (Deadlines).',
                year: '2024 - Present',
                location: 'Safi, Maroc'
            },
            {
                id: 2,
                title: 'Freelance & Auto-formation',
                role: 'Junior Web Developer',
                desc: 'Période dédiée à l’auto-formation (Self-learning). Exploration des bases du développement Web, réalisation de challenges techniques et renforcement de la logique de programmation.',
                year: '2022 - 2024',
                location: 'Remote'
            },
        ]
    }
]

export default function handler(req, res) {
    res.status(200).json(background)
}