export const _defaultSkills: string[] = Array.from(
	new Set([
		'HTML',
		'CSS',
		'Javascript',
		'Typescript',
		'PHP',
		'Java',
		'Go',
		'Laravel',
		'Spring Boot',
		'NestJS',
		'Next.js',
		'Vue.js',
		'Sveltekit',
		'Git',
		'Github',
		'Docker',
		'MySQL',
		'PostgreSQL',
		'MongoDB',
		'Node.js',
		'Restful API',
		'Linux',
		'Agile/Scrum Development',
		'Rapid Application Development',
		'Problem Solving',
		'Attention to Detail',
		'Collaboration',
		'Time Management',
		'Version Control',
		'Microservices Architecture',
		'Monolithic Architecture'
	])
);

export const _codePanelValue = `
const skills = Array.from(
  new Set([
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "PHP",
    "Java",
    "Go",
    "Laravel",
    "Spring Boot",
    "NestJS",
    "Next.js",
    "Vue.js",
    "Sveltekit",
    "Git",
    "Github",
    "Docker",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Node.js",
    "Restful API",
    "Linux",
    "Agile/Scrum Development",
    "Rapid Application Development",
    "Problem Solving",
    "Attention to Detail",
    "Collaboration",
    "Time Management",
    "Version Control",
    "Microservices Architecture",
    "Monolithic Architecture",
  ])
);

const hoarePartition = <T extends string | number>(
  v: T[],
  front: number,
  back: number
) => {
  const p = v[Math.floor((front + back) / 2)];
  let lp = front - 1;
  let rp = back + 1;

  while (true) {
    do {
      lp++;
    } while (v[lp] < p);

    do {
      rp--;
    } while (v[rp] > p);

    if (lp < rp) {
      const temp = v[lp];
      v[lp] = v[rp];
      v[rp] = temp;
    } else {
      return rp;
    }
  }
};

const quickSort = <T extends string | number>(
  v: T[],
  front: number,
  back: number
) => {
  if (v.length <= 1) return v;

  if (front < back) {
    const partition = hoarePartition(v, front, back);
    quickSort(v, front, partition);
    quickSort(v, partition + 1, back);
  }
};

function executable(): void {
  quickSort(skills, 0, skills.length - 1);
  console.log(skills);
}

function main() {
  executable();
}

main();
`;

export const _achievedSkills = {
	_f: [
		'Typescript',
		'Laravel',
		'NestJS',
		'Vue.js',
		'PHP',
		'Javascript',
		'Typescript',
		'PostgreSQL',
		'MySQL',
		'Restful API',
		'Swagger',
		'Git',
		'Github'
	],
	_s: [
		'PHP',
		'Javascript',
		'Typescript',
		'Laravel',
		'Vue.js',
		'Ionic',
		'PostgreSQL',
		'MySQL',
		'Docker',
		'Restful API',
		'Git',
		'Github'
	],
	_t: ['Laravel', 'Vue.js', 'Mongodb', 'Figma']
};

export const _welcomeTexts = [
	'Selamat datang!',
	'Witaj!',
	'Добро пожаловать!',
	'Välkommen!',
	'Bem-vindo/a!',
	'Benvenuto/a!',
	'Bienvenue!',
	'¡Bienvenido/a!',
	'Willkommen!',
	'Hoş geldin!',
	'欢迎',
	'ようこそ',
	'어서 오십시오'
];

export const _goodbyeTexts = [
	'Sampai jumpa',
	'Dag',
	'Adeus',
	'Auf Wiedersehen',
	'Arrivederci',
	'Au revoir',
	'Adiós',
	'Hoşçakalın',
	'Hej då',
	'Do widzenia',
	'再见',
	'またね',
	'안녕히 계세요'
];
