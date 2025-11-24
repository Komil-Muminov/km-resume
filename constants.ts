<<<<<<< HEAD
import { NavigationItem, Project, SkillCategory } from './types';
=======
import { NavigationItem, Project, SkillCategory } from "./types";
>>>>>>> 863651d7cb8f23142b60aebc885346f2b8e85a13

export const RESUME_CONTEXT = `
Имя: Табаров Комилджон
Дата рождения: 01 апреля 1997
Контакты: +992900019116, itmuminoff@gmail.com, Telegram: @iamff7
Местоположение: Душанбе
Желаемая должность: Frontend-разработчик (React)

Обо мне: Frontend-разработчик с опытом более 1 года. Работаю младшим специалистом в госструктуре Таджикистана. Стек: React, VS Code, MS SQL Server.
Образование: СКФУ (Пятигорск), Информационные системы и технологии (2015-2019).
<<<<<<< HEAD
Языки: Русский (родной), Английский (B1).
=======
Языки: Таджикский(родной),Русский.
>>>>>>> 863651d7cb8f23142b60aebc885346f2b8e85a13

Навыки Frontend: HTML, CSS (Flexbox, Grid, Bootstrap, Tailwind), SCSS, JS (ES6+), TypeScript, React JS, Vite, Next JS, Framer Motion, GSAP.
Навыки Backend: Основы Python, Node.js (Express).
Базы данных: SQL, Microsoft SQL Server, MongoDB.
Инструменты: Git, Figma.

Опыт работы:
Сентябрь 2023 - настоящее время: Frontend-разработчик (проектная деятельность).
Использовал: React Query, React Hook Form, Zod.

Курсы и Сертификаты:
- Frontend-разработчик PRO - Skillbox (Успешно окончен)
- JavaScript level 1 & 2 (React) - Алиф академия
- Основы Python - Нетология
`;

export const NAV_ITEMS: NavigationItem[] = [
<<<<<<< HEAD
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Основы Frontend',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    name: 'Стилизация и Анимация',
    skills: ['Tailwind CSS', 'SCSS', 'Framer Motion', 'GSAP', 'Bootstrap'],
  },
  {
    name: 'Инструменты',
    skills: ['Next.js', 'Vite', 'Git', 'Figma', 'VS Code'],
  },
  {
    name: 'Backend и БД',
    skills: ['Node.js', 'Python (Basic)', 'SQL', 'MongoDB', 'MS SQL Server'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Cargo Zubbar',
    description: 'Современная логистическая платформа для управления грузоперевозками. Интуитивный интерфейс и быстрая работа.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    link: 'http://cargo-zubbar.vercel.app/',
    image: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: 2,
    title: 'Модуль Гос. Портала',
    description: 'Разработка основных frontend-модулей для государственной структуры Таджикистана с использованием React и TypeScript.',
    tech: ['React', 'TypeScript', 'MS SQL'],
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: 3,
    title: 'E-Commerce Дашборд',
    description: 'Адаптивная панель управления для товаров и заказов с визуализацией данных.',
    tech: ['Next.js', 'Tailwind', 'React Query'],
    image: 'https://picsum.photos/600/400?random=2'
  },
];
=======
	{ label: "Обо мне", href: "#about" },
	{ label: "Навыки", href: "#skills" },
	{ label: "Проекты", href: "#projects" },
	{ label: "Контакты", href: "#contact" },
];

export const SKILLS: SkillCategory[] = [
	{
		name: "Основы Frontend",
		skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
	},
	{
		name: "Стилизация и Анимация",
		skills: ["Tailwind CSS", "SCSS", "Framer Motion", "GSAP", "Bootstrap"],
	},
	{
		name: "Инструменты",
		skills: ["Next.js", "Vite", "Git", "Figma", "VS Code"],
	},
	{
		name: "Backend и БД",
		skills: ["Node.js", "Python (Basic)", "SQL", "MongoDB", "MS SQL Server"],
	},
];

export const PROJECTS: Project[] = [
	{
		id: 1,
		title: "Cargo Zudbar",
		description:
			"Современная логистическая платформа для управления грузоперевозками. Интуитивный интерфейс и быстрая работа.",
		tech: ["React", "Next.js", "Tailwind CSS"],
		link: "http://cargo-zubbar.vercel.app/",
		image: "https://picsum.photos/600/400?random=10",
	},
	{
		id: 2,
		title: "Страницы госструктуры",
		description:
			"Участвовал в разработке и поддержке веб-сайта государственной структуры Таджикистана.",
		tech: ["HTML", "JavaScript", "MS SQL"],
		link: "https://moliya.tj/",
		image: "https://picsum.photos/600/400?random=1",
	},
	{
		id: 3,
		title: "E-Commerce Дашборд",
		description:
			"Адаптивная панель управления для товаров и заказов с визуализацией данных.",
		tech: ["Next.js", "Tailwind", "React Query"],
		image: "https://picsum.photos/600/400?random=2",
	},
];
>>>>>>> 863651d7cb8f23142b60aebc885346f2b8e85a13
