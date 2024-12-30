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
						<strong>Местоположение:</strong> Душанбе
					</p>
					<p>
						<strong>Дата рождения:</strong> 01 апреля 1997
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
					<li>HTML, CSS (Flexbox, Grid, Bootstrap, Tailwind CSS)</li>
					<li>SCSS</li>
					<li>JavaScript (ES6+), TypeScript</li>
					<li>React JS, Vite JS, Next JS</li>
					<li>Адаптивная и кроссбраузерная верстка</li>
					<li>Работа с макетами в Figma</li>
					<li>Системы контроля версий (Git)</li>
					<li>Основы Python, Node.js (Express)</li>
					<li>Опыт работы с реляционными базами данных и SQL</li>
				</ul>
			</div>

			<div className="section">
				<h2>Опыт работы</h2>
				<h3>
					Frontend-разработчик, проектная деятельность — Сентябрь 2023 — по
					настоящее время
				</h3>
				<p>
					<b>Технологический стек:</b> HTML5, CSS (Flexbox, Grid, Bootstrap,
					Tailwind CSS), SCSS, JavaScript, TypeScript (Zod), React, Next.js,
					React Query, React Hook Form, Motion, GSAP.
				</p>
				<p>
					<b>Основные достижения:</b> Разработка и внедрение проектов с
					использованием React и других современных технологий. Создание
					адаптивных интерфейсов с использованием CSS-фреймворков (например,
					Bootstrap и Tailwind CSS), интеграция валидации с Zod, создание
					динамичных анимаций с GSAP и Motion, использование React Query для
					работы с асинхронными данными и React Hook Form для управления
					формами.
				</p>
				<span>
					Посмотреть мои проекты можно на{" "}
					<a href="https://github.com/Komil-Muminov" className="git__link">
						https://github.com/Komil-Muminov
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
					Я Frontend-разработчик с годичным опытом работы, увлечен
					веб-разработкой и постоянно развиваю свои навыки. На данный момент я
					работаю младшим специалистом по веб-разработке в Министерстве финансов
					Республики Таджикистан. Моя работа включает в себя использование
					современных технологий, таких как React, Visual Studio Code и
					Microsoft SQL Server.
				</p>
			</div>

			<div className="section">
				<h2>Курсы и тренинги</h2>
				<p>
					<strong>"JavaScript level 1"</strong> — 2022-2023,{" "}
					<strong>Алиф академия</strong>
				</p>
				<p>
					<strong>"JavaScript level 2 (React JS)"</strong> — 2022-2023,{" "}
					<strong>Алиф академия</strong>
				</p>
				<p>
					<strong>"Frontend-разработчик PRO"</strong> — 2023-2024,{" "}
					<strong>Скиллбокс</strong>
				</p>
				<p>
					<strong>"Основы Python: создаём телеграмбота"</strong> — 2024,{" "}
					<strong>Нетология</strong>
				</p>
				<p>
					<strong>Английский язык, Уровень B1</strong> —{" "}
					<strong>УЦА, 2024 по настоящее время</strong>
				</p>
			</div>
		</div>
	);
};
export default Resume;
