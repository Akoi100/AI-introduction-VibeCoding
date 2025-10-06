// Course data
const courses = [
    {
        id: 1,
        title: "Introduction to JavaScript",
        description: "Learn the basics of JavaScript programming.",
        lessons: ["Variables and Data Types", "Functions", "DOM Manipulation"],
        completed: false
    },
    {
        id: 2,
        title: "HTML & CSS Fundamentals",
        description: "Master the building blocks of the web.",
        lessons: ["HTML Structure", "CSS Styling", "Responsive Design"],
        completed: false
    },
    {
        id: 3,
        title: "Web Development with React",
        description: "Build dynamic web apps with React.",
        lessons: ["Components", "State Management", "Hooks"],
        completed: false
    }
];

// DOM elements
const courseList = document.getElementById("course-list");
const courseDetail = document.getElementById("course-detail");

// Display course list
function displayCourses() {
    courseList.innerHTML = "";
    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.className = "course-card";
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
        `;
        courseCard.addEventListener("click", () => showCourseDetail(course.id));
        courseList.appendChild(courseCard);
    });
}

// Show course detail
function showCourseDetail(courseId) {
    const course = courses.find(c => c.id === courseId);
    courseDetail.innerHTML = `
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <h3>Lessons:</h3>
        <div id="lessons">
            ${course.lessons.map(lesson => `<div class="lesson">${lesson}</div>`).join("")}
        </div>
        <button id="complete-btn">
            ${course.completed ? "Completed ✓" : "Mark as Completed"}
        </button>
    `;
    courseDetail.classList.remove("hidden");

    const completeBtn = document.getElementById("complete-btn");
    completeBtn.addEventListener("click", () => {
        course.completed = !course.completed;
        showCourseDetail(courseId);
    });
}

// Initialize
displayCourses();
