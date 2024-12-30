import person from "../../assets/2.jpg";
// import "./Resume.css";
const Resume = () => {
	return (
		<div className="container">
			<div className="profile">
				<img src={person} alt="Фото" className="profile-photo" />
				<div className="info">
					<h1>Табаров Комилджон</h1>
					<p>
						<strong>Город проживания:</strong> Душанбе
					</p>
					<p>
						<strong>Дата рождения:</strong> 01.04.1997
					</p>
					<p>
						<strong>Телефон:</strong> +992900019116 / +79614780838
					</p>
					<p>
						<strong>Email:</strong>
						<a href="mailto:itmuminoff@gmail.com">itmuminoff@gmail.com</a>
					</p>
					<p>
						<strong>Telegram:</strong>
						<a href="https://t.me/test">@kmff7</a>
					</p>
					<span>
						<strong>GitHub:</strong>
						<a href="https://github.com/Komil-Muminov">
							https://github.com/Komil-Muminov
						</a>
					</span>
				</div>
			</div>
			<div className="section">
				<h2>Желаемая должность</h2>
				<p>Frontend-разработчик (React)</p>
			</div>
			<div className="section">
				<h2>Навыки</h2>
				<ul>
					<li>HTML, CSS</li>
					<li>SCSS</li>
					<li>JavaScript ES6</li>
					<li>TypeScript</li>
					<li>React JS / Vite JS / Next JS</li>
					<li>Адаптивная, кроссбраузерная, семантическая верстка</li>
					<li>Работа с макетами в Figma</li>
					<li>Работа с системами контроля версий (Git)</li>
					<li>
						SQL: Опыт работы с реляционными базами данных и выполнения
						SQL-запросов.
					</li>
					<li>Python</li>
				</ul>
			</div>
			<div className="section">
				<h2>Опыт работы</h2>
				<h3>
					Проектная деятельность по Frontend-разработке: Frontend-разработчик,
					Сентябрь 2023 — по настоящее время.
				</h3>
				<p>
					<b>Стек технологий:</b> HTML5, CSS (Flexbox, Grid, Bootstrap, Tailwind
					CSS), SCSS, JavaScript, TypeScript (с использованием Zod), React +
					React Query, Next.js, GSAP.
				</p>
				<p>
					<b>Достижения:</b> Реализовал несколько проектов с использованием
					современных технологий и библиотек, включая создание сложных
					интерфейсов с помощью React. Применял CSS-фреймворки Bootstrap и
					Tailwind CSS для адаптивной верстки и ускорения разработки.
					Использовал библиотеку Zod для валидации данных в проектах на
					JavaScript / TypeScript.
				</p>
				<span>
					C моими проектами можно ознакомиться по ссылке на
					<a href="#" className="git__link">
						Гитхаб
					</a>
				</span>
			</div>
			<div className="section">
				<h2>Образование</h2>
				<p>
					<strong>Северо-Кавказский федеральный университет, Пятигорск</strong>
				</p>
				<p>
					<strong>Факультет:</strong> Информационные системы и технологии
				</p>
				<p>
					<strong>Период обучения:</strong> 2015 — 2019
				</p>
			</div>
			<div className="section">
				<h2>Обо мне</h2>
				<p>
					Я занимаюсь Frontend-разработкой на протяжении года. Слежу за новыми
					тенденциями в веб-разработке, развиваю свои навыки для достижения
					лучших результатов в работе. В настоящее время работаю младшим
					специалистом по веб-разработке в Министерстве финансов Республики
					Таджикистан. В своей работе использую современные технологии, включая
					React, Visual Studio/Visual Studio Code, а также Microsoft SQL Server.
				</p>
				<p>Рассматриваю стажировку и удаленную работу.</p>
			</div>
			<div className="section">
				<h2>Курсы и тренинги</h2>
				<p>
					"JavaScript level 1", 2022-2023. <strong>Алиф академия</strong>
				</p>
				<p>
					"JavaScript level 2 (React JS)", 2022-2023.
					<strong>Алиф академия</strong>
				</p>
				<p>
					"Frontend-разработик PRO", 2023-2024. <strong>Скиллбокс</strong>
				</p>
				<p>
					"Основы Python: создаём телеграмбота", 2024.
					<strong>Нетология</strong>
				</p>
				<p>
					Английский язык, Уровень B1,
					<strong>УЦА 2024 по н.в.</strong>
				</p>
			</div>
		</div>
	);
};
export default Resume;
